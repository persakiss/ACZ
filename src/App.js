import './App.css';
import Contact from './components/Contact';
import { Greeting } from './components/Greeting';
import { Button } from './components/Button';
import { Talker } from './components/Talker';

function App() {
  return (
    <div className="App">
      <Greeting name="Guest" />
      <Contact />
      <Button />
      <Talker />
    </div>
  );
}

export default App;
