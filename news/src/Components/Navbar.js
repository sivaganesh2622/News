import React from 'react'

const Navbar = ({ setcategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand" ><span className=' badge'>News</span></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav  ">
                        <li className="nav-item ">
                            <div className="nav-link" onClick={() => { setcategory("technology") }}>Technology </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => { setcategory("business") }}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => { setcategory("health") }}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => { setcategory("sports") }}>Sports</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar