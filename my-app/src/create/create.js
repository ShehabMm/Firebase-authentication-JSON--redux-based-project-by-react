import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { useState } from "react";
import Drawerr from "../components/DrawerConstant";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
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

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <div>
          <Drawerr
            setmyMode={setmyMode}
          />
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
            name="title"
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
            name={price}
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
            onChange={() => {
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
        </Container>
      </>
    </ThemeProvider>
  );
};

export default Create;
