import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    const [blocks, setBlocks] = useState([]); 
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const updatePosts = (c)  => { 
        var arr = [...blocks]; 
        arr.unshift(c); 
        setBlocks(arr); 
        console.log(blocks);
    }
    /* Use the map() function to render multiple Blocks! */
    // const posts = blocks.map( (eachColor) => 
    //     <Block colour={eachColor}></Block> 
    // ); // TODO: edit this variable
    const posts = blocks.map( (eachColor) => 
        <Block colour={eachColor}/>
    ); 


    return (
        <div>
            <Menu update={updatePosts}></Menu>

            {/*Below is where all of your Blocks should render!*/}
            
            <div>{posts}</div>
        </div>
    );
}

export default Feed;