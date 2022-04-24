import Map from '../../components/Map/Map';
import Title from '../../components/Title/Title';
import './Invest.scss';
import Streets from '../../images/streets.png';
import Institutions from '../../images/institutions.png';
import RealEstate from '../../images/realestate.png';
import Creatives from '../../images/creatives.png';
import CommunityCenter from '../../images/communitycenter.png';
import Crypto from '../../images/crypto.png';

const Invest = () => {
	return (
		<div className="invest">
			<Title
				title="The Future of Real Estate Investing"
				paragraph="Investing in Cointinuum means investing in your community and your future. Explore this interactive map to learn more."
			/>
			<Map
				streets={Streets}
				institutions={Institutions}
				realestate={RealEstate}
				creatives={Creatives}
				communitycenter={CommunityCenter}
				crypto={Crypto}
			/>
		</div>
	);
};

export default Invest;
