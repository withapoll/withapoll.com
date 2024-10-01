import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Profile from "./components/profile";
import Header from "./components/header";
import Career from "./components/career";
import Me from "./components/me";
import Media from "./components/media";
import Projects from "./components/projects";
import Bottom from "./components/bottom";
function App() {
  return (
    <>
      <Header />
      <Profile />
      <Career />
      <Me />
      <Media />
      <Projects />
      <Bottom />
    </>
  );
}

export default App;
