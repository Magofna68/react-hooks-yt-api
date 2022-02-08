import './App.css';
import React, { useState, useEffect } from 'react';
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
            <h2
              styles={{color: "#b0bbbf",
              }}><span id="title">You</span>tube H<span className="whiteText">oo</span>k<span className="apiHeader">:</span> API <span>Pro</span><span className='apiHeader'>ject</span></h2>
            <h5
            style={{
              color: "gold",
              paddingTop: "5px"
            }}>Brandon Magofna</h5>
            <label 
              htmlFor="searchbar"
              style={{
                marginLeft: "13.5%",
                color: "silver",
                marginBottom: "-1%",
                marginTop: "5%",
                paddingBottom: "0px",
                fontSize: "smaller",
                position: "sticky",
              }}>
              Search Youtube...
            </label>
            <SearchBar onSearchTermChange={term => fetchResource(term)} />
            <Row className="justify-content-md-center">
              <Col md={8}>
                <VideoDetail video={selectedVideo} />
              </Col>
              <Col xs={3}>
              {/* <Col lg={true} md={true} xs={3}> */}
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
