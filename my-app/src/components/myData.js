import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GppBad from "@mui/icons-material/GppBad";
import { useTheme } from "@emotion/react";
import Drawerr from "./DrawerConstant";

const MyData = () => {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);
  console.log(mydata);
  const theme = useTheme()
  return (
<> 
           <Drawerr/>
          
    <Box
      sx={{
        border:"2px solid red",
        ml: 50,
        mr: 50,
        display: "flex",
        justifyContent: "center",
        textAlign:"center",
        flexDirection:"column",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 2,
          width: "20%",
          height: 70,
        },
      }}
    >
      {mydata.map((item) => {
        return (
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: "400px",
              position: "relative",
              height: "10px",
              alignItems: "center",
              backgroundColor:"gold",
              


            }}
          >
            <Typography variant="h6" color="warm" sx={{ px: 2, mt: 5 }}>
              {item.title}
            </Typography>
            <Typography variant="h6" color="initial" sx={{ px: 2, mt: 5 }}>
              ${item.price}
            </Typography>
            <IconButton

            // onClick={()=>{

            //   fetch("http://localhost:3100/mydata", {

            //   method: 'DELETE',
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({ title, price })
  


            // }}
            
              sx={{ position: "absolute", right: "-10px", top: "-8px" }}
            >
              <GppBad />
            </IconButton>
          </Paper>
        );
      })}
    </Box>
    </>

  );
};

export default MyData;
