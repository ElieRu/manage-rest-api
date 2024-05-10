/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import UserDatas from "../users/user-datas";
import ListAlbums from "../albums/list";
import ListPhotos from "../photos/list";
import Loading from "../posts/loading";
import ListTodos from "../todos/lists";

function sort_datas (datas, id) {
    let all_datas = []
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].userId === id) {
            all_datas.push(datas[i]);
        }
    }
    return all_datas
}

function select_data(datas, id) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id === id) {
            return datas[i];
        }
    }
}

function get_data(table, datas, id) {
    switch (table) {
        case 'albums' || 'photos' || 'todos':
            sort_datas(datas, id)
            break;
        case 'users':
            select_data(datas, id)
            break;
        default:
            break;
    }
}


export class JsonPlaceholder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            loading: false
        }
        this.data = props.data
        this.id = props.id
    }

    componentDidMount () {
        
        axios.get(`https://jsonplaceholder.typicode.com/${this.data}`)
        .then((response) => {
            let datas = response.data;
            
            let table = 
                this.data == 'posts' ? 'posts' : 
                this.data == 'albums' ? 'albums' : 
                this.data == 'photos' ? 'photos' : 
                this.data == 'todos' ? 'todos' : 
                null;

            this.setState({
                datas: get_data(table, datas, this.id)
            });

            setTimeout(() => {
                this.setState({
                    loading: true
                })
            }, 1000);
            
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
            case 'users':
                return <UserDatas datas={this.state.datas} />
            case 'albums':
                if (this.state.loading) {
                    return <ListAlbums datas={this.state.datas} />
                } else {
                    return <Loading />
                }
            case 'todos':
                if (this.state.loading) {
                    return <ListTodos datas={this.state.datas} />
                } else {
                    return <Loading />
                }
            case 'photos':
                if (this.state.loading) {
                    return <ListPhotos datas={this.state.datas} />
                } else {
                    return <Loading />
                }
            default:
                break;
        }
    }
}


