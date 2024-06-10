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
      }}
    >
      Content
    </Box>
  );
}

export default BoardContent;
