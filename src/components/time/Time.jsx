import styles from "./Time.module.scss";
import classNames from "classnames";
import Typography from "@mui/material/Typography";
import {useEffect,useState} from 'react';



export default function Time(){
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    useEffect(() => {
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