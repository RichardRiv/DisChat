import CreateAccountForm from '../../components/CreateAccountForm';
import { Link } from 'react-router-dom';
import './styles.scss';

const CreateAccount = () => {
	return (
		<div className="signUp-bg">
			<div className="signUp-container">
				<p className="signUp-header">Create an account</p>
				<p className="signUp-sub-header">
					<Link to={'/'} className="signUp-sub-header-link">
						Already have an account?
					</Link>
				</p>
				<CreateAccountForm />
			</div>
		</div>
	);
};

export default CreateAccount;
