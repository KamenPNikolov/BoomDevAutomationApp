import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import * as React from 'react';
import { Stack } from "@mui/material";

export default function Header({left,right}){

    return (
        <div className={classNames(styles["header-wrapper"])}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Container maxWidth="sm">
            {left}
            </Container>
            <Container maxWidth="sm">
            {right}
            </Container>
            </Stack>
        </div>

    );
}