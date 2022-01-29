import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../../components/PageCreator";
import BusinessIcon from '@mui/icons-material/BusinessCenterTwoTone';
import CommonAction from '../../components/Common//Actions/CommonAction'
// import { BASEIMAGEURL, DATEFORMAT, dateRanges } from "../../contants";

import { getAllUsers, createUser, deleteUser, updateUser } from "../../redux/action/userActions";
// import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import { useHistory } from "react-router";
import { Badge, IconButton } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user.users);
  const [state, setState] = React.useState({
    start: moment(),
    end: moment(),
  });
  const history = useHistory()
  // const { start, end } = state;

  // const handleCallback = (start, end) => {
  //   // props.setValue({ start, end });
  //   // onChange(setState({ start, end }));
  //   setState({ start, end });
  //   dispatch(getAllUsers());
  // };

  // const { role, salonId, branchId } = useSelector((state) => state.user);

  // const DatePicker = (action) => (
  //   <div class="">
  //     <DateRangePicker
  //       initialSettings={{
  //         startDate: start.toDate(),
  //         endDate: end.toDate(),

  //         locale: {
  //           format: DATEFORMAT,
  //         },
  //         maxDate: new Date(),

  //         ranges: dateRanges,
  //       }}
  //       onCallback={handleCallback}
  //     >
  //       <input type="text" class="form-control" />
  //     </DateRangePicker>
  //   </div>
  // );

  const CommonActionBtn = (action) => (
    <CommonAction
      onClick={() => { history.push(`/user/${action.data._id}`) }}
      title="Busineeses"
      children={<Badge badgeContent={action.data.totalBusinesses} color="primary">
        <BusinessIcon color="primary" />
      </Badge>}
    />
  );

  const formData = [
    {
      type: "text",
      name: "name",
      label: "User Name",
      placeholder: "Type User Name",
      required: true,
      size: 12,
    },
    {
      type: "number",
      name: "mobile",
      label: "User Mobile",
      placeholder: "Type User Mobile",
      required: true,
      size: 12,
    },
    {
      type: "select",
      name: "status",
      size: 12,

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
    { title: "User Name", key: "name" },
    {
      title: "User Email",
      key: "mobile",
    },
    { title: "Status", key: "status" },
    { title: "Created At", key: "createdAt" },
  ];

  const pageProps = {
    title: "Users",
    layout: "tabular",
    formData: formData,
    tableHeaders: tableHeaders,
    tableData: data,
    searchByField: "name",
    searchByLabel: "name",
    modalSize: 'xs',
    sortable: true,
    // hideEdit: false,
    // hideDelete: true,
    // hideAdd: true,
    // hideView: true,
    tableRowActions: [CommonActionBtn],
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
    <div>
      <PageCreator {...pageProps} />
    </div>
  );
};

export default Users;









// import React from "react";
// import { makeStyles } from "@mui/material/styles";
// import { Box, Button, Grid, Typography } from "@mui/material";
// import InfoCard from "../../components/InfoCard";
// import UserIcon from "@mui/icons-material/SupervisedUserCircle";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
// import OrderIcon from "@mui/icons-material/RestaurantMenu";
// import BranchIcon from "@mui/icons-material/AccountTree";
// import CustomerIcon from "@mui/icons-material/InsertEmoticon";
// import ItemIcon from "@mui/icons-material/LocalPizza";
// import SmartTable from "../../components/Common/SmartTable";

// import AddNewIcon from "@mui/icons-material/Add";
// import AddNewRestaurant from "../../components/Modal/AddNewRestaurant";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllRestaurants } from "../../redux/action/restaurantActions";
// import { getAllUsers } from "../../redux/action/userActions";
// import AddNewUser from "../../components/Modal/AddNewUser";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     [theme.breakpoints.down("md")]: {
//       backgroundColor: "white",
//     },
//   },
//   topContainer: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: theme.spacing(2)
//   },
//   pageTitle: {
//     fontWeight: theme.palette.fontWeights.bold,
//   },
//   addnewResContainer: {
//     margin: "2vh 0vw",
//   },
//   btn: {
//     borderRadius: theme.palette.radius.base,
//     textTransform: 'capitalize',
//     fontWeight: theme.palette.fontWeights.semiBold
//   }
// }));

// const Restaurants = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   // const users = useSelector((state) => state.user.users);
//   const users = [
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },
//     {
//       user_name: 'skdjsd',
//       user_role: 'sjddhsj'
//     },

//   ]
//   const [state, setState] = React.useState({
//     open: false,
//     mode: "add",
//     restaurant: undefined,
//   });
//   // const [openAdd, setOpenAdd] = React.useState(false);
//   // const [selectedRes, setSelectedRes] = React.useState();
//   // const [mode, setMode] = React.useState();

//   React.useEffect(() => {
//     // dispatch(getAllUsers());
//   }, []);

//   const TableHeader = [
//     {
//       title: "User Name",
//       width: "200px",
//       numeric: false,
//     },
//     {
//       title: "Role",
//       width: "200px",
//       numeric: false,
//     },
//   ];

//   const FieldOptions = [
//     {
//       title: "user_name",
//       numeric: false,
//     },
//     {
//       title: "user_role",
//       numeric: false,
//     },

//   ];

//   const addNewRestaunrant = () => {
//     // setOpenAdd(true);
//     // setMode("add");
//     setState({
//       ...state,
//       open: true,
//       mode: "add",
//     });
//   };

//   const OpenResInfo = (data) => {
//     setState({
//       ...state,
//       open: true,
//       mode: "edit",
//       restaurant: data,
//     });
//   };

//   const closeModal = (data) => {
//     setState({
//       ...state,
//       open: false,
//       mode: "add",
//       restaurant: undefined,
//     });
//   };
//   return (
//     <div className={classes.root}>
//       <Grid container>
//         <Box className={classes.topContainer}>
//           <Box>
//           </Box>
//           <Box className={classes.addnewResContainer}>
//             <Button
//               color="primary"
//               disableElevation
//               variant="contained"
//               startIcon={<AddNewIcon />}
//               onClick={() => addNewRestaunrant()}
//             >
//               Add New User
//             </Button>
//           </Box>
//         </Box>
//         {state.open && (
//           <AddNewUser
//             open={state.open}
//             mode={state.mode}
//             onClose={() => closeModal()}
//             values={state.restaurant}
//           />
//         )}
//         <SmartTable
//           header={TableHeader}
//           body={users || []}
//           fieldOptions={FieldOptions}
//           tableTitle="Users List"
//           onRowSelect={(data, index) => OpenResInfo(data, index)}
//         />
//       </Grid>
//     </div>
//   );
// };
// export default Restaurants;
