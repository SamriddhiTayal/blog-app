import { useState, useEffect } from 'react';
import axios from 'axios';
function Login() {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [loginInputs, setLoginInputs] = useState({
		email: '',
		password: '',
	});
	// const emailInputHandler = (e) => {
	// 	setEmail(e.target.value);
	// };
	// const passwordHandler = (e) => {
	// 	setPassword(e.target.value);
	// };
	const handleLoginInput = (e) => {
		const { name, value } = e.target;

		setLoginInputs({ ...loginInputs, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:8000/user/login', {
				data: {
					email: loginInputs.email,
					password: loginInputs.password,
				},
			});
			setLoggedIn(res.data.success);
			// console.log(res.data.data);
			localStorage.setItem('id', res.data.data._id);
			localStorage.setItem('username', res.data.data.username);
		} catch (err) {
			alert('Error: ', err);
		}
	};
	useEffect(() => {
		const loggedInUserId = localStorage.getItem('id');

		if (loggedInUserId) {
			setLoggedIn(true);
		}
	}, []);
	return (
		<div>
			<p>Login page</p>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email'
					name='email'
					value={loginInputs.email}
					onChange={handleLoginInput}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					value={loginInputs.password}
					onChange={handleLoginInput}
				/>
				<button>Login</button>
				{loggedIn ? <p>Logged In successfully</p> : null}
			</form>
		</div>
	);
}
export default Login;
