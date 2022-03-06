import moment from "moment";

export const DATEFORMAT = "DD/MM/YYYY";

export const DATEMONTHFORMAT = "DD MMM";

export const TIMEAMPMFORMAT = "h:mm A";

export const TIME24FORMAT = "HH:mm";

// const url = "http://52.55.94.175"

// export const BASEURL = "http://52.55.94.175:4001/api";

// export const BASEURL = "https://lootdealsapp.com/adminapi";

// export const BASEIMAGEURL = "https://lootdealsapp.com/api/util/file/";

export const BASEURL = "http://192.168.0.104:5000/adminapi";

export const BASEIMAGEURL = "http://192.168.0.104:5000/api/util/file/";

export const TIMEFORMAT = "HH:mm:ss";

export const TIMEONLY = "HH:mm";

export const DATETIMEFORMAT = "DD/MM/YYYY hh:mm a";

export const TIMEZONE = "Asia/Kolkata";

export const ROOTURL = "";

export const CURRENCY = "₹";

export const ROLES = [
  { title: "Admin", value: "admin" },
  { title: "Employee", value: "employee" },
];

export const MONTHSARRAY = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const WEEKARRAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dateRanges = {
  Today: [moment().toDate(), moment().toDate()],
  Yesterday: [
    moment().subtract(1, "days").toDate(),
    moment().subtract(1, "days").toDate(),
  ],
  "Last 7 Days": [moment().subtract(6, "days").toDate(), moment().toDate()],
  "Last 30 Days": [moment().subtract(29, "days").toDate(), moment().toDate()],
  "This Month": [
    moment().startOf("month").toDate(),
    moment().endOf("month").toDate(),
  ],
  "Last Month": [
    moment().subtract(1, "month").startOf("month").toDate(),
    moment().subtract(1, "month").endOf("month").toDate(),
  ],
};
