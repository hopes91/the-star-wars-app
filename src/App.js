import React, { Component } from 'react';
import './App.css';
import './Buttons.css';
import Results from './Results';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			results: [], 
			requestNames: ['films', 'people', 'planets', 'species', 'starships', 'vehicles']
		}

		this.getResults = this.getResults.bind(this);
	}

	getResults(event) {
		const URLS = [
			{'films': 'https://swapi.co/api/films/'}, 
			{'people': 'https://swapi.co/api/people/'}, 
			{'planets': 'https://swapi.co/api/planets/'}, 
			{'species': 'https://swapi.co/api/species/'}, 
			{'starships': 'https://swapi.co/api/starships/'}, 
			{'vehicles': 'https://swapi.co/api/vehicles/'}
		];

		let clickedButton = event.target.id, 
				url, 
				dataObj, 
				resultsArr = [];

		URLS.forEach(obj => {
			Object.keys(obj).forEach(val => {
				if (clickedButton === val) {
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
						if (clickedButton === 'films') {
							let title = `title: ${obj['title']}`, 
									openingCrawl = `opening crawl: ${obj['opening_crawl']}`,
									director = `director: ${obj['director']}`, 
									producer = `producer: ${obj['producer']}`, 
									releaseDate = `release date: ${obj['release_date']}`;

							if (ind === 13) {
								resultsArr.push([title, openingCrawl, director, producer, releaseDate]);
							}
						} else if (clickedButton === 'people') {
								let name = `name: ${obj['name']}`, 
										gender = `gender: ${obj['gender']}`, 
										birthYear = `birth year: ${obj['birth_year']}`, 
										skinColor = `skin color: ${obj['skin_color']}`, 
										hairColor = `hair color: ${obj['hair_color']}`, 
										eyeColor = `eye color: ${obj['eye_color']}`, 
										height = `height: ${obj['height']}`;

								if (ind === 15) {
									resultsArr.push([name, gender, birthYear, skinColor, hairColor, eyeColor, height]);
								}
						} else if (clickedButton === 'planets') {
								let name = `name: ${obj['name']}`, 
										climate = `climate: ${obj['climate']}`, 
										diameter = `diameter: ${obj['diameter']}`, 
										gravity = `gravity: ${obj['gravity']}`, 
										orbitalPeriod = `orbital period: ${obj['orbital_period']}`, 
										rotationPeriod = `rotation period: ${obj['rotation_period']}`, 
										surfaceWater = `surface water: ${obj['surface_water']}`, 
										terrain = `terrain: ${obj['terrain']}`, 
										population = `population: ${obj['population']}`;

								if (ind === 13) {
									resultsArr.push([name, climate, diameter, gravity, orbitalPeriod, rotationPeriod, surfaceWater, terrain, population]);
								}
						} else if (clickedButton === 'species') {
								let name = `name: ${obj['name']}`, 
										averageLifespan = `average lifespan: ${obj['average_lifespan']}`, 
										classification = `classification: ${obj['classification']}`, 
										designation = `designation: ${obj['designation']}`, 
										language = `language: ${obj['language']}`, 
										skinColors = `skin colors: ${obj['skin_colors']}`, 
										hairColors = `hair colors: ${obj['hair_colors']}`, 
										eyeColors = `eye colors: ${obj['eye_colors']}`, 
										averageHeight = `average height: ${obj['average_height']}`;

								if (ind === 14) {
									resultsArr.push([name, averageLifespan, classification, designation, language, skinColors, hairColors, eyeColors, averageHeight]);
								}
						} else if (clickedButton === 'starships') {
								let name = `name: ${obj['name']}`, 
										starshipClass = `starship class: ${obj['starship_class']}`, 
										model = `model: ${obj['model']}`, 
										cargoCapacity = `cargo capacity: ${obj['cargo_capacity']}`, 
										consumables = `consumables: ${obj['consumables']}`, 
										crew = `crew: ${obj['crew']}`, 
										hyperdriveRating = `hyperdrive rating: ${obj['hyperdrive_rating']}`, 
										length = `length: ${obj['length']}`, 
										manufacturer = `manufacturer: ${obj['manufacturer']}`, 
										maxAtmospheringSpeed = `max atmosphering speed: ${obj['max_atmosphering_speed']}`, 
										passengers = `passengers: ${obj['passengers']}`;

								if (ind === 17) {
									resultsArr.push([name, starshipClass, model, cargoCapacity, consumables, crew, hyperdriveRating, length, manufacturer, maxAtmospheringSpeed, passengers]);
								}
						} else if (clickedButton === 'vehicles') {
								let name = `name: ${obj['name']}`, 
										vehicleClass = `vehicle class: ${obj['vehicle_class']}`, 
										model = `model: ${obj['model']}`, 
										cargoCapacity = `cargo capacity: ${obj['cargo_capacity']}`, 
										consumables = `consumables: ${obj['consumables']}`, 
										crew = `crew: ${obj['crew']}`, 
										length = `length: ${obj['length']}`, 
										manufacturer = `manufacturer: ${obj['manufacturer']}`, 
										maxAtmospheringSpeed = `max atmosphering speed: ${obj['max_atmosphering_speed']}`, 
										passengers = `passengers: ${obj['passengers']}`;

								if (ind === 15) {
									resultsArr.push([name, vehicleClass, model, cargoCapacity, consumables, crew, length, manufacturer, maxAtmospheringSpeed, passengers]);
								}
						}
					});
				});

				this.setState({ results: resultsArr });
			});
	}

	render() {
		const BUTTONS = this.state.requestNames.map((name, ind) => {
			return <button type='button' id={name} key={ind} onClick={this.getResults}>{name}</button>;
		});

		return (
			<div className='app'>
				<h1 className='app-name'>The Star Wars App</h1>
				<div className='app-buttons'>{BUTTONS}</div>
				<Results results={this.state.results}/>
			</div>
		);
	}
}

export default App;
