import { React, Component } from 'react';


function DarkMode(){
	return (
		<div>
			<button 
				className="flex space-x-1 text-sm items-center text-slate-500">
				<span>Dark Mode</span>

				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-y-0.5" viewBox="0 0 20 20" fill="currentColor">
				  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
			</button>
		</div>
	)
}


class SearchBar extends Component {
	render(){
		return (
			<form className="w-1/2">
				<label>
					<input 
						className="text-slate-500 border border-slate-300 px-3 py-1 text-sm rounded-full w-full focus:outline-none focus:border-red-500"
						type="text"
						placeholder="search songs..." />
				</label>
			</form>
		)
	}
}


function Header(){
	return (
		<div 
			className="flex items-center justify-between">
			<SearchBar />
			<DarkMode />
		</div>
	)
}


function MainContent() {
	return (
		<div className="p-6">
			<Header />
		</div>
	)
}


export default MainContent;