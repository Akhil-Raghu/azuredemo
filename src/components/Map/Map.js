import '../Map/Map.scss';

const Map = ({
	streets,
	institutions,
	realestate,
	creatives,
	communitycenter,
	crypto,
	onClick,
}) => {
	return (
		<div className="map__container">
			<img className="map__streets" src={streets} alt="streets"></img>
			<img className="map__institutions" src={institutions} alt="institutions"></img>
			<img className="map__realestate" src={realestate} alt="realState"></img>
			<img className="map__creatives" src={creatives} alt="creatives"></img>
			<img className="map__communitycenter" src={communitycenter} alt="community"></img>
			<img className="map__crypto" src={crypto} alt="crypto"></img>
		</div>
	);
};

export default Map;
