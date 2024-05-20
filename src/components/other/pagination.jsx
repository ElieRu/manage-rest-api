/* eslint-disable react/prop-types */
/* eslint-disable react/no-direct-mutation-state */
import React from "react"
import Items from "./items"



class Pagination extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            items: [],
            posts: props.posts,
            loading: false
        }
        
        this.currentPage = 1
        this.currentRoute = props.routeName

        this.callNextLoading = this.callNextLoading.bind(this)
        this.nextLoading = this.nextLoading.bind(this)
        this.pages = this.pages.bind(this)

        this.pages(15)
    }

    pages (number) {
        let tempo = []

        for (let i = 0; i < this.state.posts.length; i++) {
            if (i >= 0 && i < number) {
                tempo.push(<Items key={i} post={this.state.posts[i]} >{i}</Items>)
            }
        }
        this.state.items = tempo
        return this.state.items
    }

    nextLoading (number) {
        setTimeout(() => {
            this.setState({
                items: this.pages(number),
                loading: false
            })
        }, 1000);
    }

    callNextLoading () {
        this.setState({
            loading: true
        })
        switch (this.currentPage) {
            case 1:
                this.currentPage = 2
                this.nextLoading (30)
                break;
            case 2:
                this.currentPage = 3
                this.nextLoading (51)
                break;
            case 3:
                this.currentPage = 4
                this.nextLoading (69)
                break;
            case 4:
                this.currentPage = 5
                this.nextLoading (90)
                break;
            default:
                this.nextLoading (99)
                break;
        }
    }

    render () {
        
        return <>        
                {this.state.items}

                <div className="d-flex justify-content-center">
                    {!this.currentRoute ? 
                    <button onClick={this.callNextLoading} style={{width: '200px'}} className={`btn btn-primary border rounded-pill d-flex justify-content-${this.state.loading ? 'between' : 'center'} align-items-center`}>
                        {this.state.loading ? <span></span> : '' }
                        <span style={{fontSize: '13px'}}>Load more</span>
                        {this.state.loading ? <span className="spinner-border text-light spinner-border-sm" role="status"></span> : ''}
                    </button> : ''}
                </div>
            </>
    }
}

export default Pagination
