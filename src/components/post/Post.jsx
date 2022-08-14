import { Link } from "react-router-dom"
import "./post.css"

export default function Post({id}) {
  return (
    <div className='post'>
     
      <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
           <Link to={`/posts/${id}`}> Lorem, ipsum dolor sit amet </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum hic reprehenderit unde illum! Quae fugiat similique necessitatibus nostrum, sequi provident minima molestias numquam animi! Maxime nisi consectetur suscipit ratione accusantium!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum hic reprehenderit unde illum! Quae fugiat similique necessitatibus nostrum, sequi provident minima molestias numquam animi! Maxime nisi consectetur suscipit ratione accusantium!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum hic reprehenderit unde illum! Quae fugiat similique necessitatibus nostrum, sequi provident minima molestias numquam animi! Maxime nisi consectetur suscipit ratione accusantium!</p>
    </div>
  )
}
