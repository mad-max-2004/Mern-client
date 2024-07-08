import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
//provider -> produces the data / props
export default function Example(){
    //provide 
    const [text,setText]=useState("");
    return(
    <div>
        <Mycontext.Provider value={{text,setText}}>
            <Mycomponent/>
            <Login/>
            {/*  You can add as many components u want 
            Provider will provide all the props to the 
            given components*/}
        </Mycontext.Provider>
    </div>
    )
}