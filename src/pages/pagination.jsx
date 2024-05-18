/* eslint-disable react/prop-types */
/* eslint-disable react/no-direct-mutation-state */
import React from "react"



class Pagination extends React.Component {

    constructor (props) {
        super(props)
        // this.posts = props.posts
        this.routeName = props.routeName
        this.state = {
            items: [],
            posts: props.posts
        }

        this.handleOne = this.handleOne.bind(this)
        this.handleTwo = this.handleTwo.bind(this)
        this.handleThree = this.handleThree.bind(this)
        this.handleFour = this.handleFour.bind(this)
        this.handleFive = this.handleFive.bind(this)
        this.pages = this.pages.bind(this)

        this.pages(3)
    }

    pages (number) {
        let tempo = []
        for (let i = 0; i < this.state.posts.length; i++) {
            if (i >= 0 && i < number) {
                tempo.push(<li key={i}>{i}</li>)
            }
        }
        this.state.items = tempo
        return this.state.items
    }

    handleOne () {
        this.setState({
            items: this.pages(6)
        })
    }

    handleTwo () {
        this.setState({
            items: this.pages(9)
        })
    }

    handleThree () {
        this.setState({
            items: this.pages(14)
        })
    }

    handleFour () {
        this.setState({
            items: this.pages(20)
        })
    }

    handleFive () {
        this.setState({
            items: this.pages(25)
        })
    }

    render () {

        let get_desc = this.state.routeName == 'user' ? 'post' : 'post';

        return <>                        
                <div>
                    <ul>{this.state.items}</ul>
                </div>

                <div>
                    <button onClick={this.handleOne} className="btn btn-primary btn-sm">1</button>
                    <button onClick={this.handleTwo} className="btn btn-primary btn-sm">2</button>
                    <button onClick={this.handleThree} className="btn btn-primary btn-sm">3</button>
                    <button onClick={this.handleFour} className="btn btn-primary btn-sm">4</button>
                    <button onClick={this.handleFive} className="btn btn-primary btn-sm">5</button>
                </div>
            </>
    }
}

export default Pagination