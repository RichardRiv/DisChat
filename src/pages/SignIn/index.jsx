import './styles.scss';
import SignInForm from '../../components/SignInForm';

const SignIn = () => {
	return (
		<div className="signIn-bg">
			<div className="signIn-container">
				<p className="signIn-header">Welcome Back!</p>
				<p className="signIn-sub-header">We are so excited to see you again!</p>
				<SignInForm />
			</div>
		</div>
	);
};

export default SignIn;
