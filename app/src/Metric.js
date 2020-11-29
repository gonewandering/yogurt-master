import './styles/Metric.scss'

function App(props) {
  return (
    <div className="Metric">
      <div className="number">{ props.number }</div>
      <div className="label">{ props.label }</div>
    </div>
  );
}

export default App
