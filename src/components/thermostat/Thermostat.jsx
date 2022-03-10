import styles from "./Thermostat.module.scss";
import classNames from "classnames";
import * as React from 'react';
import TextField from "@mui/material/TextField"
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Header from "../header/Header";
import CircularProgress from "@mui/material/CircularProgress"
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { IconButton, Stack, Typography } from "@mui/material";
import { LineChart, Line } from 'recharts';

export default function Thermostat({data=[]}){
    const [currentTemp,setCurrentTemp] = React.useState(15);



     return (
            <div className={classNames(styles["wrapper"])}>
                
                <div style={{marginLeft:"25%"}} >
                <CircularProgress variant="determinate" size = {300} thickness = {3} style={{ position:"absolute",color: "grey",transform:'rotate(180deg)'}} value={50}></CircularProgress>
                <CircularProgress variant="determinate" size = {300} thickness = {3} style={{position:"absolute",color: "white",transform:'rotate(180deg)'}} value={(currentTemp-15)*50/35}></CircularProgress>
                <div style={{color: "white",position:"absolute", marginTop: "75px",marginLeft:"75px"}}>
                <Stack direction="row" justifyContent="center"  alignItems = "center">
                <IconButton color="inherit" onClick={()=> setCurrentTemp(currentTemp==15?currentTemp:currentTemp-1)}>
                <RemoveCircleOutlinedIcon  fontSize="large" ></RemoveCircleOutlinedIcon>
                </IconButton>
                <Typography variant="h2">{currentTemp}°</Typography>
                <IconButton color="inherit" onClick={()=> setCurrentTemp(currentTemp==50?currentTemp:currentTemp+1)}>
                <AddCircleOutlinedIcon fontSize="large"  ></AddCircleOutlinedIcon>
                </IconButton>
                </Stack>
                </div>
                </div>
                <Typography variant="h6"  style={{color: "white",position:"absolute", marginTop: "150px",marginLeft:"5px"}}>Temperature Graph</Typography>
                <LineChart width={595} height={190} data={data}  style={{position:"absolute", marginTop: "160px",marginLeft:"5px"}} >
                <Line stroke ="#ffffff" type="monotone" dataKey="temperature"  />
                </LineChart>

            </div>
     );
}