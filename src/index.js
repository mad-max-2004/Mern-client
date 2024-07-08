import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,
 Routes,
 Link,
 Route} from 'react-router-dom';

const root =document.getElementById('root')

const VirtualRoot = ReactDOM.createRoot(root);
//virtual Root( V DOM)
VirtualRoot.render(

 <div>
    <h1>client</h1>
   

 </div>

)