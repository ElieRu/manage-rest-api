/* eslint-disable react/prop-types */
import axios from "axios"
import React from "react";
import PostComponent from "./posts-component";
import Loading from "./loading";


const posts = (datas) => {
    let tmpPost = [];
    let posts = [];
    for (let i = 0; i < datas.length; i++) {
        if (!tmpPost.includes(datas[i].userId)) {
            tmpPost.push(datas[i].userId);
            posts.push(datas[i])
        }
    }
    return posts;
}

export default class Posts extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            posts: [],
            loading: false,
            search: props.search,
            network: props.network,
        }
    }

    componentDidMount () {
        
        if (this.state.network) {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                let datas = res.data;
                
                this.setState({
                    posts: posts(datas)
                });

                setTimeout(() => {
                    this.setState({
                        loading: true
                    })
                }, 5000)
            })
            .catch((err) => {
                console.log(err);
            })
        }

        
    }

    render () {
        if (this.state.network) {
            if (this.state.loading) {
                return <PostComponent posts={this.state.posts} />
            } else {
                return <Loading />
            }
        } else {
            return <section className="d-flex justify-content-center" style={{position: 'relative'}}>
            <div className="border rounded-circle border-secondary d-flex justify-content-center align-items-center" style={{padding: '5px',width: '60px',height: '60px'}}><i className="material-icons fs-3">signal_wifi_off</i></div>
        </section>
        }
    }
}
