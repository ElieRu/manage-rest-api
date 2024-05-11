/* eslint-disable react/prop-types */

export default function Posts({posts}) {
    return <div className="row">
                {posts.map(post => (<div key={post.id} className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center mb-3">
                                <div className="col-10 d-flex">
                                    <h4 className="title-post text-capitalize">{post.title.length > 15 ? post.title.slice(0,15) + '...' : post.title}</h4>
                                </div>
                                <div className="col-2 d-flex justify-content-start">
                                    <a id="btn-user" className="btn btn-primary btn-sm bg-transparent border rounded-circle border-0 d-flex justify-content-center align-items-center" role="button" 
                                        href={`user/${post.userId}`}>
                                        <svg className="fs-3 text-body-tertiary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <p className="card-text">{post.body}</p>
                            <a className="btn btn-primary" href={`post/${post.id}`} role="button">More</a>
                        </div>
                    </div>
                </div>))}
            </div>
}