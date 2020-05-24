import React from "react";
import cx from "clsx";
import styled from "styled-components";
import { IconButton, Box, Tooltip, withStyles } from "@material-ui/core";
import Checkbox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import DragIndicator from "@material-ui/icons/DragIndicator";
import LabelOutlined from "@material-ui/icons/LabelOutlined";
import Drafts from "@material-ui/icons/Drafts";
import Archive from "@material-ui/icons/Archive";
import Delete from "@material-ui/icons/Delete";
import WatchLater from "@material-ui/icons/WatchLater";
import Label from "@material-ui/icons/Label";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: "rgba(0,0,0,0.72)",
    fontSize: 12,
    marginTop: 0,
  },
})(Tooltip);

const GmailAction = styled(IconButton)`
  color: rgba(0, 0, 0, 0.54);
  &:hover {
    color: #000;
  }
`;

const StyledDrag = styled(DragIndicator)`
  color: rgba(0, 0, 0, 0.2);
  align-self: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Div = styled("div")`
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  &.MailListItem-read {
    background-color: rgba(242, 245, 245, 0.8);
  }
  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    ${StyledDrag} {
      opacity: 1;
    }
  }
  & > .MailListItem-parent {
    display: inline-flex;
  }
  ${StyledDrag} {
    opacity: 0;
    transition: 0.2s;
  }
`;

const StyledIconButton = styled(IconButton)`
  color: rgba(0, 0, 0, 0.2);
  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
  &.MailListItem-checked {
    color: rgba(0, 0, 0, 0.87);
  }
  &.MailListItem-starred,
  &.MailListItem-labeled {
    color: #f8cb69;
  }
`;

const Text = styled("div")`
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  color: #5f6368;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  b {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Title = styled(Text)`
  flex-basis: 200px;
  max-width: 200px;
  flex-shrink: 0;

  & > *:not(:first-child) {
    margin-left: 4px;
    font-size: 12px;
  }
`;

const Date = styled(Text)`
  font-size: 12px;
  flex-basis: 100px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 16px;
`;

interface MailListItemProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  read?: boolean;
  initialChecked?: boolean;
  initialStarred?: boolean;
  initialLabeled?: boolean;
}

const MailListItem = ({
  title,
  description,
  read = false,
  initialChecked = false,
  initialStarred = false,
  initialLabeled = false,
}: MailListItemProps) => {
  const actionStyles = useSizedIconButtonStyles({ childSize: 20, padding: 10 });
  const gutterStyles = useRowGutterStyles({ size: -10, before: -8 });
  const [checked, setChecked] = React.useState(initialChecked);
  const [starred, setStarred] = React.useState(initialStarred);
  const [labeled, setLabeled] = React.useState(initialLabeled);
  const [hovered, setHovered] = React.useState(false);
  return (
    <Div
      className={cx(read && "MailListItem-read")}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StyledDrag fontSize="small" />
      <div className={cx("MailListItem-parent", gutterStyles.parent)}>
        <StyledIconButton
          className={cx(checked && "MailListItem-checked")}
          classes={actionStyles}
          onClick={() => setChecked(!checked)}
        >
          {checked ? <Checkbox /> : <CheckBoxOutlineBlank />}
        </StyledIconButton>
        <StyledIconButton
          className={cx(starred && "MailListItem-starred")}
          classes={actionStyles}
          onClick={() => setStarred(!starred)}
        >
          {starred ? <Star /> : <StarBorder />}
        </StyledIconButton>
        <StyledIconButton
          className={cx(labeled && "MailListItem-labeled")}
          classes={actionStyles}
          onClick={() => setLabeled(!labeled)}
        >
          {labeled ? <Label /> : <LabelOutlined />}
        </StyledIconButton>
      </div>
      <Title>{title}</Title>
      <Text>{description}</Text>
      {hovered ? (
        <Box flexShrink={0}>
          <StyledTooltip title="Archive">
            <GmailAction classes={actionStyles}>
              <Archive />
            </GmailAction>
          </StyledTooltip>
          <StyledTooltip title="Delete">
            <GmailAction classes={actionStyles}>
              <Delete />
            </GmailAction>
          </StyledTooltip>
          <StyledTooltip title="Mark as read">
            <GmailAction classes={actionStyles}>
              <Drafts />
            </GmailAction>
          </StyledTooltip>
          <StyledTooltip title="Snooze">
            <GmailAction classes={actionStyles}>
              <WatchLater />
            </GmailAction>
          </StyledTooltip>
        </Box>
      ) : (
        <Date>
          <b>May 21</b>
        </Date>
      )}
    </Div>
  );
};

export default MailListItem;
