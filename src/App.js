import './App.css';
import React, { useState, useEffect } from 'react';
// import * as YTSearchAction from './actions/yt_search_action'
import VideoList from './components/videoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/videoDetail';
import {Container, Row, Col } from 'react-bootstrap/';
import SearchBar from './components/searchBar';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchResource("nothing, nowhere.");
  }, []);
 
  const fetchResource = async (item) => {
    await YTSearch({key: API_KEY, term: item}, (data) => {
      setVideos(data);
      setSelectedVideo(data[0])
    });
  }

  
  return (
      <Container fluid>
            <h2>Youtube Hooks API Project</h2>
            <h5>Brandon Magofna</h5>
            <SearchBar onSearchTermChange={term => fetchResource(term)} />
            <Row className="justify-content-md-center">
                <VideoDetail video={selectedVideo} />
              <Col xs={4} md={4}>
                <VideoList 
                  onVideoSelect={selected => setSelectedVideo(selected)}
                  videos={videos} 
                />
              </Col>
            </Row>
      </Container>
    )
    
  }
export default App;
