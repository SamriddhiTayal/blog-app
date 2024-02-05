import { useState } from 'react';
import axios from 'axios';

function Blog({ title, content, author , id}) {
	// console.log(id);
	// console.log(author._id);
	const [showForm, setShowForm] = useState(false);
	const [editBlogFormInput, setEditBlogFormInput] = useState({
		title: '',
		content: '',
	});

	const user = localStorage.getItem('id');
	// if (user) {
	// 	if (user === author._id) {
	// 		setUserIsAuthor(true);
	// 	}
	// }
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditBlogFormInput({ ...editBlogFormInput, [name]: value });
	};
	const handleEditBlogFormSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/blog/edit', {
				data: {
					id,
					title: editBlogFormInput.title,
					content: editBlogFormInput.content,
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				alert('Error: ', err);
			});
	};
	const handleDeleteBlog = () => {
		axios
			.post('http://localhost:8000/blog/delete', {
				id,
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				alert('Error: ', err);
			});
	};
	const handleLike = () => {
		axios
			.post('http://localhost:8000/blog/like', {
				id,
			})
			.then((res) => {
				console.log(res.data.data.blog.likes);
			})
			.catch((err) => {
				alert('Error: ', err);
			});
	};
	const handleDislike = () => {
		axios
			.post('http://localhost:8000/blog/dislike', {
				id,
			})
			.then((res) => {
				console.log(res.data.data.blog.dislikes);
			})
			.catch((err) => {
				alert('Error: ', err);
			});
	};
	return (
		<div>
			<p>This is a Blog</p>
			<p>Title : {title}</p>
			<p>Content : {content}</p>
			<p>Author : {author.username}</p>
			<button onClick={handleLike}>👍</button>
			<button onClick={handleDislike}>👎</button>
			{user === author._id ? (
				<div>
					<button onClick={() => setShowForm(true)}>Edit Blog</button>
					{showForm ? (
						<form onSubmit={handleEditBlogFormSubmit}>
							<input
								type='text'
								placeholder='New Title'
								name='title'
								value={editBlogFormInput.title}
								onChange={handleChange}
							/>
							<input
								type='text'
								placeholder='New Content'
								name='content'
								value={editBlogFormInput.content}
								onChange={handleChange}
							/>
							<button>Submit</button>
						</form>
					) : null}
					<button onClick={handleDeleteBlog}>Delete Blog</button>
				</div>
			) : null}
		</div>
	);
}
export default Blog;
