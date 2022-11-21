import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCmp from "../../Components/MuiComponents/Card";
import NavbarCmp from "../../Components/MuiComponents/Navbar";
import { fetchproduct } from "../../Store/Slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.product);
  // const state = useSelector((state) => state)
  console.log(data);

  useEffect(() => {
    dispatch(fetchproduct());
  }, []);

  return (
    <>
      <NavbarCmp />
      <Box sx={{ p: "30px" }}>
        <Grid container columnSpacing={2}>
          {data &&
            data.map((product) => {
              // console.log(product);
              // console.log(product.id , "id");
              // document.write("sfafsdfs <br/>");
              return (
                <Grid item lg={3} md={6} sm={12} sx={{ my: "5px" }} key={product.id}>
                  <CardCmp product={product} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
