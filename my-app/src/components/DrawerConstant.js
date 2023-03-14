import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Appbarr from "./Appbar";
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "./header.css"
import Person2 from '@mui/icons-material/Person2';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const drawerWidth = 280;

const Drawerr = (setmyMode) => {
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
        <Toolbar />


        <List>
        <ListItem disablePadding  sx={{ display:"flex", justifyContent:"center"}}>
        <IconButton sx={{  color:"#2196f3", top:"-40px",positin:"fixed" }}  onClick={()=>{   setmyMode("light")  }}   >
         <Brightness7Icon  />  <Brightness4Icon />
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
                <Person2/>
              </ListItemIcon>
              <ListItemText primary="My Profile"/>
            </ListItemButton>
          </ListItem>

        </List>




      </Drawer>
    </Box>
  );
};

export default Drawerr;
