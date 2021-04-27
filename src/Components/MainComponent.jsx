import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import GallaryComponent from './GallaryComponent';

import { Container, Row , } from "reactstrap"


class MainComponent extends Component {
    state = {
        
        selectedmovie: undefined
        
      }

      selectedmovie = (movie) =>{
        this.setState({
            selectedmovie: movie
        })
      }
    render() {
        return (
            <Container >
              <Row>
                <NavbarComponent/>
                <GallaryComponent filter={this.state.search} onmovieSelected={this.selectmovie}></GallaryComponent>
               </Row>
            
             </Container>
        );
    }
}

export default MainComponent;