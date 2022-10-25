import React from 'react';
import Color from './Color'; 

/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
        <div>
          <Color handleClick = {props.update} color = "red" /> 
        </div>
        <div>
          <Color handleClick = {props.update} color = "pink"/> 
        </div>
        <div>
          <Color handleClick = {props.update} color = "blue"/> 
        </div>
        <div>
          <Color handleClick = {props.update} color= "green"/> 
        </div>  
      </div>
    ); 
}; 

export default Menu;