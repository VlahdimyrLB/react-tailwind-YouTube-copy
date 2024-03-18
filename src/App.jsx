import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Grid from "./Grid";
import {
  YoutubeLogo,
  UserLogo,
  Hamburger,
  SearchIcon,
  VideoIcon,
  Bell,
  Mic,
} from "./data";

const App = () => {
  return (
    <div className="relative">
      <Navbar
        YoutubeLogo={YoutubeLogo}
        UserLogo={UserLogo}
        Hamburger={Hamburger}
        SearchIcon={SearchIcon}
        VideoIcon={VideoIcon}
        Bell={Bell}
        Mic={Mic}
      />
      ;
      <div className="md:ml-20">
        <Grid />;
      </div>
      <Sidebar />;
    </div>
  );
};
export default App;
