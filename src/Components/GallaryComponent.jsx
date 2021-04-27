import React, { Component } from 'react';
import { Container, Row,  Col ,Input } from 'reactstrap';
import MovieComponent from './MovieComponent';


class GallaryComponent extends Component {
    state = {
        search: "",
        selectedmovie: undefined,
        movies: [], 
        watching: [],
        releasing:[]
    }


    componentDidMount = async () => {
        
        let response2 = await fetch("http://www.omdbapi.com/?apikey=80be0124&s=terminator")

        let watching = await response2.json();

        this.setState({ watching: watching.Search });
        console.log(watching);
        

        let response3 = await fetch("http://www.omdbapi.com/?apikey=80be0124&s=sister%20act")

        let releasing = await response3.json();
        this.setState({ releasing: releasing.Search });
        console.log(releasing);
        
    }


    render() {
       
        const watchingNow = this.state.watching.map(movie => {
            return (
                <MovieComponent movie={movie}></MovieComponent>
            )});

        const releasingNow = this.state.releasing.map(movie => {
            return (
                <MovieComponent movie={movie}></MovieComponent>
                )
        });

        const filteredWMovies = this.state.watching.filter(movie => movie.Title.toLowerCase().includes(this.state.search.toLowerCase()))
        console.log(filteredWMovies);
        const filteredRMovies = this.state.releasing.filter(movie => movie.Title.toLowerCase().includes(this.state.search.toLowerCase()))
        console.log(filteredRMovies);
        // let filteredTrending = null;
        let filteredWatching = null;
        let filteredReleasing = null; 

    if(filteredWMovies){
        filteredWatching = filteredWMovies.map(movie => {
            return (
                
                <MovieComponent movie={movie}></MovieComponent>
                  )
        });
    }
    
    if(filteredRMovies){
        filteredReleasing = filteredRMovies.map(movie => {
            return (
                
                <MovieComponent movie={movie}></MovieComponent>
                )
        });

    }


        return (
            <Col md={9}>

         
                {/* <Container> */}
                <Input type="text" value={this.state.search} onChange={(val) => this.setState({ search: val.target.value.toLowerCase() })} placeholder="Type in to search"></Input>
                
                <hr></hr>
                <h5>JUST ARRIVED</h5>
                <Row>
                        {filteredWatching? filteredWatching : watchingNow}
                
                </Row>

                <hr></hr>
                <h6>FRESH CUTS</h6>
                <Row>
                    
                        {filteredReleasing? filteredReleasing : releasingNow}
                    
                </Row>
            {/* </Container> */}
            </Col>            

        )
    }
}
export default GallaryComponent;