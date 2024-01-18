import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';

function Blogs() {
	const [blog, setBlog] = useState([]);
	const [loading, setLoading] = useState(true);

	const getBlog = () => {
		axios
			.get('http://localhost:8000/blog')
			.then((res) => {
				// console.log("Response",res.data.data.blog);
				setBlog(res.data.data.blog);
				setLoading(false); // Set loading to false when data is fetched
			})
			.catch((error) => {
				console.error('Error fetching blogs:', error);
				setLoading(false); // Set loading to false in case of an error
			});
	};

	useEffect(() => {
		getBlog();
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
			) : Array.isArray(blog) ? (
				blog.map((blogData, index) => (
					<div key={index + 1}>
						<Blog blogData={blogData} />
					</div>
				))
			) : (
				<p>No blogs available.</p>
			)}
		</div>
	);
}

export default Blogs;
