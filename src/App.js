import './App.css';
import Contact from './components/Contact';
import { Greeting } from './components/Greeting';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <Greeting name="Guest" />
      <Contact />
      <Button />
    </div>
  );
}

export default App;
