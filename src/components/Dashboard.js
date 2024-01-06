import Blog from './Blog';
import blogData from '../data/blogs.json'
function Dashboard() {
	return (
		<div>
			<button>Add Blog</button>
			<button>Logout</button>
			<p>Display user blogs</p>
      {blogData.map(blogData=><Blog blogData={blogData}/>)}
		</div>
	);
}
export default Dashboard;
