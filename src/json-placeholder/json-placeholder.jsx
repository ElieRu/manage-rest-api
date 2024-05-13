/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import UserDatas from "../components/user-datas";
import ListAlbums from "../components/items/albums";
import ListPhotos from "../components/items/photos";
import ListTodos from "../components/items/todos";
import Posts from "../components/items/posts";
import Loading from "../components/loading";
import my_filter from "./my_filter";


export class JsonPlaceholder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            loading: false
        }
        this.name = props.data
        this.id = props.id
    }

    componentDidMount () {
        
        axios.get(`https://jsonplaceholder.typicode.com/${this.name}`)
        .then((response) => {
            let datas = response.data;

            this.setState({
                datas: my_filter(this.name, datas, this.id)
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
                        return <Posts posts={this.state.datas} />
                    case 'albums':
                        return <ListAlbums datas={this.state.datas} />
                    case 'todos':
                        return <ListTodos datas={this.state.datas} />
                    default:
                        return <ListPhotos datas={this.state.datas} />                    
                }
            } else {
                return <Loading />
            }
        } else {
            return <UserDatas datas={this.state.datas} />    
        }
    }
}


