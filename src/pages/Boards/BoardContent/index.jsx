import { Box } from "@mui/material";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.boardBarHeight} - ${theme.trelloCustom.appBarHeight})`,
        display: "flex",
        alignItems: "center",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      Content
    </Box>
  );
}

export default BoardContent;
