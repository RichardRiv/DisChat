import { useForm } from 'react-hook-form';
import './styles.scss';

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
			<div className="flex-container">
				<label>EMAIL OR PHONE NUMBER</label>
				<input {...register('example')} />
				<label>PASSWORD</label>
				<input {...register('exampleRequired', { required: true })} />
				{errors.exampleRequired && <span>This field is required *</span>}
				{/* <input type="submit" /> */}
				<button className="submit-btn" type="submit">
					Continue
				</button>
			</div>
		</form>
	);
};

export default CreateAccountForm;
