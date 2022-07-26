import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Food from "./components/Food";
import Menu from "./components/Menu";
import Category from "./components/Category";



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Food/>
        <Menu/>
        <Category/>
    </div>
  );
}

export default App;
