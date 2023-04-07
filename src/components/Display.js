import {React,useState,useEffect} from 'react'
import {db,auth} from '../firebase'
import {updateDoc, getDocs,collection } from 'firebase/firestore'
import Content from './Content'


export default function Display() {

  const [posts,setPosts] = useState([])
  const postsRef = collection(db,"Posts")
  const [newPost,setNewPost] = useState(false)

  
  const querySnapshot = async()=>{
      try{
          const content = await getDocs(postsRef)
          const parsedContent = content.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id
          }))
          setPosts(parsedContent)
          // console.log(posts)
      } catch(err){
          console.error(err)
      }
  }
  querySnapshot()
  useEffect(()=>{
          querySnapshot()
          // console.log('running')
  },[newPost])



  return (
       <div className = 'display'>
            {posts.map((post)=>(
                <div className = 'posts'>
                <Content
                    post = {post}
                />
                </div>
            ))}
        </div>
     );
}

