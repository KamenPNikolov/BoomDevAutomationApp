import Container from "@mui/material/Container";
import styles from "./Weather.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import * as React from 'react';
import Stack from "@mui/material/Stack";


export default function Weather({type,degrees=0}){
    let imageSrc="";
    switch(type){
        case "sunny": imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Weather-clear.svg/2048px-Weather-clear.svg.png";
        case "cloudy": imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/2048px-Weather-few-clouds.svg.png";
        case "rainy": imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Weather-sun-clouds-some-rain.svg/480px-Weather-sun-clouds-some-rain.svg.png";
       }
    return (
    <div className={classNames(styles["weather-wrapper"])}>
    <Stack direction="row" spacing={2}>
        <img src={imageSrc} width="70px" height="70px"></img>
        <div>
            <Typography color="primary" variant="caption">Weather</Typography>
            <Typography variant="h2">{degrees}°</Typography>
        </div>
    </Stack>
    </div>
    );

}