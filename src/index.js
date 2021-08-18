import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// let city = {
// name: "Mumbai",
// country: "india"
// };
function Hello() {
  //  return <h1>welcome tO React </h1>
   return ( 
   <div>
        <h1>welcome to react</h1>
        <h1>let's build something cool</h1>
    </div>);
}

ReactDOM.render(
//React.createElement("h1", {style: { color:"red" } } , "Hello Sarvottam"),
//<h1 class="heading">Sarvottam is living in {city.name} {city.country}</h1>,
/* <ul>
    <li>Rishi Prakash</li>
    <li>Nirupa Sinha</li>
    <li>Ved Praksh </li>
    <li>Ravindra Prasad</li>
    <li>Anita Devi</li>
</ul>, */
<Hello></Hello>,
    document.getElementById('root')
);

