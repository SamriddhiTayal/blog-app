import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';

function App() {
  return (
		<div>
			<Routes>
        <Route
          path='/'
          element={<Landing />}
        />
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
				<Route
					path='/user'
					element={<UserProfile />}
				/>
			</Routes>
		</div>
	);
}

export default App;
