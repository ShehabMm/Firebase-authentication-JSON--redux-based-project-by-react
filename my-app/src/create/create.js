import { Button, Container, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import Drawerr from "../components/DrawerConstant";
const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);


  const [noneOrblock, setnoneOrblock] = useState("none");
  const [permanentOrtemp, setpermanentOrtemp] = useState("permanent");

  return (
    <>
      <div>
        <Drawerr noneOrblock={noneOrblock} permanentOrtemp={permanentOrtemp} setnoneOrblock={setnoneOrblock} setpermanentOrtemp={setpermanentOrtemp}                />
      </div>

      <Container
        component="form"
        sx={{
          m: "auto",
          width: "50ch",
          display: "flex",
          flexDirection: "column",
          p: 2,
          textAlign: "center",
          position: "fixed",
          top: "20%",
          left: "40%",
        }}
      >
        <TextField
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
          sx={{ mt: "50px" }}
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

      </Container>
    </>
  );
};

export default Create;
