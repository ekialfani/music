import { React, Component, Fragment } from 'react';
import heroImg from '../assets/hero.jpg';
import PlayedContent from '../content/playedContent';
import { getSongByKeyword } from '../api/getSongs';



class Card extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.onClick(this.props.id);
	}

	render(){
		const song = this.props.song;
		return (
			<li 
				className="bg-slate-200 p-3 text-xs rounded-lg hover:bg-slate-300 cursor-pointer active:bg-slate-200"
				onClick={this.handleClick}>
				<img
					className="rounded-lg" 
					src={song.album.cover} />

				<h4 className="font-medium mt-3 mb-1">
					{song.title_short}
				</h4>

				<p className="text-slate-500">
					{song.artist.name}
				</p>
			</li>
		)	
	}
}


class Cards extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id){
		this.props.onClick(id);
	}

	render(){
		const items = this.props.items;

		return (
			<ul className="grid grid-cols-5 gap-x-5 gap-y-8 mt-10">
				{items.map(item => (
					<Card 
						key={item.id}
						id={item.id}
						song={item}
						onClick={this.handleClick}
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
				className="w-1/2">
				<input
					className="text-slate-500 border border-slate-300 px-3 py-2 text-sm rounded-full w-full focus:outline-none focus:border-red-600"
					type="text"
					value={value}
					onChange={this.handleChange}
					placeholder="search songs..." />
			</div>
		)
	}
}


function MainContent(props){
	return (
		<main className="px-8 py-10 h-[100vh] overflow-auto">
			{props.children}
		</main>
	)
}


class Container extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoaded: false,
			error: null,
			keyword: '',
			songId: '',
			items: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(value){
		this.setState({
			keyword: value
		})
	}


	handleClick(id){
		this.setState({
			songId: id
		});
	}

	async componentDidMount(){
		const result = await getSongByKeyword('eminem');
		if(result.message){
			this.setState({
				isLoaded: true,
				error: result.message
			})

		}else if(result.total === 0){
			this.setState({
				isLoaded: true,
				error: 'Music Not Found'
			})

		}else if(result.error && result.error.code === 4){
			this.setState({
				isLoaded: true,
				error: result.error.message
			})

		}else {
			this.setState({
				isLoaded: true,
				items: result.data
			})
		}

	}

	async componentDidUpdate(prevState){
		const keyword = this.state.keyword;
		const spread = [...keyword].map(h => (h === ' ') ? h = '%20' : h).join('');
	}

	render(){
		const { isLoaded, error, keyword, songId, items } = this.state;

		if(error){
			return (
				<h1>Error: {error}</h1>
			);

		}else if(!isLoaded){
			return (
				<h1>Loading...</h1>
			);
		}

		return (
			<div className="grid grid-cols-[1fr_400px]">
				<MainContent>
					<div className="flex items-center justify-between">
						<SearchBar
							value={keyword}
							onChange={this.handleChange}
						/>
						<DarkMode />
					</div>

					<Hero />

					<Cards 
						items={items}
						onClick={this.handleClick}
					/>
				</MainContent>

				<PlayedContent songId={songId} />
			</div>
		)
	}
	
}


export default Container;