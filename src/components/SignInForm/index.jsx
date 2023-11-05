import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './styles.scss';

const SignInForm = () => {
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
			<div className="signInForm-flex-container">
				<label className="signInForm-label">
					EMAIL OR PHONE NUMBER <span className="star-color">*</span>
				</label>
				<input className="signInForm-input" {...register('example')} />
				<label className="signInForm-label">
					PASSWORD <span className="star-color">*</span>
				</label>
				<input
					className="signInForm-input"
					{...register('exampleRequired', { required: true })}
				/>
				{errors.exampleRequired && (
					<span className="signInForm-span">This field is required *</span>
				)}
				{/* <input type="submit" /> */}
				<button className="signInForm-submit-btn" type="submit">
					Log In
				</button>
				<Link to="/reset-password" className="signInForm-forgot-pswd">
					Forgot your password?
				</Link>
				<div className="signInForm-reg-div">
					Need an account?{' '}
					<Link to="/register" className="signInForm-reg-acc">
						Register
					</Link>
				</div>
			</div>
		</form>
	);
};

export default SignInForm;
