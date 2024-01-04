import { useNavigate } from 'react-router-dom';

function Landing() {
	const navigate = useNavigate();
	return (
		<div>
			<img
				alt='logo'
				src='/assets/logo_wnb.png'></img>
			<p className='heading'>Wisdom Tales</p>
			<p>
				Welcome to Wisdom Tales! Here, stories are like wise friends, sharing
				lessons that last. Whether it's an old fable or a personal story, each
				one is a guide to understanding life better. Come, join the journey, and
				let's explore the wisdom hidden in stories together. Start your
				adventure into wisdom now!
			</p>
			<button
				onClick={() => {
					navigate('/login');
				}}>
				Login
			</button>
			<button
				onClick={() => {
					navigate('signup');
				}}>
				Signup
			</button>
		</div>
	);
}
export default Landing;
