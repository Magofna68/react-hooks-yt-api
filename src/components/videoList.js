import React from 'react';
import VideoListItem from './videoListItem';
import {Container, Col} from 'react-bootstrap/';

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

    <Container fluid="true" className='video-list'>
       <ul className='list-group'>
          {videoItems}
        </ul> 
    </Container>
  )
}

export default VideoList;