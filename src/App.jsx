import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import MainSection from "./components/MainSection/MainSection";
import Collections from "./components/Collections/Collections";

function App() {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Navbar />
        <MainSection />
      </div>
      <div className={classes.tableSmall}>
        <Collections />
      </div>
    </>
  );
}

export default App;
