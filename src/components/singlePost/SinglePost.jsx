import { useParams } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {

  const {id}= useParams();

 

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet 
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>

            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:<b>Moin</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet commodi incidunt assumenda quos? Esse nobis odio, officia vel corporis commodi, est asperiores recusandae ducimus dolorum placeat rerum omnis exercitationem facilis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet commodi incidunt assumenda quos? Esse nobis odio, officia vel corporis commodi, est asperiores recusandae ducimus dolorum placeat rerum omnis exercitationem facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet commodi incidunt assumenda quos? Esse nobis odio, officia vel corporis commodi, est asperiores recusandae ducimus dolorum placeat rerum omnis exercitationem facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet commodi incidunt assumenda quos? Esse nobis odio, officia vel corporis commodi, est asperiores recusandae ducimus dolorum placeat rerum omnis exercitationem facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet commodi incidunt assumenda quos? Esse nobis odio, officia vel corporis commodi, est asperiores recusandae ducimus dolorum placeat rerum omnis exercitationem facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet commodi incidunt assumenda quos? Esse nobis odio, officia vel corporis commodi, est asperiores recusandae ducimus dolorum placeat rerum omnis exercitationem facilis.
            </p>
      </div>
    </div>
  )
}
