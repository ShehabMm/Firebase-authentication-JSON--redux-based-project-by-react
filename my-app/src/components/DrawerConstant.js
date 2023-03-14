import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Appbarr from "./Appbar";
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import "./header.css"
import Person2 from '@mui/icons-material/Person2';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Email from "@mui/icons-material/Email";
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import {  useNavigate } from "react-router-dom";

const drawerWidth = 280;

const Drawerr = ({setmyMode}) => {

const navigate = useNavigate()

const theme = useTheme()

  return (
    <Box>
      <Appbarr drawerWidth={drawerWidth} />

      <Drawer className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />


        <List>
        <ListItem disablePadding  sx={{ display:"flex", justifyContent:"center", mb:"19px"}}>  
        <IconButton sx={{  color:"#2196f3", top:"0",positin:"fixed" }}  onClick={()=>{  localStorage.setItem("currentMode",theme.palette.mode==="light"? "dark":"light" ) 
          setmyMode(theme.palette.mode==="light"? "dark": "light")  }}   >
      {        theme.palette.mode==="dark"? <Brightness7Icon sx={{color:"orange"}}  /> : <Brightness4Icon />  }   
         </IconButton>
        </ListItem>
        <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeEdit />
              </ListItemIcon>
              <ListItemText primary="Create"/>
            </ListItemButton>
          </ListItem>



          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderSpecialIcon/>
              </ListItemIcon>
              <ListItemText primary="My Data"/>
            </ListItemButton>
          </ListItem>



          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person2/>
              </ListItemIcon>
              <ListItemText primary="My Portfolio"/>
            </ListItemButton>
          </ListItem>




          <ListItem disablePadding onClick={()=>{

navigate("/form")



          }}>
            <ListItemButton>
              <ListItemIcon>
                <Email/>
              </ListItemIcon>
              <ListItemText primary="Contact Me"/>
            </ListItemButton>
          </ListItem>




        </List>




      </Drawer>
    </Box>
  );
};

export default Drawerr;
