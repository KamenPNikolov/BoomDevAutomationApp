import styles from "./Login.module.scss";
import classNames from "classnames";
import * as React from 'react';
import TextField from "@mui/material/TextField"
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { InputAdornment } from "@mui/material";


export default function Login(){

    return (
        <div className={classNames(styles["login-form"])}>
        <TextField className={classNames(styles["text-field"])} InputProps={{startAdornment: <InputAdornment position="start"><EmailIcon></EmailIcon></InputAdornment>}}> </TextField>
        <TextField className={classNames(styles["text-field"])} InputProps={{startAdornment: <InputAdornment position="start"><LockIcon></LockIcon></InputAdornment> }}> </TextField>
        <Button className={classNames(styles["button"])} variant="contained" >LOGIN</Button>
        </div>
    );
}