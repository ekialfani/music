import { React, Component } from 'react';
import DarkMode from './darkMode';

class InputKeyword extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.onChange(event.target.value);
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



class SearchBar extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(keyword){
		this.props.onChange(keyword);
	}

	render(){
		const value = this.props.value;

		return (
			<div className="flex items-center justify-between">
				<InputKeyword
					value={value}
					onChange={this.handleChange}
				/>
				<DarkMode />
			</div>
		)
	}
}


export default SearchBar;