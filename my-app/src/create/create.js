import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { useState } from "react";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import Drawerr from "../components/DrawerConstant";
const Create = () => {

  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light?"
        ? "light"
        : "dark"
  );




  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
          // palette values for light mode
          primary: {
            main: red[700],
          },
        }
        : {
          // palette values for dark mode

          primary: {
            main: grey[900],
          },
        }),
    },
  });

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <div>
          <Drawerr setmyMode={setmyMode} mode={mode} permanentOrtemp={undefined} setnoneOrblock={undefined} />
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
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <Button
            sx={{ mt: 4 }}
            variant="contained"
            color="error"
            onClick={(eo) => {
              eo.preventDefault();
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


          <button 
        
          
          >delete</button>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default Create;
