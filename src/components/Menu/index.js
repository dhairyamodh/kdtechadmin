import * as React from "react";
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  ListItemIcon,
  Box,
  AppBar,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsTwoTone";
import PersonIcon from "@mui/icons-material/PersonOutlineTwoTone";
import Settings from "@mui/icons-material/SettingsTwoTone";
import TimeIcon from "@mui/icons-material/AccessTimeTwoTone";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/action/userActions";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    borderBottom: `1px solid ${theme.palette.gray[700]}`,
    padding: "10px 0",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    width: `calc(100% - 280px)`,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiButtonBase-root": {
      margin: "0 5px",
    },
  },
  title: {
    fontSize: theme.palette.fontSizes.semibase,
    fontWeight: theme.palette.fontWeights.semiBold,
    textTransform: "capitalize",
  },
  subTitle: {
    fontSize: theme.palette.fontSizes.base - 1,
    color: theme.palette.text.inverted,
  },
  menuPaper: {
    overflow: "visible",
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: theme.palette.radius.medium,
    minWidth: 220,
    width: "auto",
  },
  menuContainer: {
    padding: "4px 20px 12px 20px",
  },
  btnContainer: {
    padding: "12px 20px 12px 20px",
  },
  menuTitle: {
    padding: "5px 0",
    fontSize: theme.palette.fontSizes.base,
    color: theme.palette.text.main,
    fontWeight: theme.palette.fontWeights.semiBold,
  },

  avatar: {
    background: theme.palette.primary.main,
    textTransform: "capitalize",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notiAnchorEl, setNotiAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [notiOpen, setNotiOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleNotiClick = (event) => {
    setNotiAnchorEl(event.currentTarget);
    setNotiOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setNotiOpen(false);
    setAnchorEl(null);
    setNotiAnchorEl(null);
  };
  const dispatch = useDispatch();

  const { name, email } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const accountMenu = (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      classes={{ paper: classes.menuPaper }}
      PaperProps={{
        elevation: 0,
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      getContentAnchorEl={null}
    >
      <Box className={classes.menuContainer}>
        <Typography className={classes.title}>{name}</Typography>
        <Typography className={classes.subTitle}>{email}</Typography>
      </Box>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <Typography className={classes.menuTitle}>Profile</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <Typography className={classes.menuTitle}>Settings</Typography>
      </MenuItem>
      <Box className={classes.btnContainer}>
        <Button variant="outlined" onClick={() => handleLogout()} fullWidth>
          Logout
        </Button>
      </Box>
    </Menu>
  );

  const notificationMenu = (
    <Menu
      anchorEl={notiAnchorEl}
      open={notiOpen}
      onClose={handleClose}
      onClick={handleClose}
      classes={{ paper: classes.menuPaper }}
      PaperProps={{
        elevation: 0,
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      getContentAnchorEl={null}
    >
      <div className={classes.menuContainer}>
        <Typography className={classes.title}>Notifications</Typography>
        <Typography className={classes.subTitle}>
          You have 2 notifications
        </Typography>
      </div>
      <Divider />
      <MenuItem>
        <Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "inherit",
              minHeight: "inherit",
            }}
          >
            <Typography className={classes.menuTitle}>
              New Subscription
            </Typography>
            &nbsp;
            <Typography className={classes.subTitle}>
              New Subscription Subscription Subscription
            </Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <TimeIcon
              style={{ fontSize: 15, marginRight: 5 }}
              color="secondary"
            />
            <Typography variant="caption" color="secondary">
              About 2 min ago
            </Typography>
          </Box>
        </Box>
      </MenuItem>
      <Box className={classes.btnContainer}>
        <Button variant="text" fullWidth color="primary">
          View More
        </Button>
      </Box>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        color="white"
        elevation="0"
        className={classes.AppBar}
      >
        <Toolbar className={classes.toolBar}>
          <Box>
            <img
              src="https://egrampanchayat.in:81/uploads/logo/logo.png"
              width="50"
              height="50"
            />
          </Box>
          {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                        <MailIcon />
                        </Badge>
                    </IconButton> */}
          <Box>
            <IconButton
              size="large"
              variant="contained"
              aria-label="show 17 new notifications"
              onClick={handleNotiClick}
            >
              {/* <Badge badgeContent={17} color="primary"> */}
              <NotificationsIcon fontSize="inherit" />
              {/* </Badge> */}
            </IconButton>
            <IconButton onClick={handleClick} size="small">
              {/* <Avatar fontSize="inherit" className={classes.avatar}>{name.charAt(0)}</Avatar> */}
            </IconButton>
            {accountMenu}
            {notificationMenu}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
