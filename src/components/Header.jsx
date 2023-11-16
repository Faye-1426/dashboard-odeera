import { useLocation } from 'react-router-dom';
import gradient from '../assets/img/gradient.png';

const Header = ({ children, title, subtitle, className, heading }) => {
	const location = useLocation();

	return (
		<header className={`${className} border-b pb-10`}>
			<div className='upper'>
				<div className='paths text-slate-400'>{`${heading}`}</div>
				<h2 className='text-4xl font-bold mt-5'>{title}</h2>
				<p className='text-neutral-600 pt-2'>{subtitle}</p>
			</div>
			{children}
		</header>
	);
};

export default Header;
