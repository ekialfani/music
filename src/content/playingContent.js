import { React, Component } from 'react';
import castle from '../assets/castle.jpg';
import toxic from '../assets/BoyWithUke-Toxic-Lyrics_GXppz1MMzNA.mp3';


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
	render(){
		return (
			<div className="text-center mt-10">
				<h4 className="font-bold text-sm text-slate-800">
					Castle on the Hill
				</h4>

				<p className="text-sm text-slate-500">
					Ed Sheeran
				</p>
				<div className="border border-slate-200 p-5 rounded-xl w-48 mx-auto mt-3">
					<img
						className="w-full rounded-xl" 
						src={castle} />
				</div>
				<audio controls className="mt-5 mx-auto">
					<source src={toxic} type="audio/mp3" />
				</audio>
			</div>
		)
	}
}


function PlayingContent(){
	return (
		<div className="border-l border-slate-200 p-6">
			<Heading />
			<Played />
		</div>
	)
}

export default PlayingContent;