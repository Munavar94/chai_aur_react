import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); // check | unCheck
  const [charAllowed, setCharAllowed] = useState(false);

  // input Field storing in state
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // Function
  const passwordGenerator = useCallback(() => {
    let pass = ""; // for password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log('char index', char);

      pass += str.charAt(char); //
      console.log('password', pass);
    }
    setPassword(pass); //
  }, [length, numberAllowed, charAllowed, setPassword]);  // here dependencies for optimization

  // for copy
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();  // for optimise selected text
    passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password);
  }, [password]); // also empty []

  // for rendering the code
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);  // any change happen re-render it

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed} // false
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); // f / t
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed} // false
              id="characterInput"
              onChange={() => {
                // setCharAllowed((prev) => !prev);
                setCharAllowed(!charAllowed);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
