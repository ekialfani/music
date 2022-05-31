import { React, Component } from 'react';
import MainContent from './mainContent';
import PlayedContent from './playedContent';
import getSongs from '../api/getSongs';


class Content extends Component {
	constructor(props){
		super(props)
		this.state = {
			isLoaded: true,
			keyword: '',
			items: []
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value){
		this.setState({
			keyword: value
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
		const spread = [...keyword].map(h => (h === ' ') ? h = '%20' : h).join('');

		if((this.state.items !== prevState.items) && (keyword !== '')){
			const result = await getSongs(spread);
			
			this.setState({
				isLoaded: true,
				items: result.hits
			})
		}
	}
	
	render(){
		const items = this.state.items;
		const value = this.state.keyword;

		return (
			<div className="grid grid-cols-[1fr_400px]">
				<MainContent items={items}  value={value} onChange={this.handleChange} />
				<PlayedContent />
			</div>
		);
	}
}


export default Content;