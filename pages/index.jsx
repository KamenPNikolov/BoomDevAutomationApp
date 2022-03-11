import { Stack } from "@mui/material";
import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Login from "../src/components/login/Login";
import Navigation from "../src/components/navigation/Navigation";
import Thermostat from "../src/components/thermostat/Thermostat";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Card from "../src/components/card/Card";
import Scenes from "../src/components/scenes/Scenes";

export default function Index() {
  const thermoData = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ];
  const cardsData = [
    {iconUrl:"images/alarm-clock.svg", outlined:true},
    {iconUrl:"images/alarm-clock.svg", outlined:false},
    {iconUrl:"images/alarm-clock.svg", outlined:false},
    {iconUrl:"images/alarm-clock.svg", outlined:false},
    {iconUrl:"images/alarm-clock.svg", outlined:false},
    {iconUrl:"images/alarm-clock.svg", outlined:false},
  ];
  const right = (<Stack direction ="row" justifyContent="center"><Weather type="sunny" degrees={22}></Weather><Time></Time></Stack>);
  const left = (<User name="John Doe" size={50} avatar = "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"></User>);
  return (
    <div>
      <Header left={left} right = {right}></Header>
    <Navigation></Navigation>
    <Thermostat data={thermoData}></Thermostat>
    {/*<Card iconUrl="images\alarm-clock.svg" outlined={true}></Card*/}
    <Scenes cards={cardsData}></Scenes>
    <Time></Time>
    <Weather type="sunny" degrees={22}></Weather>
    <User name="John Doe" size="15px" avatar = "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"></User>
    </div>
    );
}
