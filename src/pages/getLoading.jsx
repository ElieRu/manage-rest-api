import axios from "axios";
import React from "react";
import About from "./about";

export default class GetLoading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      load: true,
      datas: []
    }
  }

  componentDidCatch () {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then((res) => {
      this.setState({
        datas: res.data
      })

      setTimeout(() => {
        this.setState({
          load: false
        })
      }, 6000);

    })
  }

  render () {
    if (this.state.load) {
      return <About/>
    } else {
      return <div style={{marginTop: '400px'}}>loading...</div>
    }
  }
}