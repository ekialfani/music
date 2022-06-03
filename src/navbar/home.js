import { React, Component } from 'react';
import MainContent from '../content/mainContent';
import PlayedContent from '../content/playedContent';
// import { getSongByKeyword } from '../api/getSongs';


class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			isLoaded: false,
			keyword: '',
			songId: '',
			items: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	async componentDidMount(){
		// const result = await getSongByKeyword('eminem');
		// this.setState({
		// 	isLoaded: true,
		// 	items: result.data
		// })
	}


	async componentDidUpdate(prevState){
		const keyword = this.state.keyword;
		const spread = [...keyword].map(h => (h === ' ') ? h = '%20' : h).join('');

		// const result = await getSongByKeyword(spread);
			
		// if(result.data){
		// 	this.setState({
		// 		items: result.data
		// 	})
		// }
		
	}

	handleChange(value){
		this.setState({
			keyword: value
		})
	}


	handleClick(id){
		this.setState({
			songId: id
		});
	}

	render(){
		const items = this.state.items;
		const value = this.state.keyword;
		let songId;
		if(this.state.songId !== ''){
			songId = this.state.songId;
		}

		return (
			<div className="grid grid-cols-[1fr_400px]">
				<MainContent 
					items={items}
					value={value}
					onChange={this.handleChange} 
					onClick={this.handleClick}
				/>
				<PlayedContent songId={songId} />
			</div>
		)
	}
}

export default Home;