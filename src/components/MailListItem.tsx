import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
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
import { useGrabIconStyles } from '@mui-treasury/styles/icon/grab';

const StyledDrag = styled(DragIndicator)`
  color: rgba(0,0,0,0.2);
  align-self: center;
`

const Div = styled("div")`
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    z-index: 1;
    ${StyledDrag} {
      opacity: 1;
    }
  }
  ${StyledDrag} {
    opacity: 0;
    transition: 0.2s;
  }
`;

const StyledIconButton = styled(IconButton)`
  color: rgba(0, 0, 0, 0.2);
  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const MailListItem = () => {
  const actionStyles = useSizedIconButtonStyles({ childSize: 20, padding: 10 });
  const gutterStyles = useRowGutterStyles({ size: -10, before: -8 });
  const grabStyles = useGrabIconStyles()
  return (
    <Div>
      <StyledDrag className={grabStyles.root} />
      <div className={gutterStyles.parent}>
        <StyledIconButton classes={actionStyles}>
          <CheckBoxOutlineBlank />
        </StyledIconButton>
        <StyledIconButton classes={actionStyles}>
          <StarBorder />
        </StyledIconButton>
        <StyledIconButton classes={actionStyles}>
          <LabelOutlined />
        </StyledIconButton>
      </div>
    </Div>
  );
};

export default MailListItem;
