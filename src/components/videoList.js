import React from 'react';
import VideoListItem from './videoListItem';
import {Container, Row, ListGroup } from 'react-bootstrap/';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        key={video.etag} 
        video={video}
        onUserSelected={props.onVideoSelect}
      />
    )
  })
  return (

    <Container fluid="sm" className='video-list'> 
       <ul className='col-md-4 list-group'>
          {videoItems}
        </ul> 
    </Container>
  )
}

export default VideoList;