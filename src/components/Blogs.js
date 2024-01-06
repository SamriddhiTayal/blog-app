import Blog from './Blog';
import blogData from '../data/blogs.json'
function Blogs() {
	 
	return (
		<div>
			<img
				alt='logo'
				src='/assets/logo_wnb.png'
			/>
			<p>Display all blogs</p>
			{blogData.map(blogData=><Blog blogData={blogData}/>)}
		</div>
	);
}
export default Blogs;
