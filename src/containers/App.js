import React, { Component } from 'react';
import './App.css';
import AppName from '../components/AppName';
import Buttons from '../components/Buttons';
import Results from '../components/Results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.showClickedButton = this.showClickedButton.bind(this);
  }

  handleClick(event) {
    this.showClickedButton(event);

    let clickedButton = event.target;
    let url;
    let dataObj;
    let singleResultsArr = [];
    
    let URLS = [
      {'films': 'https://swapi.co/api/films/'}, 
      {'people': 'https://swapi.co/api/people/'}, 
      {'planets': 'https://swapi.co/api/planets/'}, 
      {'species': 'https://swapi.co/api/species/'}, 
      {'starships': 'https://swapi.co/api/starships/'}, 
      {'vehicles': 'https://swapi.co/api/vehicles/'}
    ];

    URLS.forEach(obj => {
      Object.keys(obj).forEach(val => {
        if (clickedButton.id === val) {
          url = obj[val];
        }
      });
    });
    
    fetch(url)
      .then(response => response.json())
      .then(response => {
        dataObj = response.results;

      dataObj.forEach(obj => {
        Object.keys(obj).forEach((val, ind) => {
          if (clickedButton.id === 'films') {
            let title = `title: ${obj['title']}`;
            let openingCrawl = `opening crawl: ${obj['opening_crawl']}`;
            let director = `director: ${obj['director']}`;
            let producer = `producer: ${obj['producer']}`;
            let releaseDate = `release date: ${obj['release_date']}`;

            if (ind === 13) {
              singleResultsArr.push([title, openingCrawl, director, producer, releaseDate]);
            }
          } else if (clickedButton.id === 'people') {
            let name = `name: ${obj['name']}`;
            let gender = `gender: ${obj['gender']}`;
            let birthYear = `birth year: ${obj['birth_year']}`;
            let skinColor = `skin color: ${obj['skin_color']}`;
            let hairColor = `hair color: ${obj['hair_color']}`;
            let eyeColor = `eye color: ${obj['eye_color']}`;
            let height = `height: ${obj['height']}`;

            if (ind === 15) {
              singleResultsArr.push([name, gender, birthYear, skinColor, hairColor, eyeColor, height]);
            }
          } else if (clickedButton.id === 'planets') {
            let name = `name: ${obj['name']}`;
            let climate = `climate: ${obj['climate']}`;
            let diameter = `diameter: ${obj['diameter']}`;
            let gravity = `gravity: ${obj['gravity']}`;
            let orbitalPeriod = `orbital period: ${obj['orbital_period']}`;
            let rotationPeriod = `rotation period: ${obj['rotation_period']}`;
            let surfaceWater = `surface water: ${obj['surface_water']}`;
            let terrain = `terrain: ${obj['terrain']}`;
            let population = `population: ${obj['population']}`;

            if (ind === 13) {
              singleResultsArr.push([name, climate, diameter, gravity, orbitalPeriod, rotationPeriod, surfaceWater, terrain, population]);
            }
          } else if (clickedButton.id === 'species') {
            let name = `name: ${obj['name']}`;
            let averageLifespan = `average lifespan: ${obj['average_lifespan']}`;
            let classification = `classification: ${obj['classification']}`;
            let designation = `designation: ${obj['designation']}`;
            let language = `language: ${obj['language']}`;
            let skinColors = `skin colors: ${obj['skin_colors']}`;
            let hairColors = `hair colors: ${obj['hair_colors']}`;
            let eyeColors = `eye colors: ${obj['eye_colors']}`;
            let averageHeight = `average height: ${obj['average_height']}`;

            if (ind === 14) {
              singleResultsArr.push([name, averageLifespan, classification, designation, language, skinColors, hairColors, eyeColors, averageHeight]);
            }
          } else if (clickedButton.id === 'starships') {
            let name = `name: ${obj['name']}`;
            let starshipClass = `starship class: ${obj['starship_class']}`;
            let model = `model: ${obj['model']}`;
            let cargoCapacity = `cargo capacity: ${obj['cargo_capacity']}`;
            let consumables = `consumables: ${obj['consumables']}`;
            let crew = `crew: ${obj['crew']}`;
            let hyperdriveRating = `hyperdrive rating: ${obj['hyperdrive_rating']}`;
            let length = `length: ${obj['length']}`;
            let manufacturer = `manufacturer: ${obj['manufacturer']}`;
            let maxAtmospheringSpeed = `max atmosphering speed: ${obj['max_atmosphering_speed']}`;
            let passengers = `passengers: ${obj['passengers']}`;

            if (ind === 17) {
              singleResultsArr.push([name, starshipClass, model, cargoCapacity, consumables, crew, hyperdriveRating, length, manufacturer, maxAtmospheringSpeed, passengers]);
            }
          } else if (clickedButton.id === 'vehicles') {
            let name = `name: ${obj['name']}`;
            let vehicleClass = `vehicle class: ${obj['vehicle_class']}`;
            let model = `model: ${obj['model']}`;
            let cargoCapacity = `cargo capacity: ${obj['cargo_capacity']}`;
            let consumables = `consumables: ${obj['consumables']}`;
            let crew = `crew: ${obj['crew']}`;
            let length = `length: ${obj['length']}`;
            let manufacturer = `manufacturer: ${obj['manufacturer']}`;
            let maxAtmospheringSpeed = `max atmosphering speed: ${obj['max_atmosphering_speed']}`;
            let passengers = `passengers: ${obj['passengers']}`;

            if (ind === 15) {
              singleResultsArr.push([name, vehicleClass, model, cargoCapacity, consumables, crew, length, manufacturer, maxAtmospheringSpeed, passengers]);
            }
          }
        });
      });

      this.setState({
        results: singleResultsArr
      });
    });
  }

  showClickedButton(event) {
    let clickedButton = event.target;

    if (clickedButton.className === '') {
      clickedButton.classList.add('button-clicked');
      setTimeout(function() {
        clickedButton.classList.remove('button-clicked');
      }, 1300);
    }
  }

  render() {
    return (
      <div className='app'>
        <AppName />
        <Buttons handleClick={this.handleClick} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
