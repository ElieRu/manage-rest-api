import axios from "axios"
import React from "react";
export default class Posts extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            posts: [],
            loading: false,
            search: props.search,
            network: props.network
        }
    }

    componentDidMount () {
        
        if (this.state.network) {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                let posts = res.data;
                this.setState({ 
                    posts: posts
                });

                setTimeout(() => {
                    this.setState({
                        loading: true
                    })
                }, 0)
            })
            .catch((err) => {
                console.log(err);
            })
        }

        
    }

    render () {
        if (this.state.network) {
            if (this.state.loading) {
                return <>
                    {this.state.search}
                    {this.state.posts.map(
                        post => <div key={post.id} className="col-12 col-md-6 col-lg-4">
                            <div className="border rounded p-2 mb-3">
                                <div className="row">
                            <div className="col">
                                <div id="box-img">
                                    <a href={"post/"+post.id}>
                                        <img className="rounded border-0" width="100%" height="100%" src="src/assets/img/steve-jobs-in-his-own-words.jpeg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="user-infos" className="row display-flex align-items-start">
                            <div className="col-2 d-flex flex-column justify-content-center">
                                <div id="user-profile" className="text-center bg-secondary-subtle border rounded-circle d-flex justify-content-center align-items-center" >
                                    <a href={"user/"+post.userId}>
                                        <svg className="fs-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-10">
                                <div><span className="text-capitalize fs-6 fw-bold">{post.title.length > 20 ? `${post.title.slice(0,20)}...` : post.title }</span></div>
                                <p id="para-desc" className="text-body text-opacity-50">{post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>)}
                </>
            } else {
                return <section className="d-flex justify-content-center" style={{position: 'relative'}}>
                    <div id="ldiv" className="loadingdiv">
                        <img className="loadingdivimg" src="src/assets/img/loading.gif" style={{width: '50px',height: '50px'}} />
                    </div>
                </section>
            }
        } else {
            return <section className="d-flex justify-content-center" style={{position: 'relative'}}>
            <div className="border rounded-circle border-secondary d-flex justify-content-center align-items-center" style={{padding: '5px',width: '60px',height: '60px'}}><i className="material-icons fs-3">signal_wifi_off</i></div>
        </section>
        }
    }
}
