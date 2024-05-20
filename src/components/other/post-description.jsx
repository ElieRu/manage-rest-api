/* eslint-disable react/prop-types */

export default function PostDescription ({post}) {
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return <div>
                <div>
                    <h4 className="title-post text-capitalize">{post.title}</h4>
                    <p className="text-capitalize">{post.body}</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea className="form-control mb-2" style={{resize: 'none'}} placeholder="Comment this post"></textarea>
                        <button className="btn btn-primary" type="submit">Comment</button>
                    </form>
                </div>
            </div>
}

