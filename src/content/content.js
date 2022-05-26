import { React, Component } from 'react';
import MainContent from './mainContent';
import PlayingContent from './playingContent';
import getSongs from '../api/getSongs';


class Content extends Component {
	constructor(props){
		super(props)
		this.state = {
			isLoaded: true,
			items: [],
			keyword: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(keyword){
		this.setState({
			keyword: keyword
		})
	}

	async componentDidMount(){
		const result = await getSongs('ed%20sheeran');

		this.setState({
			isLoaded: true,
			items: result.hits
		})
	}

	async componentDidUpdate(prevState){
		const keyword = this.state.keyword;
		const spread = [...keyword].map(h => {
			if(h === ' '){
				return h = '%20';
			}
			return h;
		}).join('');

		if(this.state.items !== prevState.items && keyword !== ''){
			const result = await getSongs(keyword);
			
			this.setState({
				isLoaded: true,
				items: result.hits
			})
		}
	}
	
	render(){
		const items = this.state.items;

		return (
			<div className="grid grid-cols-[1fr_400px]">
				<MainContent items={items} onChange={this.handleChange} />
				<PlayingContent />
			</div>
		);
	}
}


export default Content;