import './styles.scss';
import { useForm } from 'react-hook-form';

import DateDropDown from '../DateDP/index';
import GoogleIcon from '../../assets/icons/GoogleIcon.svg';
import GithubIcon from '../../assets/icons/GithubIcon.svg';

const CreateAccountForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	console.log(watch('example'));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="signUp-flex-container">
				<label className="signUp-label">
					EMAIL <span className="star-color">*</span>
				</label>
				<input className="signUp-input" {...register('example')} />
				<label className="signUp-label">
					USERNAME <span className="star-color">*</span>
				</label>
				<input className="signUp-input" {...register('exampleRequired')} />
				<label className="signUp-label">
					PASSWORD <span className="star-color">*</span>
				</label>
				<input
					className="signUp-input"
					{...register('exampleRequired', { required: true })}
				/>
				{errors.exampleRequired && (
					<span className="signUp-span">This field is required *</span>
				)}
				{/* <label className="signUp-label">DATE OF BIRTH</label> */}
				{/* <input className="signUp-input" {...register('exampleRequired')} /> */}
				{/* <input type="month" /> */}
				<DateDropDown />
				{/* <input type="submit" /> */}
				<button className="signUp-submit-btn" type="submit">
					Sign-Up
				</button>
				<button className="signUpGoogle-submit-btn" type="submit">
					Sign-Up with Google{' '}
					<span>
						<img src={GoogleIcon} alt="Google" />
					</span>
				</button>
				<button className="signUpGithub-submit-btn" type="submit">
					Sign-Up with Github{' '}
					<span>
						<img src={GithubIcon} alt="" />
					</span>
				</button>
			</div>
		</form>
	);
};

export default CreateAccountForm;
