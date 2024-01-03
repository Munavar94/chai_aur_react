// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'some text'
// };


const anotherElement = (
  <a href='https://google.com' target='_blank' rel="noreferrer">
    visit Google
  </a>
)
console.log(anotherElement);  // finally it convert to object

// $$typeof :  Symbol(react.element)
// key :  null
// props :  {href: 'https://google.com', target: '_blank', rel: 'noreferrer', children: 'visit Google'}
// ref :  null
// type : "a"
// _source :  {fileName: 'E:/01 React/chai_aur_react/01vitereact/src/main.jsx', lineNumber: 17, columnNumber: 1}
// [[Prototype]] :  Object

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />

    anotherElement
  
)
