import './App.css';
import Home from './components/Home';
import Features from './components/Features';
import ScreenShots from './components/ScreenShots';
import MobApp from './components/MobApp';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <ScreenShots />
      <Pricing />
      <MobApp />
      <Contact />

    </div>
  );
}

export default App;
