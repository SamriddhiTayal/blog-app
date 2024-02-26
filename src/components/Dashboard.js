import Blog from './Blog';
// import blogData from '../data/blogs.json';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from './Button';
function Dashboard() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showAddBlogForm, setShowAddBlogForm] = useState(false);
	// const [loggedIn, setLoggedIn] = useState(false);

	const handleLogout = () => {
		localStorage.clear();
	};
	const [addBlogFormInputs, setAddBlogFormInputs] = useState({
		title: '',
		content: '',
	});

	const getUserBlogs = async () => {
		let author = localStorage.getItem('id');
		try {
			const res = await axios.post('http://localhost:8000/user', {
				author,
			});
			setBlogs(res.data.data.blogs);
			setLoading(false);
		} catch (err) {
			alert('Error: ', err);
			setLoading(false);
		}
	};
	const handleAddBlogFormInputs = (e) => {
		const { name, value } = e.target;
		// console.log(e);
		setAddBlogFormInputs({ ...addBlogFormInputs, [name]: value });
	};
	const handleAddBlogSubmit = async (e) => {
		const author = localStorage.getItem('id');
		// const authorId = '658e726d74b245e76333bdff';
		e.preventDefault();

		// get author from LS
		// sent post request
		// display edit and delete button
		try {
			const res = await axios.post('http://localhost:8000/blog/add', {
				data: {
					author,
					title: addBlogFormInputs.title,
					content: addBlogFormInputs.content,
				},
			});
			console.log(res.data.message);
		} catch (err) {
			alert('Error:', err);
		}
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
	const handleLikedBlogsButton = async () => {
		const user = localStorage.getItem('id');
		try {
			const res = await axios.post(
				'http://localhost:8000/user/showLikedBlogs',
				{
					user,
				}
			);
			console.log(res);
		} catch (err) {
			alert('Error:', err);
		}
	};
	const temp = () => {
		setShowAddBlogForm(true);
	};
	return (
		<div>
			<Button
				text='Add blog'
				bgColor='bg-[#3F4E4F]'
				onClickHandler={temp}
			/>

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
			<button onClick={handleLikedBlogsButton}>Liked Blogs</button>
			<p>Display user blogs</p>

			{loading ? (
				<p>Blogs are loading</p>
			) : Array.isArray(blogs) ? (
				blogs.map((blog, index) => (
					<div key={index}>
						<Blog
							content={blog.content}
							title={blog.title}
							author={blog.author}
							id={blog._id}
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
