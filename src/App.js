import './App.css';
import Contact from './components/Contact';
import { Greeting } from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Guest" />
      <Contact />
    </div>
  );
}

export default App;
