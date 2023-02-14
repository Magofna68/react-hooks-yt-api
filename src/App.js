import './App.css';
import React, { useState, useEffect } from 'react';
import VideoList from './components/videoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/videoDetail';
import {Container, Row, Col } from 'react-bootstrap/';
import SearchBar from './components/searchBar';
import { Typography } from '@mui/material';
// import { useDeferredValue } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  // const deferredVideo = useDeferredValue(videos);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchResource("nothing, nowhere.");
  }, []);
 
  const fetchResource = async (item) => {
    // const deferredInput = useDeferredValue(item)
    await YTSearch({key: API_KEY, term: item}, (data) => {
      setVideos(data);
      setSelectedVideo(data[0])
    });
  }

  // useDeferredValue rather than setTimeout?

  // const fetchResource = async (item) => {
  //   // const deferredInput = useDeferredValue(item)
  //   setTimeout(() => {
  //     console.log("=====>", item)
  //     YTSearch({key: API_KEY, term: item}, (data) => {
  //       setVideos(data);
  //       setSelectedVideo(data[0])
  //     });
  //   }, 1000)
  // }

  
  return (
      <Container fluid>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              color: 'rgb(255,0,0,0%)',
              WebkitTextStroke: '0.75px white',
              backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47zbhpb5zeke5g3jq2xj9cn3tyvowjgqfecz0hxlif&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,0,0,50%)',
                WebkitTextStroke: '0.5px red',
                cursor: 'arrow',
              }
            }}
          >
            YouTube
          </Typography>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 'bold',
              color: 'rgb(255,0,0,0%)',
              WebkitTextStroke: '0.75px white',
              backgroundImage: `url('https://media2.giphy.com/media/IV1oQSR67yUbfklywp/giphy.gif?cid=ecf05e47avt6nsrg7usd5wusqckkd4t6ddczbzbr9ikalpko&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,0,0,50%)',
                WebkitTextStroke: '0.5px red',
                cursor: 'arrow',
              }
            }}
          >
            Project
          </Typography>
        <span style={{ color: "gray", fontSize: '14px'}}>
          Brandon Magofna
        </span>
        </div>

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
          <Col md={12}>
            <VideoDetail video={selectedVideo} />
          </Col>
          <Col xs={3}>
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
