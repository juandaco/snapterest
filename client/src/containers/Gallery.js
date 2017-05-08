import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Masonry from 'react-masonry-component';

// var masonryOptions = {
//   transitionDuration: 0,
// };

class Gallery extends Component {
  componentDidMount() {}

  render() {
  
    /*const childElements = this.props.elements.map(function(element) {
      return (
        <li className="image-element-class">
          <img src={element.src} />
        </li>
      );
    });*/
    return (
      <div className="grid-container">
        {/*<Masonry
          className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {childElements}
        </Masonry>*/}
      </div>
    );
  }
}

export default connect(null)(Gallery);
