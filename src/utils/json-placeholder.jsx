/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import UserDatas from "../components/user-datas";
import ListAlbums from "../components/items/albums";
import ListPhotos from "../components/items/photos";
import ListTodos from "../components/items/todos";
import Loading from "../components/loading";
import filter from "./switching";
import PostDescription from "../components/post-description";
import ListComments from "../components/items/comments";
import ListPosts from "../components/items/posts";


export class JsonPlaceholder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            loading: false
        }
        this.name = props.data
        this.unique = props.unique
        this.id = props.id
    }

    componentDidMount () {
        
        axios.get(`https://jsonplaceholder.typicode.com/${this.name}`)
        .then((response) => {
            let datas = response.data;

            this.setState({
                datas: filter(this.name, datas, this.id, this.unique)
            });

            setTimeout(() => {
                this.setState({
                    loading: true
                })
            }, 0);
            
        })

    }

    render () {
        if (this.name !== 'users') {
            if (this.state.loading) {
                switch (this.name) {
                    case 'posts':
                        if (Object.keys(this.state.datas).length === 4) {
                            return <PostDescription post={this.state.datas} />
                        } else {
                            return <ListPosts posts={this.state.datas} />
                        }
                    case 'comments':
                        return <ListComments comments={this.state.datas} />
                    case 'albums':
                        return <ListAlbums albums={this.state.datas} />
                    case 'photos':
                        return <ListPhotos photos={this.state.datas} />
                    case 'todos':
                        return <ListTodos todos={this.state.datas} />
                    default:
                        return 'empty'
                }
            } else {
                return <Loading />
            }
        } else {
            return <UserDatas user={this.state.datas} />    
        }
    }
}


