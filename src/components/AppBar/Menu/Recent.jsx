import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
    Check,
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Recent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button-recent"
        aria-controls={open ? "basic-menu-recent" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        Recent
      </Button>
      <Menu
        id="basic-menu-recent"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-recent",
        }}
      >
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
