import React from "react";
import styled from "styled-components";
import Layout, {
  Root,
  getContent,
  getDrawerSidebar,
} from "@mui-treasury/layout";
import { StylesProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import AppFooter from "./components/AppFooter";
import CustomTrigger from "./components/CustomTrigger";

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

const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <Root
        theme={theme}
        scheme={scheme}
        initialState={{ sidebar: { secondarySidebar: { open: true } } }}
      >
        <CssBaseline />
        <AppHeader />
        <DrawerSidebar sidebarId={"primarySidebar"}>
          <AppSidebar />
        </DrawerSidebar>
        <Content>content</Content>
        <DrawerSidebar sidebarId={"secondarySidebar"}>Sidebar</DrawerSidebar>
        <CustomTrigger />
        <AppFooter />
      </Root>
    </StylesProvider>
  );
}

export default App;
