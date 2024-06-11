import {
  AddCard,
  Attachment,
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
  DeleteForever as DeleteForeverIcon,
  DragHandle,
  Group,
  ModeComment,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const HEADER_CONTENT_HEIGHT = "50px";
const FOOTER_CONTENT_HEIGHT = "50px";

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContent,
        display: "flex",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": {
          m: 2,
        },
      }}
    >
      <Box
        sx={{
          width: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          height: "fit-content",
          maxHeight: (theme) =>
            `calc(${theme.trelloCustom.boardContent} - ${theme.spacing(5)})`,
        }}
      >
        <Box
          sx={{
            height: HEADER_CONTENT_HEIGHT,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Column Title</Typography>
          <Box>
            <ExpandMoreIcon
              id="basic-button-header"
              aria-controls={open ? "basic-menu-header" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: "text.primary" }}
            />
            <Menu
              id="basic-menu-header"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button-workspaces",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCard fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* List card */}
        <Box
          sx={{
            p: "0 5px",
            m: "0 5px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            p: 1,
            overflowX: "hidden",
            overflowY: "auto",
            maxHeight: (theme) =>
              `calc(${theme.trelloCustom.boardContent} - ${theme.spacing(
                5
              )} - ${HEADER_CONTENT_HEIGHT} - ${FOOTER_CONTENT_HEIGHT})`,

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ced0da",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#bfc2cf",
            },
          }}
        >
          <Card
            sx={{
              boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
              cursor: "pointer",
              overflow: "unset",
            }}
          >
            {/* <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            /> */}
            <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
              <Typography>Lizard</Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ p: "0 4px 8px" }}>
              <Button size="small" startIcon={<Group />}>
                20
              </Button>
              <Button size="small" startIcon={<ModeComment />}>
                15
              </Button>
              <Button size="small" startIcon={<Attachment />}>
                10
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box
          sx={{
            height: FOOTER_CONTENT_HEIGHT,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button startIcon={<AddCard />}>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandle sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default BoardContent;
