import { Box, Button, Container, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import Drawerr from "../components/DrawerConstant";
import Appbarr from "../components/Appbar";
import "./create.css"
const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);


  const [noneOrblock, setnoneOrblock] = useState("none");
  const [permanentOrtemp, setpermanentOrtemp] = useState("permanent");

  return (
    <div>
      <div>
        <Drawerr noneOrblock={noneOrblock} permanentOrtemp={permanentOrtemp} setnoneOrblock={setnoneOrblock} setpermanentOrtemp={setpermanentOrtemp} />
        <Appbarr drawerWidth={280} setnoneOrblock={setnoneOrblock} setpermanentOrtemp={setpermanentOrtemp} />

      </div>

      <Box
        className="create-app"
        component="form"
      
      >
        <TextField
                  sx={{ mt: "50px", width:"300px" }}

          autoComplete="off"
          onChange={(eo) => {
            settitle(eo.target.value);
          }}
          label="Title"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmojiPeople />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          autoComplete="off"
          onChange={(eo) => {
            setprice(Number(eo.target.value));
          }}
          label="Price"
          variant="filled"
          sx={{ mt: "50px", width:"300px" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <Button
          sx={{ mt: 4 }}
          variant="contained"
          color="error"
          onClick={(eo) => {
            fetch("http://localhost:3100/mydata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ title, price }),
            });
          }}
        >
          Submit
        </Button>
        <br />

      </Box>
    </div>
  );
};

export default Create;
