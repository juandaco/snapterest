import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import SnapCard from '../components/SnapCard';
import {
  sendRemovePicture,
  sendLikePicture,
  sendUnlikePicture,
} from '../actions/pictures';

var masonryOptions = {
  transitionDuration: 1,
};

const Gallery = ({
  isFetching,
  pictures,
  liked,
  userPics,
  likePicture,
  unlikePicture,
  removePicture,
}) => {
  const picCards = pictures.map(pic => {
    const owned = userPics.includes(pic._id);
    const userLiked = liked.includes(pic._id);
    return (
      <SnapCard
        key={pic._id}
        picture={pic}
        liked={userLiked}
        owned={owned}
        likePicture={likePicture}
        unlikePicture={unlikePicture}
        removePicture={removePicture}
      />
    );
  });
  return (
    <div className="gallery-container">
      {isFetching
        ? <i id="loading-cog" className="fa fa-cog fa-spin fa-5x fa-fw" />
        : null}
      <Masonry
        className="masonry-container"
        options={masonryOptions}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
      >
        {picCards}
      </Masonry>
    </div>
  );
};

export default connect(
  (state = { isFetching: true, items: [] }) => ({
    isFetching: state.pictures.isFetching,
    pictures: state.pictures.items,
    liked: state.user.liked,
    userPics: state.user.pictures,
  }),
  dispatch => ({
    removePicture(picture) {
      dispatch(sendRemovePicture(picture));
    },
    likePicture(pictureID) {
      dispatch(sendLikePicture(pictureID));
    },
    unlikePicture(pictureID) {
      dispatch(sendUnlikePicture(pictureID));
    },
  }),
)(Gallery);
