import Blog from './Blog';
// import blogData from '../data/blogs.json';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Dashboard() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const getUserBlogs = () => {
		axios
			.post('http://localhost:8000/user', {
				author: '58e726d74b245e76333bdff',
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

	useEffect(() => {
		getUserBlogs();
	}, []);
	return (
		<div>
			<button>Add Blog</button>
			<button>Logout</button>
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
