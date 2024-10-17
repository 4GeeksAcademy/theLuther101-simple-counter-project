// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom/client";


// // include your styles into the webpack bundle
// import "../styles/index.css";
// import reactDom from "react-dom";

// function SimpleCounter(props){
//     return (<div className="bigcounter">
//         <div className="calender">
//             <i className="far fa-clock"></i>
//             </div>
//         <div className="three">0</div>
//         <div className="two">0</div>
//         <div className="one">0</div>
//     </div>)

// }
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import './icons.js';
//include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home";
//import your own components
let seconds=0;
setInterval(()=>{
    seconds++;
    ReactDOM.render(<Home seconds={seconds} />, document.querySelector("#app"));
})
//render your react application

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter/>);
// ReactDOM.render(
//     <simpleCounter />,
//     document.querySelector('#app')
// );
