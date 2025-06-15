import Header from "./header";
import {fakePosts} from '../fakePost'
import Post from "./Post";
import '../Styles/PersonalBlog.css'
import Footer from './Footer'
export default function PersonalBlog(){
    return(
        <>
            <Header/>
            <h1 style={{ fontFamily: "Sixtyfour Convergence"}}>Personal Blog</h1>
            <div className="blog-container">
                {fakePosts.map((post) => (
                    <Post
                        key={post.id}
                        post={post} 
                    />
                ))}
            </div>
            <Footer/>
        </>
    )
}