import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" 
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4
              py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor('red')} // one method - best way

              // onClick={setColor}  // onClick expect a func but here we are passing reference
              // drowback we cant pass parameter for that
              // onClick={setColor('red')}  // this is wrong way
            >
              RED
            </button>
            <button className="outline-none px-4
              py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor('green')}
            >
              GREEN
            </button>
            <button className="outline-none px-4
              py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor('blue')}
            >
              BLUE
            </button>
            <button className="outline-none px-4
              py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor('yellow')}
            >
              YELLOW
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
