import { Stack } from "@mui/material";
import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Login from "../src/components/login/Login";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";

export default function Index() {
  const right = (<Stack direction ="row" justifyContent="center"><Weather type="sunny" degrees={22}></Weather><Time></Time></Stack>);
  const left = (<User name="John Doe" size={50} avatar = "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"></User>);
  return (
    <div>
      <Header left={left} right = {right}></Header>
    <Time></Time>
    <Weather type="sunny" degrees={22}></Weather>
    <User name="John Doe" size="15px" avatar = "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"></User>
    </div>
    );
}
