/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default class Users extends React.Component {
    
    id;

    constructor(props) {
        super(props)
        this.id = useState({
            id: useParams().id
        })        
    }

    render() {
        return (
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div>welcom {this.id}</div>
                    </div>
                </div>
            </section>
        )
    }
}



