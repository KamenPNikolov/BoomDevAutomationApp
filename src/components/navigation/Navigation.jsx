import styles from "./Navigation.module.scss";
import classNames from "classnames";
import * as React from 'react';
import TextField from "@mui/material/TextField"
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Header from "../header/Header";

import { Stack,Drawer, IconButton, List, Menu, ListItem, MenuItem, ListItemIcon, Badge, ListItemText, Typography} from "@mui/material";
import { HomeOutlined, BedOutlined,MoreVertOutlined } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import User from "../user/User";



export default function Navigation(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <div>
            <Drawer className={classNames(styles["drawer"])} variant="permanent" >
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                    <User  name="John Doe" size={40} hasWelcome={false} headingSize="h6" avatar = "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"></User> 
                    <IconButton
                            id="long-button"
                            onClick={handleClick}>
                            <MoreVert/>
                     </IconButton>
                     <Menu
                        id="long-menu" MenuListProps={{'aria-labelledby': 'long-button',}}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                        open={open}
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                        >
                            <MenuItem key="Logout" anchorEl={anchorEl} open={open} onClose={handleClose} >Logout</MenuItem>
                        </Menu>
                </Stack>
               
                <List sx={{minWidth:"200px"}}>
                {['Apartment', 'Living Room', 'Bedroom', 'Bathroom','Toilet','Patio'].map((text, index) => (
             <ListItem button key={text} >
                 <ListItemIcon>{index ==0 ? <HomeOutlined /> : <BedOutlined />} </ListItemIcon>
                  <ListItemText primary={text}/>
                 {index ==0 ? <Badge overlap="rectangular" badgeContent={6} color="primary" sx={{marginRight:"3%"}}></Badge>:""}
                 {index ==3 ? <Badge overlap="rectangular" badgeContent={"!"} color="secondary" sx={{marginRight:"3%"}}></Badge>:""}
                 </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}