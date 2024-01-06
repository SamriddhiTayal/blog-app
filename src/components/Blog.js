function Blog({blogData}){
  const {title, content, author} = blogData;
  return (
		<div>
			<p>This is a Blog</p>
			<p>Title : {title}</p>
			<p>Content : {content}</p>
			<p>Author : {author}</p>
		</div>
	);
}

export default Blog;