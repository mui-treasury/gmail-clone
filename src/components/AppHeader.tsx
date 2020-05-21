import React from "react";
import styled from "styled-components";
import { getHeader, getCollapseIcon } from "@mui-treasury/layout";
import { Toolbar, makeStyles } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

const Header = getHeader(styled);
const CollapseIcon = getCollapseIcon(styled);

const useStyles = makeStyles({
  collapse: {
    marginLeft: -12,
    marginRight: 4,
  },
  logo: {
    height: 40,
  },
  toolbar: {
    backgroundColor: "#fff",
    boxShadow: "inset 0 -1px 0 rgba(100,121,143,0.122)",
  },
});

const AppHeader = () => {
  const styles = useStyles();
  return (
    <Header>
      <Toolbar className={styles.toolbar}>
        <CollapseIcon className={styles.collapse} sidebarId={"primarySidebar"}>
          {() => <Menu />}
        </CollapseIcon>
        <img
          className={styles.logo}
          alt=""
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x.png"
        />
      </Toolbar>
    </Header>
  );
};

export default AppHeader;
