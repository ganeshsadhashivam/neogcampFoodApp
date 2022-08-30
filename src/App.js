import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { hover } from '@testing-library/user-event/dist/hover';



function App() {

 const Foods = {
    indian:[
      {name:"idly",price:40},
      {name:"Dosa",price:50},
      {name:"Chapathi",price:50}
    ],
    chinese:[
    
      {name:"Veggie chow mein",price:100},
      {name:"Tofu chow mein",price:80},
      {name:"Steamed rice",price:80},
      {name:"Vegetable fried rice",price:100}
    ],
    Italy:[
    
      {name:"Panzanella",price:120},
      {name:"Mushroom Risotto",price:100},
      {name:"Four Cheese Pasta",price:100}
    ]

 }

 const [listFood,setlistFood] = useState("indian");

//Event handlers
 function selectCusineHandler(cusine){

      //count = count+1;
      //var listFoodItemKeys = Object.keys(Foods);
      console.log(cusine);
      setlistFood(cusine);
      
 }
    //value in view you can use it in jsx
 //console.log("clicked",listFood);


  return (
    
    <div className="App">
    <h1>🥘Food</h1>
    <p style={{ fontSize: "smaller" }}>
    Available Foods. select which Cusine
    </p>
    <div>
    {Object.keys(Foods).map((cusine)=>
      (
      <button 
        onClick={()=>selectCusineHandler(cusine)}
        style={{
          margin:"0.5rem",border:"1px solid black",
          padding:"0.5rem 2rem",borderRadius:"0.5rem",
          cursor:"pointer"
        }}
      >
      {cusine}
      </button>
      ))}
    </div>
    <hr/>
    <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {Foods[listFood].map((cusine) =>(

            <li keys={cusine.name}
              style={{
                listStyle:"none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
             >
              {" "}
             <div style={{ fontSize: "larger" }}> {cusine.name} </div>
             <div style={{ fontSize: "smaller" }}>Price {cusine.price}</div>
            </li>

          )
          
         
          )}
        </ul>

      </div>
      
      
    </div>
  );
}

export default App;
//view interact state in event handler and  Render VISER