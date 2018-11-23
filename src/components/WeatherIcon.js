import w01d from '../images/weather-icons/01d.svg';
import w01n from '../images/weather-icons/01n.svg';
import w02d from '../images/weather-icons/02d.svg';
import w02n from '../images/weather-icons/02n.svg';
import w03d from '../images/weather-icons/03d.svg';
import w03n from '../images/weather-icons/03n.svg';
import w04d from '../images/weather-icons/04d.svg';
import w04n from '../images/weather-icons/04n.svg';
import w09d from '../images/weather-icons/09d.svg';
import w09n from '../images/weather-icons/09n.svg';
import w10d from '../images/weather-icons/10d.svg';
import w10n from '../images/weather-icons/10n.svg';
import w11d from '../images/weather-icons/11d.svg';
import w11n from '../images/weather-icons/11n.svg';
import w13d from '../images/weather-icons/13d.svg';
import w13n from '../images/weather-icons/13n.svg';
import w50d from '../images/weather-icons/50d.svg';
import w50n from '../images/weather-icons/50n.svg';

import React from 'react';


class WeatherIcon extends React.Component {

  render () {
      const ikon = this.props.ikon;

      switch(ikon) {
          case '01d':
              return <img height="42" width="42" src={w01d} alt='Weather' />;
          case '01n':
              return <img height="42" width="42" src={w01n} alt='Weather' />;
          case '02d':
              return <img height="42" width="42" src={w02d} alt='Weather' />;
          case '02n':
              return <img height="42" width="42" src={w02n} alt='Weather' />;
          case '03d':
              return <img height="42" width="42" src={w03d} alt='Weather' />;
          case '03n':
              return <img height="42" width="42" src={w03n} alt='Weather' />;
          case '04d':
              return <img height="42" width="42" src={w04d} alt='Weather' />;
          case '04n':
              return <img height="42" width="42" src={w04n} alt='Weather' />;
          case '09d':
              return <img height="42" width="42" src={w09d} alt='Weather' />;
          case '09n':
              return <img height="42" width="42" src={w09n} alt='Weather' />;
          case '10d':
              return <img height="42" width="42" src={w10d} alt='Weather' />;
          case '10n':
              return <img height="42" width="42" src={w10n} alt='Weather' />;
          case '11d':
              return <img height="42" width="42" src={w11d} alt='Weather' />;
          case '11n':
              return <img height="42" width="42" src={w11n} alt='Weather' />;
          case '13d':
              return <img height="42" width="42" src={w13d} alt='Weather' />;
          case '13n':
              return <img height="42" width="42" src={w13n} alt='Weather' />;
          case '50d':
              return <img height="42" width="42" src={w50d} alt='Weather' />;
          case '50n':
              return <img height="42" width="42" src={w50n} alt='Weather' />;
          default:
              return <div>X</div>
      }
  }
}

export default WeatherIcon;