import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function Application() {
    const [open,setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div className="application">
            <Header handleApp={handleClick} />
            <Main value={open} />
        </div>
    )
}

export default Application
