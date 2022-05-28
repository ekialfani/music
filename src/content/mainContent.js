import { React, Component } from 'react';
import heroImg from '../assets/hero.jpg';



class Card extends Component {
	constructor(props){
		super(props);
		this.state = {id: ''};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			id: this.props.id
		});
	}

	render(){
		const songs = this.props.songs;
		return (
			<li 
				className="bg-slate-200 p-3 text-xs rounded-lg hover:bg-slate-300 cursor-pointer active:bg-slate-200"
				onClick={this.handleClick}>
				<img
					className="rounded-lg" 
					src={songs.song_art_image_url} />

				<h4 className="font-medium mt-3 mb-1">
					{songs.title}
				</h4>

				<p className="text-slate-500">
					{songs.artist_names}
				</p>
				<span>{this.state.id}</span>
			</li>
		)	
	}
}


class Cards extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const items = this.props.items;

		return (
			<ul className="grid grid-cols-5 gap-x-5 gap-y-8 mt-10">
				{items.map(item => (
					<Card 
						key={item.result.id}
						id={item.result.id}
						songs={item.result}
					/>

				))}
			</ul>
		)	
	}
	
}


class Hero extends Component {
	render(){
		return (
			<div 
				className="text-white p-7 relative rounded-2xl overflow-hidden my-5 z-10">
				<img 
					className="absolute top-0 left-0 bottom-0 right-0 w-full h-full position-center -z-10 opacity-90"
					src={heroImg} />
				<div className="mx-3 my-5">
					<h3 className="text-2xl font-medium">
						Castle on the Hill
					</h3>
					<p className="font-medium text-slate-500 mt-1">
						Ed Sheeran
					</p>
				</div>
				<div className="mt-8 mb-3 mx-3 flex items-center space-x-4">
					<button 
						className="bg-red-600 px-8 py-2 rounded-md text-sm font-medium hover:bg-red-700 active:bg-red-600">
						Play
					</button>
					<button className="bg-slate-600 px-2 py-2 text-sm rounded-md hover:bg-slate-700 active:bg-slate-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
						</svg>
					</button>
				</div>
			</div>
		)
	}
}

function ToggleOnIcon(){
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-toggle-on" viewBox="0 0 16 16">
		  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
		</svg>
	)
}



function ToggleOffIcon(){
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-toggle-off" viewBox="0 0 16 16">
		  <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
		</svg>
	)
}


class DarkMode extends Component {
	constructor(props){
		super(props);
		this.state = {darkMode: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(state => ({
			darkMode: !state.darkMode
		}));
	}

	render(){
		const darkMode = this.state.darkMode;

		return (
			<button
				className="flex items-center space-x-2 text-sm text-slate-400 font-medium"
				onClick={this.handleClick}>
				<p>Dark Mode</p>
				{darkMode ? <ToggleOnIcon /> : <ToggleOffIcon />}
			</button>
		)	
	}
	
}


class SearchBar extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.onChange(e.target.value);
	}

	render(){
		const value = this.props.value;

		return (
			<div 
				className="w-2/3">
				<input
					className="text-slate-500 border border-slate-300 px-3 py-2 text-sm rounded-full w-full focus:outline-none focus:border-red-600"
					type="text"
					value={this.props.value}
					onChange={this.handleChange}
					placeholder="search songs..." />
			</div>
		)
	}
}


function Header(props){
	return (
		<div className="flex items-center justify-between mt-3">
			<SearchBar value={props.value} onChange={props.onChange} />
			<DarkMode />
		</div>
	)
}



function MainContent(props) {
	return (
		<div className="px-8 py-10">
			<Header value={props.value} onChange={props.onChange} />
			<Hero />
			<Cards items={props.items} />
		</div>
	)
}


export default MainContent;