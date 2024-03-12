import './post.css'
export default function Post({post}){
    const {userId, id, title, body}= post;
    return(
        <div className='post'>
            <h4>UserID:{userId}</h4>
            <h6>PostID:{id}</h6>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
        </div>
    )
}