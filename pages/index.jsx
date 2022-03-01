import Example from "../src/components/example/Example";
import Login from "../src/components/login/Login";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";

export default function Index() {
  return (
    <div>
    <Weather type="sunny" degrees={22}></Weather>
    <User name="John Doe" size="15px" avatar = "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"></User>
    </div>
    );
}
