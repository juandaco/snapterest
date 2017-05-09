import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import SnapCard from '../components/SnapCard';
import {
  sendRemovePicture,
  sendLikePicture,
  sendUnlikePicture,
} from '../actions/pictures';

const masonryOptions = {
  transitionDuration: 300,
};

const Gallery = ({
  user,
  path,
  isFetching,
  pictures,
  liked,
  userPics,
  likePicture,
  unlikePicture,
  removePicture,
}) => {
  let title = '';

  let picCards = pictures
    .filter(pic => {
      if (path === '/mysnaps') {
        title = 'My Snaps';
        return pic.created_by.username === user;
      } else if (/^\/user/.test(path)) {
        const userSnap = path.substring(6, path.length);
        title = `@${userSnap} Wall`;
        return pic.created_by.username === userSnap;
      } else {
        title = 'All';
        return pic;
      }
    })
    .map(pic => {
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
      <h2 id="wall-title">{title}</h2>
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
    user: state.user.username,
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
