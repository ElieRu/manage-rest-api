import axios from "axios";
import React from "react";

const comments = (datas, postId) => {
    let comments = [];
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].postId == postId) {
            comments.push(datas[i])
        }
    }
    return comments;
}

export default class Comments extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            comments: []
        }
        this.postId = props.postId
    }

    componentDidMount () {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then((res) => {
            let datas = res.data;
            
            this.setState({
                comments: comments(datas, this.postId)
            });
        })
    }

    render () {
        return  <div className="col-12 col-md-6 col-lg-8 mb-3">
                    <div className="d-flex align-items-center mb-3"><svg className="fs-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor" style={{marginRight: '10px'}}>
                            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path>
                        </svg>
                        <h4 style={{marginBottom: '0px'}}>All comments ({this.state.comments.length})</h4>
                    </div>

                    {this.state.comments.map(comment => (
                    <div key={comment.id} className="card mb-3">
                        <div className="card-body">
                            <div className="text-body-tertiary d-flex justify-content-between" style={{fontSize: '13px'}}>
                                <span>{comment.name}</span><span>{comment.email}</span></div>
                            <p className="card-text text-capitalize">{comment.body}.</p>
                            <div><a className="btn btn-primary btn-sm" role="button" href="#" style={{marginRight: '10px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                                </svg></a><a className="btn btn-primary btn-sm link-primary bg-transparent border-white" role="button" href="#">Reply...</a></div>
                            </div>
                    </div>))}
                </div>
                }
            }
            