import React, { Component } from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import axios from "axios";

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photosList: []
    };
  }

  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchPhotos();
    }
  }

  fetchPhotos() {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${
        this.props.match.params.id
      }/photos`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          photosList: json
        });
      });
  }

  render() {
    const { photosList } = this.state;
    return (
      <div className="list list-album">
        <h2>
          <span>{this.props.location.state.title}</span>
        </h2>
        {photosList.map((item, index) => {
          return <img key={index} src={item.url} alt={item.title} />;
        })}
      </div>
    );
  }
}
