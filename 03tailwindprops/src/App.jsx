import "./App.css";
import Card from "./components/Card";

function App() {

  // let someObj = {
  //   username: 'Munavar',
  //   age: 29
  // };

  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>

      {/* <Card username='chai aur code' storeInVariable={someObj} someArr={newArr} /> */}

      <Card username='chai aur react' btnText={'click me'} />

      <Card username={'Munavar'} />
    </>
  );
}

export default App;


// Note: Not Allowed - Array and Object 
{/* <Card channel='chai aur code' myArr=[1, 2, 3] /> */}
{/* <Card channel='chai aur code' myObj={name: 'chai'} /> */}