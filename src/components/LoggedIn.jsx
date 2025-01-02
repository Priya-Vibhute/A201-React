import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoggedIn() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <Link to={"/counter"}>counter</Link>
           {loggedIn?
           <>
           <h1>Welcome user</h1>
           <button onClick={()=>{setLoggedIn((prev)=>!prev)}}>Log out</button>
           
           </>
           :
           <button onClick={()=>{setLoggedIn((prev)=>!prev)}}>Log in</button>}
           <hr />

               <div>{false && <div>Ohh condition is true</div>}</div>  

           <hr />
        </div>
    );
}

export default LoggedIn;
