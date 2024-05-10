/* eslint-disable react/prop-types */
import axios from "axios"
import React from "react";
import PostComponent from "./posts-component";
import Loading from "./loading";


const posts = (datas, iteration) => {
    // let tmpPost = [];
    let posts = [];
    for (let i = 0; i < datas.length; i++) {
        // if (!tmpPost.includes(datas[i].userId)) {
        //     tmpPost.push(datas[i].userId);
        //     posts.push(datas[i])
        // }
        if (i < iteration) {
            // console.log(datas[i]);
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
        this.pages = []
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        if (this.state.network) {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                let datas = res.data;
                
                this.setState({
                    posts: posts(datas, 100)
                });

                for (let i = 0; i < this.state.posts.length; i++) {
                    if (this.state.posts[i].id % 20 == 1) {
                        this.pages.push(i)
                    }
                }

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

    handleClick (e) {
        e.preventDefault()
        console.log("my click");
    }

    render () {
        if (this.state.loading) {
            return <div className="d-flex flex-column">
                        <PostComponent posts={this.state.posts} />
                        <div className="d-flex justify-content-center">
                            {this.pages.map((page, i) => (<a onClick={this.handleClick} type='button' key={i} href={`/page/${page+1}`} className="btn btn-primary m-1">{i+1}</a>))}
                        </div>
                    </div>

        } else {
            return <Loading />
        }
    }
}
