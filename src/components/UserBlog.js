function UserBlog({ title, content, author }) {
	return (
		<div>
			<p>This is a Blog</p>
			<p>Title : {title}</p>
			<p>Content : {content}</p>
			<p>Author : {author.username}</p>
      <button>Edit Blog</button>
      <button>Delete Blog</button>
		</div>
	);
}

export default UserBlog;
