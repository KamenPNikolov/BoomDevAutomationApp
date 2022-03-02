import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import * as React from 'react';
import { Paper, Stack } from "@mui/material";

export default function Header({left,right}){

    return (
        <div className={classNames(styles["header-wrapper"])}>
           <Paper className={classNames(styles["paper"])}>
           <Stack direction="row" spacing={12} justifyContent="center" alignItems="center">
            <Container maxWidth="sm" className={classNames(styles["left"])} >
            {left}
            </Container>
            <Container maxWidth="sm" className={classNames(styles["right"])}>
            {right}
            </Container>
            </Stack>
            </Paper>
        </div>

    );
}