import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../../components/PageCreator";
import { getAllPlatform, createPlatform, deletePlatform, updatePlatform } from "../../redux/action/platformActions";

const Platforms = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.all.platforms);


  const formData = [
    {
      type: "text",
      name: "platformName",
      label: "Platform Name",
      placeholder: "Type Platform Name",
      required: true,
      size: 12,
    },
    {
      type: "file",
      name: "platformImage",
      label: "Platform Image",
      placeholder: "Type Platform Image",
      required: true,
      size: 12,
    },
  ]

  const tableHeaders = [
    { title: "Name", key: "platformName" },
    { title: "Image", key: "platformImage", type: 'image' },
  ];

  const pageProps = {
    title: "Platforms",
    layout: "tabular",
    formData: formData,
    tableHeaders: tableHeaders,
    tableData: data,
    searchByField: ["platformName"],
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
    onAdd: createPlatform,
    onEdit: updatePlatform,
    onDelete: deletePlatform,
    onImport: () => { },

    getData: (e) => getAllPlatform(),
    getImportData: () => { },
    afterAddSuccess: () => { },
    afterEditSuccess: () => { },
    afterDeleteSuccess: () => { },
    afterImportSuccess: () => { },
  };
  React.useEffect(() => {
    dispatch(getAllPlatform());
  }, []);
  return (
    <div>
      <PageCreator {...pageProps} />
    </div>
  );
};

export default Platforms;
