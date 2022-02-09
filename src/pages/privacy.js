import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5)
  },
  title: {
    fontWeight: theme.palette.fontWeights.bold,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: theme.spacing(5)
  },
  header: {
    margin: theme.spacing(5, 0, 2, 0),
    fontWeight: theme.palette.fontWeights.semiBold,
  }
}));

const Privacy = () => {
  const classes = useStyles();
  const [sticky, setSticky] = React.useState()
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">Privacy Policy</Typography>

      <Typography className={classes.text}>This page is used to inform App visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</Typography>
      <br />
      <Typography className={classes.text}>Loot Deals App is free android app. This SERVICE is provided by Loot Deals App at no cost and is intended for use as is.</Typography>

      <Typography className={classes.header} variant="h5">Security</Typography>
      <Typography className={classes.text}>We really cares about users security that's why we didn't collect any user information and this app is totally free, You can just install app and start using it no need to give your information</Typography>


      <Typography className={classes.header} variant="h5">Cookies</Typography>
      <Typography className={classes.text}>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device internal memory.</Typography><br />
      <Typography className={classes.text}>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collection information and to improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
      </Typography>


      <Typography className={classes.header} variant="h5">Links to Other Sites</Typography>
      <Typography className={classes.text}>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Typography>


      <Typography className={classes.header} variant="h5">Changes to This Privacy Policy</Typography>
      <Typography className={classes.text}>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</Typography>


      <Typography className={classes.header} variant="h5">Your Acceptance of These Terms</Typography>
      <Typography className={classes.text}>By using this App, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our App. Your continued use of the App following the posting of changes to this policy will be deemed your acceptance of those changes.</Typography>



      <Typography className={classes.header} variant="h5">Contact Us</Typography>
      <Typography className={classes.text}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <Link href="mailto:thedealsapp@gmail.com">thedealsapp@gmail.com</Link>.</Typography>

    </div>
  );
};
export default Privacy;
