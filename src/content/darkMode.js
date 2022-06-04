import { React, Component } from 'react';

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


export default DarkMode;