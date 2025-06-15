import '../Styles/Post.css'
export default function Post({ post }){ // Destructure the 'post' prop
    function handleurl(){
        window.open(post.url, '_blank');
    }
    return(
                <div className="post-container" onClick={handleurl}>
 


                    <div className="post-header">
        
                        <h3>{post.heading}</h3>
        
                        <h6>{post.date}</h6>
        
                    </div>
        
                    <img src={post.image} alt={post.heading} className="post-imag"/>
        
                    <p>{post.content}</p>
        
                </div>


    )

}