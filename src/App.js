import './App.css';
import Contact from './components/Contact';
import { Greeting } from './components/Greeting';
import { Talker } from './components/Talker';

function App() {
  return (
    <div className="App">
      <Greeting name="Guest" />
      <Contact />
      <Talker />
    </div>
  );
}

export default App;
