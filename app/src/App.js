import './styles/App.scss'
import Metric from './Metric'

function App() {
  let num = 42
  let lbl = 'Dog Pat'

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div class="col">
            <h1>Yogurt Master 3000</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <Metric number={ num } label="Temperature" />
          </div>
          <div className="col">
            <Metric number={ num } label="Humidity" />
          </div>
          <div className="col">
            <Metric number={ num } label="Fan Speed" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <Metric number={ num } label="Temperature" />
          </div>
          <div className="col">
            <Metric number={ num } label="Humidity" />
          </div>
          <div className="col">
            <Metric number={ num } label="Fan Speed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
