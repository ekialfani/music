import { React, Component } from 'react';
import MainContent from './mainContent';
import PlayingContent from './playingContent';


class Content extends Component {

	render(){
		return (
			<div className="grid grid-cols-[1fr_400px]">
				<MainContent />
				<PlayingContent />
			</div>
		);
	}
}


export default Content;