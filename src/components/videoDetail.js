import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';
// import PropTypes from 'prop-types';


const VideoDetail = (props) => {
  const video = props.video;
  if (!video) {
    return <div>Loading videos...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    // <div className='video-detail col-lg-6'>
    <Container fluid>
      <Row>
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videoPlayer" className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className='videDetails'>
            <br/>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.channelTitle}</p>
            <div className='video-description'>{video.snippet.description}</div>
          </div>
        </Col>
      </Row>
    </Container>
      // </div>
  )
}

export default VideoDetail;