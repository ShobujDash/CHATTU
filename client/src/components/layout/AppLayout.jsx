import { Grid } from "@mui/material";
import React from "react";
import Title from "../shared/Title";
import Header from "./Header";

const AppLayout = () => (WrapperComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            First
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrapperComponent {...props} />
          </Grid>
          
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={
              {
                display: { xs: "none", md: "block" },
                padding: "2rem",
                bgcolor:"rgba(0,0,0,0.85)"
              }
            }
          >
            Third
          </Grid>
        </Grid>

      </>
    );
  };
};

export default AppLayout;
