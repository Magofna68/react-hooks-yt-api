import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/';


const VideoDetail = (props) => {
  const video = props.video;

  if (!video) {
    return <div style={{ 
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignContent: 'center', 
      width: '75%', 
      margin: 'auto',
      marginBottom: '15%',
      marginTop: '15%'}}>
        Sorry, i've reached my API limit. <br/>Check back later to get a firsthand look at my site!
      <br/>
      <span style={{ display: 'flex', justifyContent: 'center', marginTop: '15%'}}>
        <img 
          src="http://clipart-library.com/images/qTBoabBEc.gif" 
          alt="Crying emoji" 
          width="40%" 
          style={{ borderRadius: '50%'}} 
        />
      </span>
    </div>;

  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (

    <Container fluid>
      <Row>
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe  allowfullscreen frameborder="0" title="videoPlayer" className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className='videDetails'>
            <br/>
            <h3>{video.snippet.title}</h3>
            <p><strong>{video.snippet.channelTitle}</strong></p>
            <div className='video-description'>{video.snippet.description}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoDetail;