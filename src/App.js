import "./App.css";

function App() {
  let number = 0;
  const numberText = document.getElementById("number");

  const handleClick = () => {
    number++;
    console.log(number);
    numberText.innerHTML = number.toString;
  };

  return (
    <div>
      <h2 id="number">{number}</h2>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
