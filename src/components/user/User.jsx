import Container from "@mui/material/Container";
import styles from "./User.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import * as React from 'react';

export default function User({avatar,name,size}){

    return (
    <div className={classNames(styles["user-container"])}>
    <Container maxWidth="xs" > 
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={2}>
                <Avatar src={avatar} sx={{width: size,height: size}}></Avatar>
            </Grid>
            <Grid item xs={4}> 
            <Typography variant="h3">{name}</Typography>
            </Grid>
        </Grid>
    </Container>
    </div>
    );

}