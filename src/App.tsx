import React from "react";
import styled from "styled-components";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getCollapseIcon,
  getContent,
} from "@mui-treasury/layout";
import {
  Toolbar,
  StylesProvider,
  CssBaseline,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import AppFooter from "./components/AppFooter";
import CustomTrigger from './components/CustomTrigger';

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", { anchor: "left" })
    .registerPermanentConfig("xs", {
      width: 256,
      collapsible: true,
      collapsedWidth: 72,
    });

  builder
    .create("secondarySidebar", { anchor: "right" })
    .registerPersistentConfig("sm", {
      width: 56,
      collapsible: false,
      persistentBehavior: "fit",
    });
});

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const CollapseIcon = getCollapseIcon(styled);
const Content = getContent(styled);

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

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

function App() {
  const styles = useStyles();
  return (
    <StylesProvider injectFirst>
      <Root
        theme={theme}
        scheme={scheme}
        initialState={{ sidebar: { secondarySidebar: { open: true } } }}
      >
        <CssBaseline />
        <Header>
          <Toolbar className={styles.toolbar}>
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
          </Toolbar>
        </Header>
        <DrawerSidebar sidebarId={"primarySidebar"}>Sidebar</DrawerSidebar>
        <Content>content</Content>
        <DrawerSidebar sidebarId={"secondarySidebar"}>
          Sidebar
        </DrawerSidebar>
        <CustomTrigger />
        <AppFooter />
      </Root>
    </StylesProvider>
  );
}

export default App;
