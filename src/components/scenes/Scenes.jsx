import styles from "./Scenes.module.scss";
import classNames from "classnames";
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Card from "../card/Card";

export default function Scenes({cards=[],selected=0}){
    return (
        <div className={classNames(styles["scenes-container"])}>
            <Grid spacing={1} container direction="row" aligntItems = "space-between" justifyContent="center">
            {cards.map((card) => (
                <Grid item xs="4"> 
                <Card iconUrl={card.iconUrl} outlined={card.outlined} ></Card>
                </Grid>
                )
            )}
            </Grid>
        </div>

    );
}