import styles from "./Time.module.scss";
import classNames from "classnames";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Stack from "@mui/material/Stack";


export default function Time(){
    const [hours,setHours] = React.useState(0);
    const [minutes,setMinutes] = React.useState(0);
    React.useEffect(() => {
       const interval = setInterval(()=>{
            const now = new Date();
            setHours(now.getHours());
            setMinutes(now.getMinutes());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
    <div className={classNames(styles["time-wrapper"])}>
            <Typography sx={{marginLeft: "40px"}} color="primary" variant="caption" textAlign="center">Time</Typography>
            <Typography variant="h2">{String(hours).padStart(2,"0")+":"+String(minutes).padStart(2,"0")}</Typography>
    </div>
    );

}