import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Sign-up";
import Loading from "./components/loading";
import PopupForm from "./components/Popup form";
import Error404 from "./pages/error404";
import Newex from "./pages/Newex";
import Create from "../src/create/create";
import Homeresult from "./create/Homeresult";
import Emailjs from "./Emailjs/Emailjs";
import Contactform from "./create/form";
import MyData from "./components/myData";
import { store } from "./redux/store";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const router = createBrowserRouter([


  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error404 />,
  },

  {
    path: "/sign-up",
    element: <Signup />,
    errorElement: <Error404 />,
  },

  {
    path: "/contact",
    element: <App />,
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
    path: "/Newex",
    element: <Newex cls={""} children={""} />,
    // errorElement: <Error404 />,
  },

  {
    path: "/Create",
    element: <Create />,
    // errorElement: <Error404 />,
  },

  {
    path: "/Homeresult",
    element: <Homeresult />,
    // errorElement: <Error404 />,
  },

  {
    path: "/Emailjs",
    element: <Emailjs />,
    // errorElement: <Error404 />,
  },
  {
    path: "/Form",
    element: <Contactform />,
    // errorElement: <Error404 />,
  },

  {
    path: "/mydata",
    element: <MyData />,
    // errorElement: <Error404 />,

  },

]

);




const darkTheme = createTheme({

  palette: {
    mode: myTheme,
  },

}
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>

    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
