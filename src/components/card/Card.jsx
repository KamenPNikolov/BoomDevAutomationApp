import styles from "./Card.module.scss";
import classNames from "classnames";
import * as React from 'react';
import * as myModule from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent"



export default function Card({iconUrl="",outlined=false, onClick}){

    return (        
    <myModule.Card  className={classNames(styles["card"])} variant = {outlined?"outlined":""} sx={{ width: 150,height: 150}}>
        <CardContent  className={classNames(styles["content"])} >
            {iconUrl && <img height={120} width = {120} src={iconUrl} style={{marginLeft:"2%"}}></img>}
        </CardContent>
        </myModule.Card>
    
    );

}