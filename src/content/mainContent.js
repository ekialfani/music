import { React, Component } from 'react';
import heroImg from '../assets/hero.jpg';

class Hero extends Component {
	render(){
		return (
			<div 
				className="text-white p-6 relative rounded-2xl overflow-hidden my-5">
				<img 
					className="absolute top-0 left-0 bottom-0 right-0 w-full h-full position-center -z-10"
					src={heroImg} />
				<div className="mx-3 my-5">
					<h3 className="text-2xl font-medium">
						Castle on the Hill
					</h3>
					<p className="font-medium text-slate-400">
						Ed Sheeran
					</p>
				</div>
				<div className="my-5 mx-3 flex items-center space-x-4">
					<button 
						className="bg-red-500 px-8 py-2 rounded-md text-sm font-medium hover:bg-red-600 active:bg-red-500">
						Play
					</button>
					<button className="bg-slate-400 px-2 py-2 text-sm rounded-md hover:bg-slate-500 active:bg-slate-400">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
						</svg>
					</button>
				</div>
			</div>
		)
	}
}


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
			<Hero />
		</div>
	)
}


export default MainContent;