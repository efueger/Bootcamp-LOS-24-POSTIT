import React from 'react';
import Logo from '../../images/postit-logo.png'

class MainHeader extends React.Component {
    render() {
      return (
        <header>
			<nav className="amber">
				<div className="container nav-wrapper">
					<a href="#/" className="postit-logo">
						<img src={Logo} alt="postit-logo"/></a>
					<a aria-label="mobile-menu" className="nav-mobile">
						<span></span>
						<span></span>
						<span></span>
					</a>
					<ul className="nav-list right hide-on-med-and-down">
					  <li className="nav-item"><a href="#about">About</a></li>
					  <li className="nav-item"><a href="#login">Login</a></li>
					  <li className="nav-item"><a href="#register">Register</a></li>
					  <li className="nav-item"><a href="#login"><button className="btn btn-create">Create a new group</button></a></li>
					</ul>
				</div>
				<div className="mobile-nav">
					<div className="container" id="mobile-nav"></div>					
				</div>
			</nav>
		</header>
      );
    }
}

export default MainHeader;
