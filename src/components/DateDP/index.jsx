import './styles.scss';
import { useState, useRef, useEffect } from 'react';

import MonthDropDown from '../Date/MonthDP';
import DayDropDown from '../Date/DayDP';
import YearDropDown from '../Date/YearDP';
import { ReactComponent as DropDownIcon } from '../../assets/icons/DropDownIcon.svg';

const DateDropDown = () => {
	const [monthShow, setMonthShow] = useState(false);
	const [dayShow, setDayShow] = useState(false);
	const [yearShow, setYearShow] = useState(false);

	const [month, setMonth] = useState('Month');
	const [day, setDay] = useState('Day');
	const [year, setYear] = useState('Year');

	const chooseMonth = (e) => {
		setMonth(e.target.textContent);
	};
	const chooseDay = (e) => {
		setDay(e.target.textContent);
	};
	const chooseYear = (e) => {
		setYear(e.target.textContent);
	};

	const monthRef = useRef();
	const dayRef = useRef();
	const yearRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			//if !null and month/day/year click was not clicked(target), dont show dp
			if (monthRef.current && !monthRef.current.contains(e.target))
				setMonthShow(false);
			if (dayRef.current && !dayRef.current.contains(e.target))
				setDayShow(false);
			if (yearRef.current && !yearRef.current.contains(e.target))
				setYearShow(false);
		};

		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	}, []);

	return (
		<div className="date-dp">
			<label className="dob-label">
				DATE OF BIRTH <span className="star-color">*</span>
			</label>
			{monthShow ? <MonthDropDown chooseMonth={chooseMonth} /> : null}
			{dayShow ? <DayDropDown chooseDay={chooseDay} /> : null}
			{yearShow ? <YearDropDown chooseYear={chooseYear} /> : null}
			<div className="date-container">
				<div
					className="month-click"
					onClick={() => setMonthShow(!monthShow)}
					ref={monthRef}
				>
					<div className="date-text-icon">
						<div className="month-date">{month}</div>
						<DropDownIcon className="dropdown-icon" />
					</div>
				</div>
				<div
					className="day-click"
					onClick={() => setDayShow(!dayShow)}
					ref={dayRef}
				>
					<div className="date-text-icon dy-text-icon">
						<div className="day-date">{day}</div>
						<DropDownIcon className="dropdown-icon" />
					</div>
				</div>
				<div
					className="year-click"
					onClick={() => setYearShow(!yearShow)}
					ref={yearRef}
				>
					<div className="date-text-icon dy-text-icon">
						<div className="year-date">{year}</div>
						<DropDownIcon className="dropdown-icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DateDropDown;
