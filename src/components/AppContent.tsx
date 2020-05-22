import React from "react";
import styled from "styled-components";
import { Box, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Refresh from "@material-ui/icons/Refresh";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Settings from "@material-ui/icons/Settings";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from '@mui-treasury/styles/gutter/row';

const Div = styled("div")`
  height: 48px;
  padding: 0 16px;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  display: flex;
  align-items: center;
`;

const AppContent = () => {
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  const gutterStyles = useRowGutterStyles({ size: "0.25rem" })
  return (
    <Div>
      <span className={gutterStyles.parent}>
        <IconButton classes={actionStyles}>
          <Refresh />
        </IconButton>
        <IconButton classes={actionStyles}>
          <MoreVert />
        </IconButton>
      </span>
      <Box component="span" ml="auto" className={gutterStyles.parent}>
        <Box fontSize={12} component="span" color="text.secondary">
          1-50 of 1,971
        </Box>
        <IconButton disabled classes={actionStyles}>
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton classes={actionStyles}>
          <KeyboardArrowRight />
        </IconButton>
        <IconButton classes={actionStyles}>
          <Settings />
        </IconButton>
      </Box>
    </Div>
  );
};

export default AppContent;
