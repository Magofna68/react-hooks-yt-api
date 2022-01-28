import './App.css';
import React, { useState, useEffect } from 'react';
// import * as YTSearchAction from './actions/yt_search_action'
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';
import {Container, Row, Col } from 'react-bootstrap/';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchResource('nothing, nowhere.');
  }, []);
 
  const fetchResource = async (item) => {
    YTSearch({key: API_KEY, term: item}, (data) => {
      setVideos(data)
    });
  }

  }

    return (
      <Container fluid>
        {/* <div> */}
            <h2>Youtube Hooks API Project</h2>
            <h5>Brandon Magofna</h5>
            {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
            <Row className="justify-content-md-center">
              {/* <Col xs={8} md={8}>
                <VideoDetail video={this.state.selectedVideo} />
              </Col> */}
              <Col xs={4} md={4}>
                <VideoList 
                  // onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
                  videos={videos} 
                />
              </Col>
            </Row>
        {/* </div> */}
      </Container>
    )

export default App;
