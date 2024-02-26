import { Grid,Skeleton } from '@mui/material';
import React from 'react'
export const LayoutLoader = () => {
  return (
    <>
      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{ display: { xs: "none", sm: "block" } }}
          height={"100%"}
        >
          <Skeleton variant='rectangular' />
        </Grid>

        <Grid item xs={12} sm={8} lg={6} height={"100%"}>
          Home
        </Grid>

        <Grid
          item
          md={4}
          lg={3}
          height={"100%"}
          sx={{
            display: { xs: "none", md: "block" },
            padding: "2rem",
            bgcolor: "rgba(0,0,0,0.85)",
          }}
        >
          Third
        </Grid>
      </Grid>
    </>
  );

}
