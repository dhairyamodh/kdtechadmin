import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../../components/PageCreator";
import { getAllOffer, createOffer, deleteOffer, updateOffer } from "../../redux/action/offerActions";

const Offer = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.all.offers);


  const formData = [
    {
      type: "text",
      name: "offerName",
      label: "Offer Name",
      placeholder: "Type Offer Name",
      required: true,
      size: 12,
    },
    {
      type: "text",
      name: "offerLink",
      label: "Offer Link",
      placeholder: "Type Offer Link",
      required: true,
      size: 12,
    },
    {
      type: "file",
      name: "offerImage",
      label: "Offer Image",
      placeholder: "Type Offer Image",
      required: true,
      size: 12,
    },
  ]

  const tableHeaders = [
    { title: "Image", key: "offerImage", type: 'image' },
    { title: "Name", key: "offerName" },
    { title: "Link", key: "offerLink", renderRow: (row) => { return <div style={{ whiteSpace: 'nowrap', width: 500, overflow: 'hidden', textOverflow: "ellipsis" }}>{row.offerLink}</div> } },
  ];

  const pageProps = {
    title: "Offer",
    layout: "tabular",
    formData: formData,
    tableHeaders: tableHeaders,
    tableData: data,
    searchByField: ["offerName"],
    searchByLabel: "name",
    modalSize: 'sm',
    sortable: true,

    paginated: true,

    enableImport: false,
    importHeaders: [],

    importData: [],

    // hideEdit: false,
    // hideDelete: true,
    // hideAdd: true,
    // hideView: true,
    pageHeaderActions: [],

    defaultFormValues: {},
    deleteVariableTitle: undefined,
    onAdd: createOffer,
    onEdit: updateOffer,
    onDelete: deleteOffer,
    onImport: () => { },

    getData: (e) => getAllOffer(),
    getImportData: () => { },
    afterAddSuccess: () => { },
    afterEditSuccess: () => { },
    afterDeleteSuccess: () => { },
    afterImportSuccess: () => { },
  };
  React.useEffect(() => {
    dispatch(getAllOffer());
  }, []);
  return (
    <div>
      <PageCreator {...pageProps} />
    </div>
  );
};

export default Offer;
