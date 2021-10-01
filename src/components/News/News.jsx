import React, { Component } from "react";
import httClient from '../../axios_client';
import ListNews from '../ListNews'
import Card from '../Card'
import { Button, Form } from 'react-bootstrap';


class News extends Component {

  constructor(props){
    super(props)

    this.state = {
      news:[]
    }
  }

  getNews = () => {
    httClient.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=tJTlgHe561KfAsr8b86nOD9IQ1Lg8ajc')
    .then((response) => {
      console.log(response)
      // this.setState({
      //   news: [...response.data]
      // })
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {

    return <div className="Home">
      <button onClick={this.getNews}>Busca</button>
    </div>;
  }
}

export default News;
