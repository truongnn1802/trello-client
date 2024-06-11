import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
function BoardBar() {
  const MENU_STYLE = {
    color: "primary.main",
    paddingX: "4px",
    border: "none",
    background: "#fff",
    "& .MuiSvgIcon-root": {
      color: "primary.main",
    },
    "&:hover": {
      bgcolor: "primary.50",
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip
          icon={<PersonAddIcon />}
          label="Dashboard"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<DashboardIcon />}
          label="Public/Private"
          clickable
          sx={MENU_STYLE}
        />
        <Chip icon={<DashboardIcon />} label="Add" clickable sx={MENU_STYLE} />
        <Chip
          icon={<DashboardIcon />}
          label="Automation"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<DashboardIcon />}
          label="Filters"
          clickable
          sx={MENU_STYLE}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>

        <AvatarGroup
          max={4}
          sx={{
            "& .MuiAvatar-root": {
              width: "30px",
              height: "30px",
              fontSize: "18px",
            },
          }}
        >
          {/* có thể dùng  total={10} */}
          <Tooltip title="Trello">
            <Avatar alt="Trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
