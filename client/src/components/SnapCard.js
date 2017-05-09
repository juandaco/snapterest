import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const SnapCard = ({ picture, liked, owned, likePicture, removePicture }) => {
  // const min = 200;
  // const max = 370;
  // const rndWidth = Math.round(min + Math.random() * (max - min));
  const rndWidth = 300;
  const userLink = `/user/${picture.created_by.username}`;
  return (
    <div className="snap-card">
      <Image
        src={picture.url}
        width={rndWidth}
        rounded
        alt={picture.description}
      />
      <div className="snap-description">{picture.description}</div>
      <div className="snap-avatar">
        <Link to={userLink}>
          <Image src={picture.created_by.profilePicture} circle />
        </Link>
        <Link to={userLink}>
          <p>{'@' + picture.created_by.username}</p>
        </Link>
      </div>
      <div className="snap-icons">
        <div className="snap-likes">
          {liked
            ? <i className="fa fa-star" aria-hidden="true" />
            : <i
                className="fa fa-star-o"
                aria-hidden="true"
                onClick={() => likePicture(picture._id)}
              />}
          {' '}
          <span>{picture.likes}</span>
        </div>
        {owned
          ? <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => removePicture(picture._id)}
            />
          : null}
      </div>
    </div>
  );
};

export default SnapCard;
