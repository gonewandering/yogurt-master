import './App.css';
import Nav from './Nav.js'
import react from 'react';
import $ from 'jquery';

const stub = {
    "humidity": 42.400001525878906,
    "temperature": 100.93999862670898,
    "config": {
        "client": {
            "timeout": 5000
        },
        "temp": [
            100,
            105
        ],
        "sensor": {
            "model": 22,
            "pin": 4
        },
        "active": false
    }
}

class App extends react.Component {
  constructor() {
    super()

    this.state = stub

    this.toggleActive = this.toggleActive.bind(this)
    this.getInfo = this.getInfo.bind(this)

    window.setInterval(this.getInfo, 3000)
  }

  async componentDidMount() {
    this.getInfo()
  }

  async getInfo() {
    let data = await $.get('/api')

    if (typeof data === 'object') {
      this.setState(data)
    }
  }

  async toggleActive() {
    let active = !this.state.config.active

    let data = await $.ajax({
      type: "POST",
      url: `/api`,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ active }),
      dataType: 'json'
    })

    this.state.config.active = active
    await this.setState(this.state)
  }

  render() {
    return (
      <div className="App">
        <Nav active={ this.state.config.active } toggle={ this.toggleActive } />
        <div className="row" style={ {marginTop: 60 }}>
          <div className="col-6">
            <h1>{ Math.round(this.state.temperature * 100) / 100 }°</h1>
            <h3>Temperature ({ this.state.config.temp[0] }°-{ this.state.config.temp[1] }°)</h3>
          </div>
          <div className="col-6">
            <h1>{ Math.round(this.state.humidity * 100) / 100 }%</h1>
            <h3>Humidity</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
