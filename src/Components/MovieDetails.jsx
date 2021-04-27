import React, { Component } from 'react';

class MovieDetails extends Component {
    state = {
        movie:null

    }
    componentDidMount() {
        fetch ("http://www.omdbapi.com/?apikey=80be0124&i="+ this.props.match.params.movieId)
        .then(response => response.json())
        .then(response =>{ 
        this.setState({movie:response});
        })
    }
    render() {
        return (
            this.state.movie && 
           <>
             <div className={'container-fluid'}>
            </div>
            <div>
            
            <img src={this.state.movie.Poster}></img>
            </div>
            <div className={'container-flex col-5'}>

           
            
            </div>
            </>
        );
    }
}

export default MovieDetails;