import './styles.scss';
// import { months } from '../../../Data';
// import { days } from '../../../Data';
// import { years } from '../../../Data';
import { months, days, years } from '../../Data/dates';

export const MonthDropDown = ({ chooseMonth }) => {
	return (
		<div className="scrollbar">
			<div className="dp-months-container">
				<div>
					{months.map((month, idx) => (
						<div className="dp-months" key={idx} onClick={chooseMonth}>
							{month}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export const DayDropDown = ({ chooseDay }) => {
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

export const YearDropDown = ({ chooseYear }) => {
	return (
		<div className="scrollbar">
			<div className="dp-years-container">
				<div>
					{years.map((year, idx) => (
						<div className="dp-years" key={idx} onClick={chooseYear}>
							{year}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MonthDropDown;
