import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Navbar />
        <MainSection />
      </div>
    </>
  );
}

export default App;
