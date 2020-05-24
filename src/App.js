import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			Robot: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json(); 
		})
			.then(users => {
				this.setState({Robot: users})
			})
	}

	OnSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render(){
		const filterRobot = this.state.Robot.filter(Robot =>{
	    	return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	    })
		return(
			<div className='tc'>
				<header className='f2'>Robofrineds</header>
				<SearchBox  searchchange = {this.OnSearchChange}/>
				<Scroll>
				<CardList Robot={filterRobot} />
				</Scroll>
				</div>	
	    );	
	}
	
}


export default App;