import './styles.scss';
import { channels } from '../../Data/channels';
import { useParams } from 'react-router-dom';

const Channel = () => {
	const params = useParams();

	const channel = channels.find((chnl) => chnl.id === params.id);
	if (!channel) console.log('ERROR! No channel.');

	return (
		<div className="chnl-bg">
			<div className="chnl-container">
				<div className="chnl-server">World</div>
				<div className="chnl-title"># {channel.title}</div>
				<div className="chnl-members">Members</div>
			</div>
		</div>
	);
};

export default Channel;
