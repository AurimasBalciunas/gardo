import './App.css';
import ArrowKeys from './components/ArrowKeys/ArrowKeys'

function App() {
  const handleArrowClick = (direction) => {
    console.log(`Arrow clicked: ${direction}`);
  };

  return (
    <div>
      <ArrowKeys onArrowClick={handleArrowClick} />
    </div>
  )
}

export default App;
