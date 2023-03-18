import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import Person2 from "@mui/icons-material/Person2";
import ModeEdit from "@mui/icons-material/ModeEdit";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Email from "@mui/icons-material/Email";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";

const drawerWidth = 280;
const Drawerr = ({
  noneOrblock,
  permanentOrtemp,
  setnoneOrblock,
  setpermanentOrtemp,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLocation = useLocation();
  const dispatch = useDispatch();
  // @ts-ignore
  const { myTheme } = useSelector((state) => state.counter);

  return (
    <Box>
      <Drawer
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: noneOrblock, sm: "block" },
        }}
        variant={permanentOrtemp}
        anchor="left"
        open={true}
        onClose={() => {
          setpermanentOrtemp("permanent");
          setnoneOrblock("none");
        }}
      >
        <Divider />

        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", mb: "19px" }}
          >
            <IconButton
              sx={{ color: "#2196f3", top: "0", positin: "fixed" }}
              onClick={() => {
                dispatch(increment(myTheme === "dark" ? "light" : "dark"));

                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
              }}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon sx={{ color: "orange" }} />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </ListItem>
          <Divider />

          <ListItem
            disablePadding
            sx={{
              bgcolor:
                currentLocation.pathname === "/"
                  ? theme.palette.error.light
                  : null,
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{
              bgcolor:
                currentLocation.pathname === "/create"
                  ? theme.palette.error.light
                  : null,
            }}
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ModeEdit />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{
              bgcolor:
                currentLocation.pathname === "/mydata"
                  ? theme.palette.error.light
                  : null,
            }}
            disablePadding
            onClick={() => {
              navigate("/mydata");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FolderSpecialIcon />
              </ListItemIcon>
              <ListItemText primary="My Data" />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            onClick={() => {
              window.location.replace(
                "https:courageous-froyo-50292c.netlify.app"
              );
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Person2 />
              </ListItemIcon>
              <ListItemText primary="My Portfolio" />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{
              bgcolor: currentLocation.pathname === "/form" ? "red" : null,
            }}
            disablePadding
            onClick={() => {
              navigate("/form");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Contact Me" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Drawerr;
