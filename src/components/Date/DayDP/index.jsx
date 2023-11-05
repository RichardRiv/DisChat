import '../styles.scss';
import { days } from '../../../Data';

const DayDropDown = ({ chooseDay }) => {
	return (
		<div className="scrollbar">
			<div className="dp-days-container">
				<div>
					{days.map((day, idx) => (
						<div className="dp-days" key={idx} onClick={chooseDay}>
							{day}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DayDropDown;
