import React, { useState } from 'react';
import './App.css';

function Home() {
    const [click, setClick] = useState(false); 

    const handleClick = () => setClick(true);


    return (
        <div>
            <button onClick={handleClick}>
                Bold
            </button>
            <div className={click== true ?"bold" :""}>
                Nikos
            </div>
        </div>
    )
}

export default Home
