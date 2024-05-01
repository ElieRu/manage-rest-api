/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";

function get_data(datas, id) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id === id) {
            return datas[i];
        }
    }
}


export class Place extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }
        this.data = props.data
        this.id = props.id
    }

    componentDidMount () {
        axios.get(`https://jsonplaceholder.typicode.com/${this.data}`)
        .then((response) => {
            let datas = response.data;
            
            this.setState({
                datas: get_data(datas, this.id)
            });
        })
    }

    render () {
        switch (this.data) {
            case 'posts':
                return <>
                        <div>
                            <h4 className="title-post text-capitalize">{this.state.datas.title}.</h4>
                            <p className="text-capitalize">{this.state.datas.body}.</p>
                        </div>
                        <div>
                            <form><textarea className="form-control mb-2" style={{resize: 'none'}} placeholder="Comment this post"></textarea><button className="btn btn-primary" type="submit">Comment</button></form>
                        </div>
                    </>      
            default:
                break;
        }
    }
}


