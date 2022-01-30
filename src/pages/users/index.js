import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../../components/PageCreator";
import { getAllUsers, createUser, deleteUser, updateUser } from "../../redux/action/userActions";
// import DateRangePicker from "react-bootstrap-daterangepicker";
import { ROLES } from "../../contants";

const Users = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user.users);
  const formData = [
    {
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Type Name",
      required: true,
      size: 6,
    },
    {
      type: "number",
      name: "mobile",
      label: "Mobile",
      placeholder: "Type Mobile",
      required: true,
      size: 6,
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Type Password",
      required: true,
      size: 6,
    },
    {
      type: "select",
      name: "role",
      size: 6,
      required: true,
      label: "Role",
      options: ROLES,
      optionLabelProp: "title",
      optionValueProp: "value",
    },
    {
      type: "select",
      name: "status",
      size: 6,
      required: true,
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
  ]

  const tableHeaders = [
    { title: "Name", key: "name" },
    { title: "Role", key: "role" },
    {
      title: "Mobile",
      key: "mobile",
    },
    { title: "Status", key: "status" },
    { title: "Created At", key: "createdAt" },
  ];

  const pageProps = {
    title: "Admin Users",
    layout: "tabular",
    formData: formData,
    tableHeaders: tableHeaders,
    tableData: data,
    searchByField: ["name", 'mobile'],
    searchByLabel: "Name or Mobile",
    modalSize: 'md',
    sortable: true,
    // hideEdit: false,
    // hideDelete: true,
    // hideAdd: true,
    // hideView: true,
    tableRowActions: [],
    pageHeaderActions: [],
    onAdd: createUser,
    onEdit: updateUser,
    onDelete: deleteUser,

    getData: (e) => getAllUsers(),

  };
  React.useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <PageCreator {...pageProps} />
  );
};

export default Users;