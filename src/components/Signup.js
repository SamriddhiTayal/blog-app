import { useState } from 'react';
import axios from 'axios';
function Signup() {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [username, setUsername] = useState('');
	// const emailInputHandler = (e) => {
	// 	setEmail(e.target.value);
	// };
	// const passwordHandler = (e) => {
	// 	setPassword(e.target.value);
	// };
	// const usernameInputHandler = (e) => {
	// 	setUsername(e.target.value);
	// };
	const [signupInputs, setSignupInputs] = useState({
		username:'',
		email:'',
		password:''
	})
	const signupInputHandler=(e)=>{
		const {name, value} = e.target;
		// console.log(e.target);
		setSignupInputs({...signupInputs, [name] : value})	
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/user/signup', {
				data: {
					username: signupInputs.username,
					email: signupInputs.email,
					password: signupInputs.password,
				},
			});
			console.log(response.data);
			localStorage.setItem('id', response.data.data._id);
			localStorage.setItem('username', response.data.data.username);

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
					name='username'
					value={signupInputs.username}
					onChange={signupInputHandler}
				/>
				<input
					type='email'
					placeholder='Email'
					name='email'
					value={signupInputs.email}
					onChange={signupInputHandler}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					value={signupInputs.password}
					onChange={signupInputHandler}
				/>
				<button>Signup</button>
			</form>
		</div>
	);
}
export default Signup;
