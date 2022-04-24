import { Link } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import useClickOutside from '../../hooks/useClickOutside';
import './Biography.scss';

const Biography = ({ onClick, teamBio, setBiography }) => {
	const domNode = useClickOutside(() => setBiography(false));

	const {
		id,
		name,
		position,
		image,
		linkedIn,
		personalWeb,
		description,
		quote,
	} = teamBio;
	return (
		<div className="biography">
			<div className="biography__card" key={id} ref={domNode}>
				<div className='biography__close--container'>
				<GrFormClose className="biography__close" onClick={onClick} />
				</div>
				<div className='biography__container'>
				<img className="biography__image" src={image} alt={name} />
				<div className="biography__info">
					<h1 className="biography__name">{name}</h1>
					<h3 className="biography__position">{position}</h3>
					<p className="biography__paragraph">{description}</p>
					<p className="biography__paragraph">{quote}</p>
					<div className="biography__links">
						<p className="biography__paragraph">{`You can discover more here:`}</p>
						<Link className="biography__link" to={linkedIn}>
							{linkedIn}
						</Link>
						{personalWeb && (
							<Link className="biography__link" to={personalWeb}>
								{personalWeb}
							</Link>
						)}
					</div>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Biography;
