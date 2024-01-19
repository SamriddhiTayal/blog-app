function Blog({title, content, author}){
  return (
		<div>
			<p>This is a Blog</p>
			<p>Title : {title}</p>
			<p>Content : {content}</p>
			<p>Author : {author.username}</p>
		</div>
	);
}

export default Blog;