import { useState } from 'react';
import axios from 'axios';

function UserBlog({ title, content, author }) {
	const [showForm, setShowForm] = useState(false);
	const [editBlogFormInput, setEditBlogFormInput] = useState({
		title: '',
		content: '',
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditBlogFormInput({ ...editBlogFormInput, [name]: value });
	};
	const handleEditBlogFormSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/blog/edit', {
				data: {
					id: '658dbd41b648514a4eb5d53b',
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
				id: '65b607546e3c71653a48b3f3',
			})
			.then((res) => {
				console.log(res.data);
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
			<button
				onClick={() => {
					handleDeleteBlog();
				}}>
				Delete Blog
			</button>
		</div>
	);
}

export default UserBlog;
