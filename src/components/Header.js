import React from 'react'

function Header(props) {
    const handleNav = () => {
        props.handleApp();
    }
    return (
        <div className="head">
            <p>GITHUB DASHBOARD</p>
            <i className="fa fa-bars fa-2x" onClick={handleNav} />
        </div>
    )
}

export default Header

