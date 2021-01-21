import React from 'react';

class Dog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageDog: '',
      isLoaded: false,
      error: null,
    };
    this.loadDogImage = this.loadDogImage.bind(this);
    this.changeImage = this.changeImage.bind(this);
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

  loadDogImage() {
    const { imageDog, isLoaded, error } = this.state;
    if (error) {
      return <div>Error: { error }</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <img src={imageDog} alt="Random Dog" />
          <button type="button" onClick={ this.changeImage }>Mais Dogs</button>
        </div>
      )
    }
  }

  changeImage() {
    this.setState({
      isLoaded: false,
    });
  }

  render () {
    return(
      <div>
        { this.loadDogImage() }
      </div>
    );
  }
}

export default Dog;
