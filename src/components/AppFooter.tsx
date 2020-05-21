import React from "react";
import styled from "styled-components";
import { Grid, Typography, Link, makeStyles, Box } from "@material-ui/core";
import { getFooter } from "@mui-treasury/layout";

const useTextStyles = makeStyles({
  root: {
    fontSize: 12,
    color: "#666",
  },
});

const Footer = getFooter(styled);

const AppFooter = () => {
  const classes = useTextStyles();
  return (
    <Footer>
      <Box px={'1rem'} my={'1rem'}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography classes={classes}>
              47.43 GB (47%) of 100 GB used
            </Typography>
            <Link classes={classes}>Manage</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center" color="#666">
              <Link classes={classes}>Terms</Link> •{" "}
              <Link classes={classes}>Privacy</Link> •{" "}
              <Link classes={classes}>Program Policies</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="right">
              <Typography classes={classes}>
                Last account activity: 22 minutes ago
              </Typography>
              <Link classes={classes}>Details</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Footer>
  );
};

export default AppFooter;
