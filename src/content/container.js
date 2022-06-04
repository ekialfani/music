import { React, Component, Fragment } from 'react';
import SearchBar from './searchBar';
import Jumbotron from './jumbotron';
import Cards from './cards';
import PlayedContent from '../content/playedContent';
import { getSongByKeyword } from '../api/getSongs';


function MainContent(props){
	return (
		<main className="px-8 py-10 h-[100vh] overflow-auto">
			{props.children}
		</main>
	)
}


class Container extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoaded: false,
			error: null,
			keyword: '',
			songId: '',
			items: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	async componentDidMount(){
		const result = await getSongByKeyword('eminem');
		if(result.message){
			this.setState({
				isLoaded: true,
				error: result.message
			})

		}else if(result.total === 0){
			this.setState({
				isLoaded: true,
				error: 'Music Not Found'
			})

		}else if(result.error && result.error.code === 4){
			this.setState({
				isLoaded: true,
				error: result.error.message
			})

		}else {
			this.setState({
				isLoaded: true,
				items: result.data
			})
		}

	}

	async componentDidUpdate(prevState){
		const keyword = this.state.keyword;
		const spread = [...keyword].map(h => (h === ' ') ? h = '%20' : h).join('');
	}

	render(){
		const { isLoaded, error, keyword, songId, items } = this.state;

		if(error){
			return (
				<h1>Error: {error}</h1>
			);

		}else if(!isLoaded){
			return (
				<h1>Loading...</h1>
			);
		}

		return (
			<div className="grid grid-cols-[1fr_400px]">
				<MainContent>
					<SearchBar value={keyword} onChange={this.handleChange} />
					<Jumbotron />
					<Cards items={items} onClick={this.handleClick} />
				</MainContent>

				<PlayedContent songId={songId} />
			</div>
		)
	}
	
}


export default Container;