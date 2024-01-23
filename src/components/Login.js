import {useState} from 'react';
import axios from 'axios';
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('')
	const [loggedIn, setLoggedIn] = useState(false);
	const emailInputHandler = (e) => {
		setEmail(e.target.value);
	};
	const passwordHandler=(e)=>{
		setPassword(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		
		axios
		.post('http://localhost:8000/user/login', {
			data :{
				email, password
			}
		})
		.then((res) =>{
			setLoggedIn(res.data.success);
			console.log(res.data.message);
		})
		.catch((err)=>{
			alert("Error: ", err);
		})
	};
	return (
		<div>
			<p>Login page</p>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email'
					value = {email}
					onChange={emailInputHandler}
				/>
				<input
					type='password'
					placeholder='Password'
					vvalue= {password}
					onChange={passwordHandler}
				/>
        <button>Login</button>
				{loggedIn?<p>Logged In successfully</p>:null}
			</form>
		</div>
	);
}
export default Login;
