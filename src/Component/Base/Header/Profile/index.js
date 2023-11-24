import React, { useState } from 'react'
import './index.css'

function PageHeaderProfile(props) {
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }

    const hideDropdown = () => {
        setDropdownOpen(false)
    }

    const popup = <div className="dropdown-menu" onClick={toggleDropdown} onBlur={hideDropdown}>
        <ul className="list-unstyled mb-2">
            <li className="divider"></li>
            <li>
                <a role="menuitem" href="pages-user-profile.html"><i className="bx bx-user-circle"></i> My Profile</a>
            </li>
            <li>
                <a role="menuitem" href="#" data-lock-screen="true"><i className="bx bx-lock"></i> Lock Screen</a>
            </li>
            <li>
                <a role="menuitem" href="pages-signin.html"><i className="bx bx-power-off"></i> Logout</a>
            </li>
        </ul>
    </div>


    return (
        <div id="userbox" className="userbox">
            <div onClick={toggleDropdown}>
                <figure className="profile-picture">
                    <img src="https://e7.pngegg.com/pngimages/538/401/png-clipart-naruto-kurama-sage-mode-naruto-uzumaki-naruto-shipp%C5%ABden-sasuke-uchiha-naruto-shippuden-ultimate-ninja-storm-generations-itachi-uchiha-naruto-computer-wallpaper-cartoon-thumbnail.png"
                     alt="Joseph Doe" 
                     className="rounded-circle" />
                </figure>
                <div className="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
                    <span className="name">John Doe Junior</span>
                    <span className="role">Administrator</span>
                </div>
                <i className="fa custom-caret"></i>
            </div>
            {isDropdownOpen && popup}
        </div>
    )
}

export default PageHeaderProfile