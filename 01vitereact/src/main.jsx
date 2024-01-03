import React from 'react'
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


// const anotherElement = (
//   <a href='https://google.com' target='_blank' rel="noreferrer">
//     visit Google
//   </a>
// )

const anotherUser = "add on's"
const reactElement = React.createElement(
  'a',                        // tag
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'click me to visit google ',  // some text
  anotherUser,
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />

    // anotherElement

    reactElement
  
)
