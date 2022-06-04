import { React, Component } from 'react';

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


export default Cards;