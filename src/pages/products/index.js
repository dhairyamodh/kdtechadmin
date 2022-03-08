import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../../components/PageCreator";
import ExpireIcon from "@mui/icons-material/RemoveShoppingCart";
import NotExpireIcon from "@mui/icons-material/AddShoppingCart";
import {
  addProduct,
  updateProduct,
  getAllProducts,
  deleteProduct,
  toggleExpire,
  sendNotification,
} from "../../redux/action/productActions";
import { getAllCategories } from "../../redux/action/categoryActions";
import { getAllPlatform } from "../../redux/action/platformActions";
import { IconButton, Tooltip } from "@mui/material";
import { NotificationAdd } from "@mui/icons-material";

// import DateRangePicker from "react-bootstrap-daterangepicker";

const Categories = () => {
  const dispatch = useDispatch();

  const { products, categories, platforms } = useSelector((state) => state.all);
  const [isManyProduct, setIsManyProduct] = React.useState(false);
  const { name, id } = useSelector((state) => state.user);
  React.useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllPlatform());
  }, []);

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
      optionLabelProp: "categoryName",
      optionValueProp: "id",
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
    {
      type: "richtext",
      name: "productDescription",
      label: "Product Description",
      placeholder: "Type Product Description",
      required: true,
      size: 12,
    },
  ];

  const tableHeaders = [
    {
      title: "Image",
      key: "productImage",
      type: "image",

      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    {
      title: "Product Name",
      key: "productName",
      style: { width: 200 },
      renderRow: (d) => (
        <span
          style={{
            display: "-webkit-box",
            maxWidth: "200px",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {d.productName}
        </span>
      ),
    },
    {
      title: "Views",
      key: "viewCount",
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    {
      title: "Exp.",
      key: "expireAt",
      type: "date",
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },

    {
      title: "Base Price",
      key: "basePrice",
      isCurrency: true,
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    {
      title: "Sale Price",
      key: "salePrice",
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    {
      title: "Status",
      key: "status",
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    {
      title: "Created At",
      key: "createdAt",
      type: "date",
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  ];

  const handleExpire = (data) => {
    dispatch(
      toggleExpire(
        { id: data._id || data.id, isExpired: !data.isExpired },
        () => {
          dispatch(getAllProducts());
        }
      )
    );
  };
  const handleNotify = (data) => {
    dispatch(sendNotification(data));
  };

  const ExpireAction = (action) => {
    return (
      <Tooltip placement="top" title="Change Expiration">
        <IconButton onClick={() => handleExpire(action.data)}>
          {action.data.isExpired ? <NotExpireIcon /> : <ExpireIcon />}
        </IconButton>
      </Tooltip>
    );
  };

  const NotificationAction = (action) => {
    return (
      <Tooltip placement="top" title="Send Notification">
        <IconButton onClick={() => handleNotify(action.data)}>
          <NotificationAdd />
        </IconButton>
      </Tooltip>
    );
  };

  const pageProps = {
    title: "Products",
    layout: "tabular",
    formData: formData,
    tableHeaders: tableHeaders,
    tableData: products,
    searchByField: ["productName", "salePrice"],
    searchByLabel: "Product Name",
    modalSize: "lg",
    sortable: true,
    fullScreen: true,
    paginated: true,

    enableImport: false,
    importHeaders: [],

    importData: [],

    // hideEdit: false,
    // hideDelete: true,
    // hideAdd: true,
    // hideView: true,
    tableRowActions: [ExpireAction, NotificationAction],
    pageHeaderActions: [],

    defaultFormValues: {
      productDescription:
        "<span>How To Get The Deal:</span><br/><br/><span>1. Click On Get Deal Button</span><br/><span>2. Add Product To Cart Or Click On Buy 1</span><br/><span>3. Select Address</span><br/><span>4. Select The Payment Method</span><br/><span>5. Place Order. Happy Looting</span>",
      postedBy: name,
      postedById: id,
    },
    deleteVariableTitle: undefined,
    // onAdd: (data) => addProduct({ ...data, postedBy: name, postedById: id }),
    onAdd: addProduct,
    onEdit: updateProduct,
    onDelete: deleteProduct,
    onImport: () => {},
    watchFields: ["isManyProduct"],
    onWatchChange: (data) => {
      setIsManyProduct(data.isManyProduct);
    },
    getData: (e) => getAllProducts(),
    getImportData: () => {},
    afterAddSuccess: () => {},
    afterEditSuccess: () => {},
    afterDeleteSuccess: () => {},
    afterImportSuccess: () => {},
  };

  return (
    <div>
      <PageCreator {...pageProps} />
    </div>
  );
};

export default Categories;
