import React, { Component } from 'react';
import './App.css';
import Buttons from '../components/Buttons';
import Results from '../components/Results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [], 
      requestNames: ['films', 'people', 'planets', 'species', 'starships', 'vehicles']
    }

    this.handleClick = this.handleClick.bind(this);
    this.showClickedButton = this.showClickedButton.bind(this);
    this.changeAppNameSize = this.changeAppNameSize.bind(this);
  }

  handleClick(event) {
    const clickedButton = event.target;
    let url;
    let dataObj;
    let resultsArr = [];

    this.showClickedButton(event);

    const URLS = [
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
            const title = `title: ${obj['title']}`;
            const openingCrawl = `opening crawl: ${obj['opening_crawl']}`;
            const director = `director: ${obj['director']}`;
            const producer = `producer: ${obj['producer']}`;
            const releaseDate = `release date: ${obj['release_date']}`;

            if (ind === 13) {
              resultsArr.push([title, openingCrawl, director, producer, releaseDate]);
            }
          } else if (clickedButton.id === 'people') {
            const name = `name: ${obj['name']}`;
            const gender = `gender: ${obj['gender']}`;
            const birthYear = `birth year: ${obj['birth_year']}`;
            const skinColor = `skin color: ${obj['skin_color']}`;
            const hairColor = `hair color: ${obj['hair_color']}`;
            const eyeColor = `eye color: ${obj['eye_color']}`;
            const height = `height: ${obj['height']}`;

            if (ind === 15) {
              resultsArr.push([name, gender, birthYear, skinColor, hairColor, eyeColor, height]);
            }
          } else if (clickedButton.id === 'planets') {
            const name = `name: ${obj['name']}`;
            const climate = `climate: ${obj['climate']}`;
            const diameter = `diameter: ${obj['diameter']}`;
            const gravity = `gravity: ${obj['gravity']}`;
            const orbitalPeriod = `orbital period: ${obj['orbital_period']}`;
            const rotationPeriod = `rotation period: ${obj['rotation_period']}`;
            const surfaceWater = `surface water: ${obj['surface_water']}`;
            const terrain = `terrain: ${obj['terrain']}`;
            const population = `population: ${obj['population']}`;

            if (ind === 13) {
              resultsArr.push([name, climate, diameter, gravity, orbitalPeriod, rotationPeriod, surfaceWater, terrain, population]);
            }
          } else if (clickedButton.id === 'species') {
            const name = `name: ${obj['name']}`;
            const averageLifespan = `average lifespan: ${obj['average_lifespan']}`;
            const classification = `classification: ${obj['classification']}`;
            const designation = `designation: ${obj['designation']}`;
            const language = `language: ${obj['language']}`;
            const skinColors = `skin colors: ${obj['skin_colors']}`;
            const hairColors = `hair colors: ${obj['hair_colors']}`;
            const eyeColors = `eye colors: ${obj['eye_colors']}`;
            const averageHeight = `average height: ${obj['average_height']}`;

            if (ind === 14) {
              resultsArr.push([name, averageLifespan, classification, designation, language, skinColors, hairColors, eyeColors, averageHeight]);
            }
          } else if (clickedButton.id === 'starships') {
            const name = `name: ${obj['name']}`;
            const starshipClass = `starship class: ${obj['starship_class']}`;
            const model = `model: ${obj['model']}`;
            const cargoCapacity = `cargo capacity: ${obj['cargo_capacity']}`;
            const consumables = `consumables: ${obj['consumables']}`;
            const crew = `crew: ${obj['crew']}`;
            const hyperdriveRating = `hyperdrive rating: ${obj['hyperdrive_rating']}`;
            const length = `length: ${obj['length']}`;
            const manufacturer = `manufacturer: ${obj['manufacturer']}`;
            const maxAtmospheringSpeed = `max atmosphering speed: ${obj['max_atmosphering_speed']}`;
            const passengers = `passengers: ${obj['passengers']}`;

            if (ind === 17) {
              resultsArr.push([name, starshipClass, model, cargoCapacity, consumables, crew, hyperdriveRating, length, manufacturer, maxAtmospheringSpeed, passengers]);
            }
          } else if (clickedButton.id === 'vehicles') {
            const name = `name: ${obj['name']}`;
            const vehicleClass = `vehicle class: ${obj['vehicle_class']}`;
            const model = `model: ${obj['model']}`;
            const cargoCapacity = `cargo capacity: ${obj['cargo_capacity']}`;
            const consumables = `consumables: ${obj['consumables']}`;
            const crew = `crew: ${obj['crew']}`;
            const length = `length: ${obj['length']}`;
            const manufacturer = `manufacturer: ${obj['manufacturer']}`;
            const maxAtmospheringSpeed = `max atmosphering speed: ${obj['max_atmosphering_speed']}`;
            const passengers = `passengers: ${obj['passengers']}`;

            if (ind === 15) {
              resultsArr.push([name, vehicleClass, model, cargoCapacity, consumables, crew, length, manufacturer, maxAtmospheringSpeed, passengers]);
            }
          }
        });
      });

      this.setState({
        results: resultsArr
      });
    });
  }

  showClickedButton(event) {
    const clickedButton = event.target;

    if (clickedButton.className === '') {
      clickedButton.classList.add('button-clicked');
      setTimeout(function() {
        clickedButton.classList.remove('button-clicked');
      }, 1300);
    }
  }

  changeAppNameSize() {
    const appName = document.querySelector('.app-name');

    if (window.innerWidth < 641) {
      appName.innerHTML = 'The<br />Star Wars<br />App';
    } else {
      appName.innerHTML = 'The Star Wars App';
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.changeAppNameSize);
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app-name'>The Star Wars App</h1>
        <Buttons requestNames={this.state.requestNames} handleClick={this.handleClick} />
        <Results results={this.state.results.sort((a, b) => {
          let aVal = Number(a[a.length - 1].replace(/[^0-9]/gi, ''));
          let bVal = Number(b[b.length - 1].replace(/[^0-9]/gi, ''));
          
          return aVal > bVal ? 1 : -1;
        })}/>
      </div>
    );
  }
}

export default App;
