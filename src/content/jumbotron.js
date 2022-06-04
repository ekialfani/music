import { React, Component } from 'react';
import heroImg from '../assets/hero.jpg';

class Jumbotron extends Component {
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


export default Jumbotron;