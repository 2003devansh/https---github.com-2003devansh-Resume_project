import { useEffect } from "react";
import  {useDispatch,useSelector} from "react-redux"  ;
import {fetchPosts} from "../redux/features/postSlice" ;
import PostCard from "./PostCard" ;


export default function PostList(){
    const dispatch = useDispatch() ;
    const {posts, isLoading,error} = useSelector((state)=>{
        state.posts
    }) 

    useEffect(()=>{
        dispatch(fetchPosts()) ;
    },[dispatch]) ;

    if(isLoading) return <p className="text-center text-lg">Loading posts...</p>
    if(error) return <p className="text-center text-lg text-red-500">{error}</p>
    if(!posts.length) return <p className="text-center text-lg">No posts found.</p>

    return (
        <div className="grid md:grid-cols-2 lg:grif-cols-3 gap-6 p-4">
            {posts.map((post)=>{
                <PostCard key={posts._id} post={post} />
            })}
        </div>
    )
}