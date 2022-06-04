import { React, Component } from 'react';
import castle from '../assets/castle.jpg';
import { getSongById } from '../api/getSongs';
import toxic from '../assets/BoyWithUke-Toxic-Lyrics_GXppz1MMzNA.mp3';



function PlayButton(props){
	return (
		<button onClick={props.onClick}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
			  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
			</svg>
		</button>
	)
}


function PauseButton(props){
	return (
		<button onClick={props.onClick}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
			  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
			</svg>
		</button>
	)
}


class Track extends Component {
	constructor(props){
		super(props);

		this.state = {play: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(state => ({
			play: !state.play
		}))
	}

	render(){
		const play = this.state.play;
		const button = (
			play ? 
				<PauseButton onClick={this.handleClick} /> : 
				<PlayButton onClick={this.handleClick} />
		)

		return (
			<div>
				<input type="range" max="29" value="10" className="slider" />
				{button}
				
			</div>
		)
	}
}

function Heading(){
	return (
		<div className="flex items-center space-x-2 font-bold justify-center pt-10 text-slate-800">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
			  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
			</svg>
			<h1>
				Played
			</h1>
		</div>
	)
}

class Played extends Component {
	constructor(props){
		super(props);
		this.state = {song: []};
	}

	async componentDidMount(){
		const result = await getSongById('1109731');
		if(result !== result.error){
			this.setState({
				song: result
			})	
		}
		
	}

	async componentDidUpdate(prevProps){
		if(this.props.songId !== ''){
			if(this.props.songId !== prevProps.songId){
				const result = await getSongById(this.props.songId);
				this.setState({
					song: result
				})
			}
		}
		
	}	


	render(){
		const song = this.state.song;
		const album = {...song.album};
		const artist = {...song.artist};
		return (
			<div className="text-center mt-10">
				<h4 className="font-bold text-sm text-slate-800">
					{song.title_short}
				</h4>

				<p className="text-sm text-slate-500">
					{artist.name}
				</p>
				<div className="border border-slate-200 p-5 rounded-xl w-48 mx-auto mt-3">
					<img
						className="w-full rounded-xl" 
						src={album.cover} />
				</div>
				<Track />
				<audio 
					className="mx-auto mt-3"
					src={song.preview}
					controls
				/>
				<p>{this.props.songId}</p>
			</div>
		)
	}
}


function PlayedContent(props){
	return (
		<div className="border-l border-slate-200 p-6">
			<Heading />
			<Played songId={props.songId} />
			{/*<p>{this.props.songId}</p>*/}
		</div>
	)
}

export default PlayedContent;