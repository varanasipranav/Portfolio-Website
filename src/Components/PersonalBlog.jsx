import Header from "./header";
import {fakePosts} from '../fakePost'
import Post from "./Post";
import '../Styles/PersonalBlog.css'
export default function PersonalBlog(){
    return(
        <>
            <Header/>
            <h1 style={{ fontFamily: "Sixtyfour Convergence"}}>Personal Blog</h1>
            <div className="blog-container">
                {fakePosts.map((post) => (
                    <Post
                        key={post.id}
                        image={post.image}
                        heading={post.heading}
                        date={post.date}
                        content={post.content}
                    />
                ))}
            </div>
        </>
    )
}