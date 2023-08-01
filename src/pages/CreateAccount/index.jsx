import CreateAccountForm from '../../components/CreateAccountForm';
import './styles.scss';

const CreateAccount = () => {
	return (
		<div className="bg">
			<div className="container">
				<p className="header">Create an account</p>
				<CreateAccountForm />
			</div>
		</div>
	);
};

export default CreateAccount;
