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

    <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.channelTitle}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>

    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <div className="embed-responsive embed-responsive-16by9">
    //         <iframe title="videoPlayer" className="embed-responsive-item" src={url}></iframe>
    //       </div>
    //       <div className='videDetails'>
    //         <br/>
    //         <h3>{video.snippet.title}</h3>
    //         <p>{video.snippet.channelTitle}</p>
    //         <div className='video-description'>{video.snippet.description}</div>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default VideoDetail;