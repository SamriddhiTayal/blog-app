import { useState } from 'react';
import axios from 'axios';
function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const emailInputHandler = (e) => {
		setEmail(e.target.value);
	};
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};
	const usernameInputHandler = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/user/signup', {
				data: {
					username,
					email,
					password,
				},
			});
			console.log(response.data.message);

		} catch (err) {
			alert('Error: ', err);
		}
		// console.log(email, password, username);
		// axios
		// 	.post('http://localhost:8000/user/signup', {
		// 		data: {
		// 			username,
		// 			email,
		// 			password,
		// 		},
		// 	})
		// 	.then((res) => {
		// 		console.log(res.data.message);
		// 	})
		// 	.catch((err) => {
		// 		alert('Error: ', err);
		// 	});
	};
	return (
		<div>
			<p>Signup Page</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={usernameInputHandler}
				/>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={emailInputHandler}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={passwordHandler}
				/>
				<button>Signup</button>
			</form>
		</div>
	);
}
export default Signup;
