import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import AppsIcon from "@mui/icons-material/Apps";
import ModeSelect from "~/components/ModeSelect";
import Workspace from "./Menu/Workspace";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import Button from "@mui/material/Button";
import { Badge, TextField, Tooltip } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "./Menu/Profile";
import Add from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Close } from "@mui/icons-material";
import { useState } from "react";

function AppBar() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AppsIcon sx={{ color: "#fff" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            fontSize="small"
            sx={{ color: "#fff" }}
            inheritViewBox
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspace />
          <Recent />
          <Starred />
          <Templates />
          <Button
            startIcon={<Add />}
            variant="outlined"
            sx={{
              color: "#fff",
              border: "none",
              "&:hover": { border: "none" },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="text"
          size="small"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <Close
                  sx={{ color:searchValue != '' ? "#fff": 'transparent' , cursor: "pointer" }}
                  fontSize="small"
                  onClick={() => {
                    setSearchValue("");
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: "120px",
            "& label": {
              color: "#fff",
            },
            "& input": {
              color: "#fff",
            },
            "& label.Mui-focused": {
              color: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#fff",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot">
            <NotificationsNoneIcon sx={{ color: "#fff" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "#fff" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
