import React from "react";
import styled from "styled-components";
import {
  Box,
  IconButton,
  MenuItem,
  Checkbox,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Refresh from "@material-ui/icons/Refresh";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Settings from "@material-ui/icons/Settings";
import Keyboard from "@material-ui/icons/Keyboard";
import Edit from "@material-ui/icons/Edit";
import Inbox from '@material-ui/icons/Inbox';
import LocalOffer from '@material-ui/icons/LocalOffer';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import ArrowMenu from "@mui-treasury/components/menu/arrow";
import { GmailTabs, GmailTabItem } from "@mui-treasury/components/tabs/gmail";
import MailListItem from './MailListItem'

const Div = styled("div")`
  height: 48px;
  padding: 0 16px;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  display: flex;
  align-items: center;
`;

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 14,
    paddingLeft: 32,
    width: 160,
  },
}));

const useCheckboxStyles = makeStyles(({ palette }) => ({
  checked: {
    color: palette.text.primary,
  },
}));

const AppContent = () => {
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  const gutterStyles = useRowGutterStyles({ size: "0.25rem" });
  const menuItemClasses = useStyles();
  const checkboxClasses = useCheckboxStyles();
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Div>
        <Box display="inline-flex" className={gutterStyles.parent}>
          <ArrowMenu
            renderElement={({ styles, onClose }) => (
              <Checkbox
                classes={checkboxClasses}
                className={styles.button}
                color={"default"}
                onChange={onClose}
              />
            )}
          >
            <MenuItem classes={menuItemClasses}>All</MenuItem>
            <MenuItem classes={menuItemClasses}>None</MenuItem>
            <MenuItem classes={menuItemClasses}>Read</MenuItem>
            <MenuItem classes={menuItemClasses}>Unread</MenuItem>
          </ArrowMenu>
          <IconButton classes={actionStyles}>
            <Refresh />
          </IconButton>
          <IconButton classes={actionStyles}>
            <MoreVert />
          </IconButton>
        </Box>
        <Box
          display="inline-flex"
          alignItems="center"
          ml="auto"
          className={gutterStyles.parent}
        >
          <Box fontSize={12} color="text.secondary">
            1-50 of 1,971
          </Box>
          <IconButton disabled classes={actionStyles}>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton classes={actionStyles}>
            <KeyboardArrowRight />
          </IconButton>
          <ArrowMenu
            renderElement={({ styles, onClose }) => (
              <IconButton
                className={styles.button}
                color={"default"}
                onChange={onClose}
              >
                <Keyboard />
              </IconButton>
            )}
          >
            <MenuItem classes={menuItemClasses}>
              <ListItemIcon style={{ minWidth: 32 }}>
                <Edit fontSize={"small"} />
              </ListItemIcon>
              English
            </MenuItem>
          </ArrowMenu>
          <IconButton classes={actionStyles}>
            <Settings />
          </IconButton>
        </Box>
      </Div>
      <GmailTabs value={index} onChange={(_, value) => setIndex(value)}>
        <GmailTabItem icon={<Inbox />} label={"Primary"} />
        <GmailTabItem
          icon={<People />}
          label={"Social"}
          tag={"2 new"}
          subLabel={"Youtube, LinkedIn"}
        />
        <GmailTabItem
          icon={<LocalOffer />}
          label={"Promotions"}
          subLabel={"Pattern Matching, Medium Daily"}
        />
        <GmailTabItem icon={<Info />} label={"Updates"} tag={"15 new"} />
      </GmailTabs>
      <MailListItem />
    </>
  );
};

export default AppContent;
