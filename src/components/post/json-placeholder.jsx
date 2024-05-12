/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import UserDatas from "../users/user-datas";
import ListAlbums from "../albums/albums-list";
import ListPhotos from "../photos/photos-list";
import Loading from "../posts/loading";
import ListTodos from "../todos/lists";
import Home from "../../pages/home";
import Posts from "../posts";

function get_data (name, datas, id = null) {

    let all_datas = []

    if (id === null) {
        for (let i = 0; i < datas.length; i++) {
            all_datas.push(datas[i]);
        }
        return all_datas
    } else {
        if (name == 'users') {
            for (let i = 0; i < datas.length; i++) {
                if (datas[i].id === id) {
                    return datas[i];
                }
            }
        } else if (name == 'albums') {
            for (let i = 0; i < datas.length; i++) {
                if (datas[i].userId === id) {
                    return datas[i];
                }
            }
        }
    }    
}

function select_data(datas, id) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id === id) {
            return datas[i];
        }
    }
}

// function get_data(table, datas, id) {
//     switch (table) {
//         case 'posts':
//             sort_datas(datas);
//             break;
//         case 'albums' || 'photos' || 'todos':
//             sort_datas(datas, id)
//             break;
//         case 'users':
//             select_data(datas, id)
//             break;
//         default:
//             break;
//     }
// }


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
            
            // console.log(datas);

            this.setState({
                datas: get_data(this.name, datas, this.id)
            });

            setTimeout(() => {
                this.setState({
                    loading: true
                })
            }, 0);
            
        })

    }

    render () {
        switch (this.name) {
            case 'posts':
                if (this.state.loading) {
                    return <Posts posts={this.state.datas} />
                } else {
                    return <Loading />
                }
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


