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
			<div className="flex-container">
				<label>EMAIL OR PHONE NUMBER</label>
				<input {...register('example')} />
				<label>PASSWORD</label>
				<input {...register('exampleRequired', { required: true })} />
				{errors.exampleRequired && <span>This field is required *</span>}
				{/* <input type="submit" /> */}
				<button className="submit-btn" type="submit">
					Log In
				</button>
				<Link to="/reset-password" className="forgot-pswd">
					Forgot your password?
				</Link>
				<div className="reg-div">
					Need an account?{' '}
					<Link to="/register" className="reg-acc">
						Register
					</Link>
				</div>
			</div>
		</form>
	);
};

export default SignInForm;
