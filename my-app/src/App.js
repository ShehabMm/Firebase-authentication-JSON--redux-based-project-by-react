import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Sign-up";
import Loading from "./components/loading";
import PopupForm from "./components/Popup form";
import Error404 from "./pages/error404";
import Create from "./create/create";
import Emailjs from "./Emailjs/Emailjs";
import Contactform from "./create/form";
import MyData from "./components/myData";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // errorElement: <Error404 />,
  },

  {
    path: "/sign-up",
    element: <Signup />,
    errorElement: <Error404 />,
  },

  {
    path: "/Loading",
    element: <Loading />,
    errorElement: <Error404 />,
  },

  {
    path: "/PopupForm",
    element: <PopupForm />,
    errorElement: <Error404 />,
  },


  {
    path: "/Create",
    element: <Create />,
    errorElement: <Error404 />,
  },



  {
    path: "/Emailjs",
    element: <Emailjs />,
    errorElement: <Error404 />,
  },
  {
    path: "/Form",
    element: <Contactform />,
    errorElement: <Error404 />,
  },

  {
    path: "/mydata",
    element: <MyData />,
    errorElement: <Error404 />,
  },
]);

const App = () => {
  // @ts-ignore
  const { myTheme } = useSelector((state) => state.counter);

  const darkTheme = createTheme({
    palette: {
      mode: myTheme,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>

        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};

export default App;
