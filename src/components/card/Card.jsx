import styles from "./Card.module.scss";
import classNames from "classnames";
import * as React from 'react';
import * as myModule from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent"


export default function Card({iconUrl="",outlined=false, onClick}){

    return (        
    <myModule.Card  className={classNames(styles["card"])} variant = {outlined?"outlined":""} sx={{ width: 250,height: 200}}>
        <CardContent  className={classNames(styles["content"])} >
            {iconUrl && <img height={150} width = {150} src={iconUrl} style={{marginLeft:"15%"}}></img>}
        </CardContent>
        </myModule.Card>
    
    );

}