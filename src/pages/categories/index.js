import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../../components/PageCreator";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} from "../../redux/action/categoryActions";
// import DateRangePicker from "react-bootstrap-daterangepicker";

const Categories = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.all.categories);

  const formData = [
    {
      type: "text",
      name: "categoryName",
      label: "Category Name",
      placeholder: "Type Category Name",
      required: true,
      size: 12,
    },
    {
      type: "number",
      name: "priority",
      label: "Priority",
      placeholder: "Type Priority",
      required: true,
      size: 12,
    },

    {
      type: "select",
      name: "status",
      size: 12,
      defaultValue: "true",
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
  ];

  const tableHeaders = [
    { title: "Category Name", key: "categoryName" },
    { title: "Priority", key: "priority" },

    { title: "Status", key: "status" },
    { title: "Created At", key: "createdAt" },
  ];

  const pageProps = {
    title: "Categories",
    layout: "tabular",
    formData: formData,
    tableHeaders: tableHeaders,
    tableData: data,
    searchByField: "categoryName",
    searchByLabel: "categoryName",
    modalSize: "xs",
    sortable: true,

    paginated: true,

    enableImport: false,
    importHeaders: [],

    importData: [],

    // hideEdit: false,
    // hideDelete: true,
    // hideAdd: true,
    // hideView: true,
    tableRowActions: [],
    pageHeaderActions: [],

    defaultFormValues: {},
    deleteVariableTitle: undefined,
    onAdd: createCategory,
    onEdit: updateCategory,
    onDelete: deleteCategory,
    onImport: () => { },

    getData: (e) => getAllCategories(),
    getImportData: () => { },
    afterAddSuccess: () => { },
    afterEditSuccess: () => { },
    afterDeleteSuccess: () => { },
    afterImportSuccess: () => { },
  };

  return (
    <div>
      <PageCreator {...pageProps} />
    </div>
  );
};

export default Categories;
