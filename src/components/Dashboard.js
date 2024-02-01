import UserBlog from './UserBlog';
// import blogData from '../data/blogs.json';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Dashboard() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showAddBlogForm, setShowAddBlogForm] = useState(false);
	// const [loggedIn, setLoggedIn] = useState(false);
	const handleLogout =()=>{
		localStorage.clear();
	}
	const [addBlogFormInputs, setAddBlogFormInputs] = useState({
		title: '',
		content: '',
	});

	const getUserBlogs = () => {
		axios
			.post('http://localhost:8000/user', {
				author: '658e726d74b245e76333bdff',
			})
			.then((res) => {
				setBlogs(res.data.data.blogs);
				setLoading(false);
			})
			.catch((err) => {
				alert('Error: ', err);
				setLoading(false);
			});
	};
	const handleAddBlogFormInputs = (e) => {
		const { name, value } = e.target;
		// console.log(e);
		setAddBlogFormInputs({ ...addBlogFormInputs, [name]: value });
	};
	const handleAddBlogSubmit =  (e) => {
		// const authorId = '658e726d74b245e76333bdff';
		e.preventDefault();
		// get author from LS
		// sent post request
		// display edit and delete button
		axios
			.post('http://localhost:8000/blog/add', {
				data: {
					author: '658e726d74b245e76333bdff',
					title: addBlogFormInputs.title,
					content: addBlogFormInputs.content,
				},
			})
			.then((res) => {
				console.log(res.data.message);
			})
			.catch((err) => {
				alert('Error:', err);
			});
	};
	useEffect(() => {
		const loggedInUser = localStorage.getItem('id');
		if (loggedInUser) {
			// const foundUser = JSON.parse(loggedInUser);
			getUserBlogs();
		}
	}, []);
	// useEffect(() => {
	// 	getUserBlogs();
	// }, []);
	return (
		<div>
			<button onClick={() => setShowAddBlogForm(true)}>Add Blog</button>
			{showAddBlogForm ? (
				<form onSubmit={handleAddBlogSubmit}>
					<input
						type='text'
						placeholder='Title'
						name='title'
						value={addBlogFormInputs.title}
						onChange={handleAddBlogFormInputs}
					/>
					<input
						type='text'
						placeholder='Content'
						name='content'
						value={addBlogFormInputs.content}
						onChange={handleAddBlogFormInputs}
					/>
					<button>Submit</button>
				</form>
			) : null}
			<button onClick={handleLogout}>Logout</button>
			<p>Display user blogs</p>

			{loading ? (
				<p>Blogs are loading</p>
			) : Array.isArray(blogs) ? (
				blogs.map((blog, index) => (
					<div key={index}>
						<UserBlog
							content={blog.content}
							title={blog.title}
							author={blog.author}
						/>
					</div>
				))
			) : (
				<p>No Blogs found</p>
			)}
		</div>
	);
}
export default Dashboard;
