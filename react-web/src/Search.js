import React, { Component } from 'react'

class Search extends Component {

  state={
    breeds:[],
    search: null
  }

  onChange = (event) => {
    this.setState({search: event.target.value})    
  }
  componentDidMount = () => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response=>response.json())
    .then(data=>{
      
      this.setState({breeds: Object.keys(data.message)})})
  }

  render() {

    const filteredBreeds = this.state.breeds.filter(breed=>{return breed.includes(this.state.search)})
      
    return (
      <div>
        <input type="text" placeholder="Search dog breeds" onChange={this.onChange}></input>
        <input type="submit"></input>
        <ul>{filteredBreeds.map(b=>{return <li onClick={()=>this.props.getBreed(b)}>{b}</li>})}</ul>
      </div>
    )
  }
}

export default Search
