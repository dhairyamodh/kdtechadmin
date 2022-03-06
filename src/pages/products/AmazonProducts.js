import React from "react";
import { makeStyles } from "@mui/styles";
import ModalContainer from "../../components/Common/ModalContainer/index";
import {
  Button,
  CardContent,
  Divider,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showSnackBar } from "../../redux/action/snackActions";
import {
  addProduct,
  getAllProducts,
  getProductInfo,
} from "../../redux/action/productActions";
import FormCreator from "../../components/Common/Form/FormCreator";
import { getAllCategories } from "../../redux/action/categoryActions";
import { getAllPlatform } from "../../redux/action/platformActions";
import { closeModal } from "../../redux/action/utilActions";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const AmazonProduct = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [url, setUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [productData, setProductData] = React.useState();

  const { products, categories, platforms } = useSelector((state) => state.all);
  const { modalOpen } = useSelector((state) => state.util);
  const open = modalOpen === "amazon";
  const [isManyProduct, setIsManyProduct] = React.useState(false);
  const { name, id } = useSelector((state) => state.user);
  React.useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllPlatform());
  }, []);

  const defaultFormValues = {
    productDescription:
      "<span>How To Get The Deal:</span><br/><br/><span>1. Click On Get Deal Button</span><br/><span>2. Add Product To Cart Or Click On Buy 1</span><br/><span>3. Select Address</span><br/><span>4. Select The Payment Method</span><br/><span>5. Place Order. Happy Looting</span>",
    postedBy: name,
    postedById: id,
  };

  const formData = [
    {
      type: "text",
      name: "productName",
      label: "Product Name",
      placeholder: "Type Product Name",
      required: true,
      size: 8,
    },
    {
      type: "text",
      name: "productUrl",
      label: "Product Url",
      placeholder: "Type Product Url",
      required: true,
      size: 4,
    },
    {
      type: "number",
      name: "basePrice",
      label: "Base Price",
      placeholder: "Type Base Price",
      required: true,
      size: 2,
    },
    {
      type: "number",
      name: "salePrice",
      label: "Sale Price",
      placeholder: "Type Sale Price",
      required: true,
      size: 2,
    },

    // {
    //   type: "datetime",
    //   name: "expireAt",
    //   label: "Exprire At",
    //   placeholder: "Type Exprire At",
    //   required: true,
    //   size: 3,
    //   disablePastDates: true
    // },
    {
      type: "multiselect",
      name: "categoryId",
      size: 4,
      label: "Category",
      options: categories,
      required: true,

      optionLabelProp: "categoryName",
      optionValueProp: "id",
      rules: {
        required: {
          value: true,
          message: "Category is required",
        },
      },
    },

    {
      type: "select",
      name: "platformId",
      size: 4,
      label: "Platform",
      options: platforms,
      optionLabelProp: "platformName",
      optionValueProp: "id",
    },
    {
      type: "select",
      name: "status",
      size: 4,

      label: "Status",
      options: [
        {
          title: "Active",
          value: "true",
        },
        {
          title: "Inactive",
          value: "false",
        },
      ],
      optionLabelProp: "title",
      optionValueProp: "value",
    },
    {
      type: "switch",
      name: "isManyProduct",
      label: "Many Product",
      placeholder: "Type Many Product",
      required: true,
      size: 4,
    },
    {
      type: isManyProduct ? "text" : "none",
      name: "manyProductTitle",
      label: "Many Product Title",
      placeholder: "Type Many Product Title",
      required: true,
      size: 4,
    },
    {
      type: "file",
      name: "productImage",
      label: "Product Image",
      placeholder: "Type Product Images",
      required: true,
      size: 12,
    },
  ];

  const handleClose = () => {
    setIsLoading(false);
    setUrl("");
    setProductData();

    dispatch(closeModal());
  };

  const onChangeUrl = (e) => {
    const value = e.target.value;
    setUrl(value);
  };

  const getInfo = async (productId) => {
    const asin = url.match("/([a-zA-Z0-9]{10})(?:[/?]|$)");
    const id = asin ? asin[1] : productId;
    if (id === null || !id) {
      dispatch(showSnackBar("Invalid url", "error"));
    }
    setIsLoading(true);
    dispatch(
      getProductInfo(
        {
          type: "amazon",
          productId: id,
        },
        async (res) => {
          setIsLoading(false);
          // setProductData(res.data.data);
          const amazonCatId = platforms.find(
            (f) => f.platformName.toLowerCase() === "amazon"
          );
          console.log("amazon cat id", amazonCatId);
          if (!amazonCatId) {
            alert("Amazon is not added");
            return;
          }

          const image = await urlToObject(res.data.data.productImage);

          const datatoset = {
            ...res.data.data,
            platformId: amazonCatId?.id,
            productImage: [image],
            status: "true",
          };
          setProductData(datatoset);
        },
        () => {
          setIsLoading(false);
        }
      )
    );
  };

  const onModalSubmit = (data) => {
    console.log("onModalSubmit", data);

    dispatch(
      addProduct(
        {
          ...defaultFormValues,
          ...data,
        },
        () => {
          handleClose();
          dispatch(getAllProducts());
        }
      )
    );
  };
  return (
    <ModalContainer
      open={open}
      onClose={() => handleClose()}
      title="Add Amazon Product"
    >
      <CardContent>
        <Grid container alignItems={"center"} justifyContent="space-between">
          <Grid item lg={10} sm={12} xs={12} md={10}>
            <TextField
              label="Add Url"
              size="small"
              fullWidth
              onChange={onChangeUrl}
              disabled={isLoading}
            />
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={getInfo} disabled={isLoading}>
              Get Details
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      {productData && (
        <>
          <Divider />
          <CardContent>
            <FormCreator
              formData={formData}
              title={"Product"}
              onClose={() => {}}
              mode={"edit"}
              onSubmit={(e) => onModalSubmit(e)}
              data={productData}
              defaultValues={defaultFormValues}
            />
          </CardContent>
        </>
      )}
    </ModalContainer>
  );
};

export default AmazonProduct;
const urlToObject = async (image) => {
  const response = await fetch(image);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], "image.jpg", { type: blob.type });
  console.log("productImage file", file);
  return file;
};
