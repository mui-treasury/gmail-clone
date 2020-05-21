import React from "react";
import styled from "styled-components";
import { getHeader, getCollapseIcon } from "@mui-treasury/layout";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import { useGoogleAvatarStyles } from "@mui-treasury/styles/avatar/google";
import {
  Box,
  Toolbar,
  makeStyles,
  InputBase,
  IconButton,
  Avatar,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Apps from "@material-ui/icons/Apps";

const Header = getHeader(styled);
const CollapseIcon = getCollapseIcon(styled);

const useStyles = makeStyles({
  root: {
    minWidth: 768,
  },
  collapse: {
    marginLeft: -12,
    marginRight: 4,
  },
  logo: {
    height: 40,
  },
  toolbar: {
    minHeight: '64px !important',
    backgroundColor: "#fff",
    boxShadow: "inset 0 -1px 0 rgba(100,121,143,0.122)",
  },
  searchInput: {
    backgroundColor: "#f1f3f4",
    height: 48,
    borderRadius: 8,
    padding: "0 8px",
    maxWidth: 720,
    flexGrow: 1,
  },
});

const AppHeader = () => {
  const styles = useStyles();
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 24 });
  const gutterStyles = useRowGutterStyles({ size: 8 });
  const tinyGutterStyles = useRowGutterStyles({
    size: 2,
    before: 10,
  });
  const googleStyles = useGoogleAvatarStyles({ avatarSize: 32, ringSize: 40 });
  const avatarStyles = useSizedIconButtonStyles({ padding: 4, childSize: 32 });
  return (
    <Header className={styles.root}>
      <Toolbar className={styles.toolbar}>
        <Box width={238} display={"flex"} alignItems="center">
          <CollapseIcon
            className={styles.collapse}
            sidebarId={"primarySidebar"}
          >
            {() => <Menu />}
          </CollapseIcon>
          <img
            className={styles.logo}
            alt=""
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x.png"
          />
        </Box>
        <InputBase
          className={styles.searchInput}
          placeholder="Search mail"
          startAdornment={
            <IconButton className={gutterStyles.child} classes={actionStyles}>
              <Search />
            </IconButton>
          }
          endAdornment={
            <IconButton classes={actionStyles}>
              <ArrowDropDown />
            </IconButton>
          }
        />
        <Box ml='auto' className={tinyGutterStyles.parent}>
          <IconButton classes={actionStyles}>
            <HelpOutline />
          </IconButton>
          <IconButton classes={actionStyles}>
            <Apps />
          </IconButton>
        </Box>
        <Box ml={1} mr={-1.5}>
          <IconButton className={googleStyles.root} classes={avatarStyles}>
            <Avatar
              alt=""
              src="https://lh3.googleusercontent.com/ogw/ADGmqu8IRt2zAKQDEDvqL5Egm51VKCxJm2eb-N8YELr3=s64-c-mo"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Header>
  );
};

export default AppHeader;
