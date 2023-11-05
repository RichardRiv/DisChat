import CreateAccountForm from '../../components/CreateAccountForm';
import { Link } from 'react-router-dom';
import './styles.scss';

const CreateAccount = () => {
	return (
		<div className="signUp-bg">
			<div className="signUp-container">
				<p className="signUp-header">Create an account</p>
				<Link to={'/'} className="signUp-sub-header">
					Already have an account?
				</Link>
				<CreateAccountForm />
			</div>
		</div>
	);
};

export default CreateAccount;
