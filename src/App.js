import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div style={{ border: '3px solid black', margin: '10px' }} className="App">
      <Device name="laptop" price="43000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
