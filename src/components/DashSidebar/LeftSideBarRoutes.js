import CategoryIcon from "@mui/icons-material/CategoryTwoTone";
import DashIcon from "@mui/icons-material/DashboardTwoTone";
import PostIcon from "@mui/icons-material/ImageTwoTone";
import UserIcon from "@mui/icons-material/AccountCircleTwoTone";
import ReportIcon from "@mui/icons-material/AssessmentTwoTone";
import SubCategoryIcon from "@mui/icons-material/SubdirectoryArrowRightTwoTone";
import AmazonIcon from "../Common/Icons/AmazonIcon";

const LeftSideBarRoutes = [
  {
    type: "heading",
    title: "Master",
  },
  {
    title: "Dashboard",
    icon: <DashIcon />,
    path: "/",
  },
  {
    title: "Users",
    icon: <UserIcon />,
    path: "/users",
  },
  {
    type: "heading",
    title: "Content",
  },

  {
    title: "Platforms",
    icon: <SubCategoryIcon />,
    path: "/platforms",
  },
  {
    title: "Categories",
    icon: <SubCategoryIcon />,
    path: "/categories",
  },
  {
    title: "Products",
    icon: <CategoryIcon />,
    path: "/products",
  },
  {
    title: "Amazon Auto Products",
    icon: <AmazonIcon />,
    path: "/amazonproducts",
  },
  {
    title: "Offers",
    icon: <SubCategoryIcon />,
    path: "/offers",
  },
];

export default LeftSideBarRoutes;
