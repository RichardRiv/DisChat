import './styles.scss';
import SignInForm from '../../components/SignInForm';

const SignIn = () => {
	return (
		<div className="bg">
			<div className="container">
				<p className="header">Welcome Back!</p>
				<p className="sub-header">We are so excited to see you again!</p>
				<SignInForm />
			</div>
		</div>
	);
};

export default SignIn;
