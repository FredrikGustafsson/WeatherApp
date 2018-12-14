import connect from "react-redux/es/connect/connect";
import WeatherIcon from './WeatherIcon';
import utils from '../utils/helpers';
import React from 'react';
import api from '../utils/api';

const getDate = utils.getDate;


class WeatherAtPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: [],
            loading: true,
            error: false,
        };
        this.makeRequest = this.makeRequest.bind(this);
        this.failureCallback = this.failureCallback.bind(this);

    }

    componentDidMount() {
        this.makeRequest(this.props.location);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location !== nextProps.location) {
            this.makeRequest(nextProps.location);
        }
    }

    makeRequest(city) {
        if (city === "") {
            return;
        }
        this.setState(() => {
            return {loading: true};
        });

        api.getForecast(city)
            .then(function (res) {
                this.setState(() => {
                    return {
                        loading: false,
                        forecastData: res,
                        error: false,
                    }
                })
            }.bind(this))
            .catch(e => this.failureCallback(e))
    }

    failureCallback(e) {
        this.setState(() => {
            return {
                error: true,
            }
        });
        return console.log("Critical failure: " + e.message);
    }

    render() {
        if (this.props.location === null || this.props.location === "") {
            return <div></div>
        }

        if (this.state.error === true) {
            return <div> There was an error, please try again </div>
        }

        if (this.state.loading === true) {
            return <div> Loading </div>
        }

        return (
            <div>
                <div className='zipcode-container'>
                    <b>Weather data
                        for: </b> {this.state.forecastData.city.name}, {this.state.forecastData.city.country} <br/>
                </div>
                <div className='flex-container'>
                    {this.state.forecastData.list.map(function (listItem) {
                        return (
                            <div className='flex-item' key={listItem.dt}>
                                <div><b>{getDate(listItem.dt)}</b></div>
                                {listItem.rain ? <div>{listItem.rain} mm</div> : <br/>}
                                <div>{listItem.temp.day}&#8451;</div>
                                <WeatherIcon ikon={listItem.weather[0].icon}/>
                            </div>
                        )
                    }, this)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    location: state.location
});

export default connect(
    mapStateToProps,
    []
)(WeatherAtPlace);