import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class SnapCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageError: false,
    };
  }

  handleImageError = () => {
    this.setState({
      imageError: true,
    });
  }

  render() {
    const {
      picture,
      liked,
      owned,
      likePicture,
      unlikePicture,
      removePicture,
    } = this.props;

    const userLink = owned
      ? '/mysnaps'
      : `/user/${picture.created_by.username}`;

    return (
      <div className="snap-card">
        <Image
          src={!this.state.imageError ? picture.url : '/logos/camera_logo.svg'}
          width="300px"
          rounded
          onError={this.handleImageError}
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
              ? <i
                  className="fa fa-star"
                  aria-hidden="true"
                  onClick={() => unlikePicture(picture._id)}
                />
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
  }
}

export default SnapCard;
