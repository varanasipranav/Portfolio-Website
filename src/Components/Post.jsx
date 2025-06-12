import '../Styles/Post.css'
export default function Post(post){
    return(
                <div className="post-container">



                    <div className="post-header">
        
                        <h3>{post.heading}</h3>
        
                        <h6>{post.date}</h6>
        
                    </div>
        
                    <img src={post.image} alt={post.heading} className="post-image"/>
        
                    <p>{post.content}</p>
        
                </div>


    )

}