/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UsersList from "../components/user-list";

export default class Home extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
            const users = res.data
            this.setState({ users })
        })
    }

    render() {
        return (
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        {this.state.users.map(user => (<UsersList key={uuidv4()} user={user} />))}
                    </div>
                </div>
            </section>
        )
    } 
}