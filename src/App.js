import './App.css';
import React, {Component} from 'react';
// import * as YTSearchAction from './actions/yt_search_action'
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';
import {Container, Row, Col } from 'react-bootstrap/';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
    this.videoSearch('nothing,nowhere.');
  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      console.log(data);
      this.setState({
        videos: data,

      })
    })
  }
  render () {
    return (
      <Container fluid>
        {/* <div> */}
            <h2>Youtube API Project</h2>
            <h5>Brandon Magofna</h5>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
            <Row className="justify-content-md-center">
              {/* <Col xs={8} md={8}>
                <VideoDetail video={this.state.selectedVideo} />
              </Col> */}
              <Col xs={4} md={4}>
                <VideoList 
                  onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
                  videos={this.state.videos} 
                />
              </Col>
            </Row>
        {/* </div> */}
      </Container>
    )
  };
};

export default App;
