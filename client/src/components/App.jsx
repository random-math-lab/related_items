import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import RelatedListings from './relatedListings.jsx'

const TitleDiv = styled.div`
   {
    display: flex;
    position: relative;
    width: 74%;
    margin: auto;
    white-space: nowrap;
  }
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentListing: [],
            currentIndex: 0,
            translateValue: 0,
            start: 0,
            finish: 3
        }
    }



    componentDidMount() {
        this.getData();
    }



    getData() {
        axios('/api/relatedPlaces/1')
        .then( (res) => res.data )
        .then( (places) => this.setState({currentListing : places}) )
        // fetch('/api/relatedPlaces/1')    
        // .then( (data) =>  (data.json()) )
        // .then( (message) => JSON.stringify(message) )
        // .then( (string) => JSON.parse(string) )
        // .then( (output) => this.setState( {currentListing: output} ) )
    }
    

    render() {
        if(this.state.currentListing.length) {
            return (
                <div>
                    <TitleDiv>MORE PLACES TO STAY</TitleDiv>
                    <RelatedListings listings={this.state.currentListing} pos={this.state.currentIndex}/>
                </div>
            )
        }
        return (

            <div>
            </div>
        )
    }

}


export default App;