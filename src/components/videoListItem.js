import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const alt = video.snippet.thumbnails.title;
  return (
    // onClick gets passed to VideoList component as callback function
    <li onClick={() => onUserSelected(video)} className='list-group-item'>
      <div className='video-list-item media'>
        <div className='item-left'>
          <img className='media-object' src={imageUrl} alt={alt}></img>
        </div>
        <div className='item-right'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;