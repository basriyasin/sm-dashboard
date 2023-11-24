import React, { useState } from 'react';
import './index.css'

const PageHeaderNotification = (props) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }

    const popup =
        <div className="dropdown-menu notification-menu">
            <div className="notification-title">
                <span className="float-end badge badge-default">230</span>
                Messages
            </div>
            <div className="content">
                <ul>
                    <li>
                        <div className="clearfix">
                            <figure className="image">
                                <img src="https://e7.pngegg.com/pngimages/538/401/png-clipart-naruto-kurama-sage-mode-naruto-uzumaki-naruto-shipp%C5%ABden-sasuke-uchiha-naruto-shippuden-ultimate-ninja-storm-generations-itachi-uchiha-naruto-computer-wallpaper-cartoon-thumbnail.png" 
                                alt="Joseph Doe Junior" className="rounded-circle notification-img" />
                            </figure>
                            <span className="title">Joseph Doe</span>
                            <span className="message">Lorem ipsum dolor sit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="clearfix">
                            <figure className="image">
                                <img src="https://e7.pngegg.com/pngimages/538/401/png-clipart-naruto-kurama-sage-mode-naruto-uzumaki-naruto-shipp%C5%ABden-sasuke-uchiha-naruto-shippuden-ultimate-ninja-storm-generations-itachi-uchiha-naruto-computer-wallpaper-cartoon-thumbnail.png" 
                                alt="Joseph Junior" className="rounded-circle notification-img" />
                            </figure>
                            <span className="title">Joseph Junior</span>
                            <span className="message truncate">Truncated message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam, nec venenatis risus. Vestibulum blandit faucibus est et malesuada. Sed interdum cursus dui nec venenatis. Pellentesque non nisi lobortis, rutrum eros ut, convallis nisi. Sed tellus turpis, dignissim sit amet tristique quis, pretium id est. Sed aliquam diam diam, sit amet faucibus tellus ultricies eu. Aliquam lacinia nibh a metus bibendum, eu commodo eros commodo. Sed commodo molestie elit, a molestie lacus porttitor id. Donec facilisis varius sapien, ac fringilla velit porttitor et. Nam tincidunt gravida dui, sed pharetra odio pharetra nec. Duis consectetur venenatis pharetra. Vestibulum egestas nisi quis elementum elementum.</span>
                        </div>
                    </li>
                    <li>
                        <div className="clearfix">
                            <figure className="image">
                                <img src="https://e7.pngegg.com/pngimages/538/401/png-clipart-naruto-kurama-sage-mode-naruto-uzumaki-naruto-shipp%C5%ABden-sasuke-uchiha-naruto-shippuden-ultimate-ninja-storm-generations-itachi-uchiha-naruto-computer-wallpaper-cartoon-thumbnail.png" 
                                alt="Joe Junior" className="rounded-circle notification-img" />
                            </figure>
                            <span className="title">Joe Junior</span>
                            <span className="message">Lorem ipsum dolor sit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="clearfix">
                            <figure className="image">
                                <img src="https://e7.pngegg.com/pngimages/538/401/png-clipart-naruto-kurama-sage-mode-naruto-uzumaki-naruto-shipp%C5%ABden-sasuke-uchiha-naruto-shippuden-ultimate-ninja-storm-generations-itachi-uchiha-naruto-computer-wallpaper-cartoon-thumbnail.png" 
                                alt="Joseph Junior" className="rounded-circle notification-img" />
                            </figure>
                            <span className="title">Joseph Junior</span>
                            <span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam.</span>
                        </div>
                    </li>
                </ul>
                <hr />
                <div className="text-end">
                    <div className="view-more">View All</div>
                </div>
            </div>
        </div>


    return (
        <ul className="notifications">
            <li>
                <div className="dropdown-toggle notification-icon" data-bs-toggle="dropdown" onClick={toggleDropdown}>
                    <i className="bx bx-envelope"></i>
                    <span className="badge">4</span>
                </div>
                {!isDropdownOpen && popup}
            </li>
        </ul>
    )
}

export default PageHeaderNotification