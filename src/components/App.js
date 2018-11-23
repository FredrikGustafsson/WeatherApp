import { connect } from 'react-redux';
import { setLocation } from '../actions/index';
import WeatherAtPlace from './WeatherAtPlace';
import Background from '../images/blueBackground.jpg';
import React from 'react';

const sectionStyle = {
    width: "100%",
    height: "900px",
    backgroundImage: `url(${Background})`
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: "",
            tempPlace: ""
        };

        this.handleUpdatePlace = this.handleUpdatePlace.bind(this);
        this.handleSubmitPlace = this.handleSubmitPlace.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdatePlace (e) {
        const place = e.target.value;
        this.setState(() => {
            return {
                tempPlace: place
            }
        });
    }

    handleSubmitPlace() {
        this.props.toggleLocation(this.state.tempPlace);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleSubmitPlace();
        
      }

  render () {
    return (
      <div className='home-container' style={sectionStyle}>
        <form onSubmit={this.handleSubmit}>
        <div className='zipcode-container'>    
            <input
                    type='text'
                    value={this.state.tempPlace}
                    onChange={this.handleUpdatePlace}
            />
        </div>
        </form>
        <button
                    type='button'
                    onClick={this.handleSubmitPlace}>
                    Get Weather
        </button>    
        <WeatherAtPlace>
        </WeatherAtPlace>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    location: state.location
  });

const mapDispatchToProps = dispatch => ({
    toggleLocation: location => dispatch(setLocation(location))
  });


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);