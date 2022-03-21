import './App.css';
import Device from './components/Device/Device';
import Tablet from './components/Tablet/Tablet';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div style={{ border: '3px solid black', margin: '10px' }} className="App">
      <Device name="laptop" price="43000"></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  );
}

export default App;
