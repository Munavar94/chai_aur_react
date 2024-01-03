function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;   // innerText

    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);  //
    */

    // 2nd way
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);   
                                // key, value
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',  // div, h1 tags...
    props: {
        href: 'https://google.com',
        target: "_blank"
    },
    children: 'Click Me to visit google'
}

const mainContainer = document.querySelector('#root');

// call function:
customRender(reactElement, mainContainer);  // wht and whr