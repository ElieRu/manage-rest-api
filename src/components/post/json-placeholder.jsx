/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import UserDatas from "../users/user-datas";
import ListAlbums from "../albums/list";
import ListPhotos from "../photos/list";
import Loading from "../posts/loading";

function get_data(table, datas, id) {
    let albums = []
    let photos = []
    if (table == 'albums') {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].userId === id) {
                albums.push(datas[i]);
            }
        }
        return albums
    } else if (table == 'photos') {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].albumId === id) {
                photos.push(datas[i]);
            }
        }
        return photos
    } else {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].id === id) {
                return datas[i];
            }
        }
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
                this.data == 'albums' ? 'albums' : 
                this.data == 'photos' ? 'photos' : 
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
                return <UserDatas datas={this.state.datas} address={this.state.datas.address} />
            case 'albums':
                if (this.state.loading) {
                    return <ListAlbums datas={this.state.datas} />
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


