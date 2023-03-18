import { IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Drawerr from "./DrawerConstant";

const MyData = () => {
  const [ladata, setmydata] = useState([]);
  const [noneOrblock, setnoneOrblock] = useState("none");
  const [permanentOrtemp, setpermanentOrtemp] = useState("permanent");





  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [ladata]);

  let total = 0;
  return (
    <div>
      {ladata.map((item) => {
        total += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              height: "70px",
              alignItems: "center",
              backgroundColor: "gold",
              width: "400px",
              m: "auto",
              mt: "20px",
              top: "100px",
            }}
          >
            <Typography variant="h6" color="warm" sx={{ px: 2, mt: 5, mb: 2 }}>
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              sx={{ px: 2, mt: 5, mb: 2 }}
            >
              {item.price}
            </Typography>

            <IconButton
              sx={{ position: "absolute", right: "0", bottom: "38px" }}
              onClick={(eo) => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });
              }}
            >
              <CloseIcon />
            </IconButton>
          </Paper>
        );
      })}

      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          height: "70px",
          alignItems: "center",
          background: "rgba(4, 216, 65, 0.41)",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          width: "200px",
          m: "auto",
          mt: "20px",
          top: "100px",
        }}
      >
        <Typography variant="h6" color="white" sx={{ ml: 1 }}>
          Total Price = $ {total}
        </Typography>
      </Paper>
      <Drawerr noneOrblock={noneOrblock} permanentOrtemp={permanentOrtemp} setnoneOrblock={setnoneOrblock} setpermanentOrtemp={setpermanentOrtemp} />
    </div>
  );
};

export default MyData;
