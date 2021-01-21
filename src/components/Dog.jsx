import React from 'react';

class Dog extends React.Component {

  constructor() {
    super();
    this.state({
      imageDog: '',
      isLoaded: false,
    });
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(result => result.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          imageDog: result.message,
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error,
        });
      })
  }

  render () {
    const { imageDog, isLoaded, error } = this.state;
    if (error) {
      return <div>Error: { error }</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <img src={imageDog} alt="Random Dog" />
        </div>
      )
    }
  }
}

export default Dog;
