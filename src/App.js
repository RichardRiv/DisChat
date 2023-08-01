import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import './App.css';

const ProviderWrappedApp = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} />
			<Route path="register" element={<CreateAccount />} />
			<Route path="reset-password" element={<ResetPassword />} />
		</Routes>
	);

	// TODO: If theres a User, take to main page, otherewise signIn page
};

export default ProviderWrappedApp;
