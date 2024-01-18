import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import Dashboard from './components/Dashboard';
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
					path='/blog'
					element={<Blogs />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
			</Routes>
		</div>
	);
}

export default App;
