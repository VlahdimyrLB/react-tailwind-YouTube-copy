import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Grid from "./Grid";

const App = () => {
  return (
    <div className="relative">
      <Navbar />;
      <div className="md:ml-20">
        <Grid />;
      </div>
      <Sidebar />;
    </div>
  );
};
export default App;
