import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';

function Blogs() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	const getBlogs = () => {
		axios
			.get('http://localhost:8000/blog')
			.then((res) => {
				// console.log("Response",res.data.data.blogs);
				setBlogs(res.data.data.blogs);
				setLoading(false); // Set loading to false when data is fetched
			})
			.catch((error) => {
				console.error('Error fetching blogs:', error);
				setLoading(false); // Set loading to false in case of an error
			});
	};

	useEffect(() => {
		getBlogs();
	}, []);

	return (
		<div>
			<img
				alt='logo'
				src='/assets/logo_wnb.png'
			/>
			<p>Display all blogs</p>

			{loading ? (
				<p>Loading blogs...</p>
			) : Array.isArray(blogs) ? (
				blogs.map((blog, index) => (
					<div key={index + 1}>
						<Blog
							title={blog.title}
							content={blog.content}
							author={blog.author}
							id= {blog._id}
						/>
					</div>
				))
			) : (
				<p>No blogs available.</p>
			)}
		</div>
	);
}

export default Blogs;
