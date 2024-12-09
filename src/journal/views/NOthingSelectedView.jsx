import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NOthingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid>
        <Typography color="white" variant="h4">
          Selecciona una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
