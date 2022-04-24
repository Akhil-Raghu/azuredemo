import Cointinuum from '../../images/Logo-transparent.png';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import './Navbar.scss';

const Navbar = () => {
	const navigate = useNavigate();

	const [isMobile, setIsMobile] = useState(false);

	const onLogoClick = () => {
		navigate('/');
	};
	return (
		<nav className="navbar">
			<img
				className="navbar__image"
				src={Cointinuum}
				alt="cointinuum logo"
				onClick={onLogoClick}
			/>
			<ul
				className={isMobile ? 'navbar__list--mobile' : 'navbar__list'}
				onClick={() => setIsMobile(false)}
			>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'navbar__active' : 'navbar__link'
						}
						to="/solutions"
					>
						Solutions
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'navbar__active' : 'navbar__link'
						}
						to="/invest"
					>
						Invest
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'navbar__active' : 'navbar__link'
						}
						to="/about"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'navbar__active' : 'navbar__link'
						}
						to="connect"
					>
						Connect
					</NavLink>
				</li>
			</ul>
			<button
				className="navbar__mobile--icon"
				onClick={() => setIsMobile(!isMobile)}
			>
				{isMobile ? <GrFormClose /> : <HiMenu />}
			</button>
		</nav>
	);
};

export default Navbar;
