import React from 'react';
import PropTypes from 'prop-types';

import HistoryContent from './HistoryContent';

class LolSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cookieCharacter: []
		}
	}

	componentWillMount() {
		let cookieCharacter = [];
		let x, y;
		let value = document.cookie.split(';');
		for(let i = 0; i < value.length; i++){
			x = value[i].substr(0, value[i].indexOf('='))
			x = x.replace(/^\s+|\s+$/g, '');
			y = value[i].substr(value[i].indexOf('=')+1)
			if(x === 'character'){
				let temp = y.split('/');
				this.setState({
					cookieCharacter: this.state.cookieCharacter.concat(temp)
				})
			}
		}		
	}

	render() {

		// let cookieCharacter = [];
		// let x, y;
		// let value = document.cookie.split(';');
		// for(let i = 0; i < value.length; i++){
		// 	x = value[i].substr(0, value[i].indexOf('='))
		// 	x = x.replace(/^\s+|\s+$/g, '');
		// 	y = value[i].substr(value[i].indexOf('=')+1)
		// 	if(x === 'character'){
		// 		cookieCharacter = y.split('/');
		// 	}
		// }
		// console.log("this is LolSearch component : ")
		// console.log(cookieCharacter)

		
		// (cookieCharacter.length !== 0 ? <div class="card">
		// 									<ul class="menu" role="menu" aria-labelledby="dropdownMenu">
		// 									  {mapToHistoryContent(cookieCharacter)}
		// 									</ul>
		// 								</div>
		// 				 : viewBlank);
		// const preview = (cookieCharacter.length !== 0 ? <div class="card">
		// 													<ul class="menu">
		// 													  {mapToHistoryContent(cookieCharacter)}
		// 													</ul>
		// 												</div>
		// 				 : console.error("WTF"));
		const test = [1, 2, 3, 4];

		const mapToHistoryContent = (data) => {

			return data.map((v, i) => {
				return (<HistoryContent data={v} key={i} />)
			})
		}

		const preview = (<div class="card">
							<ul class="menu">{mapToHistoryContent(this.state.cookieCharacter)}
							</ul>
						</div>)
		const viewBlank = (<div></div>);

		
		console.log("WTF : ")
		console.log(this.state.cookieCharacter)
		return (
			<div>
				<h2>LolSearch</h2>
				<div class="card">
					<div class="card-body bg-light">
						<div class="input-group">
							<input 
								class="form-control" 
								type="text" 
								onChange={(e) => {this.props.typeSearchInput(e)}}
								value={this.props.searchInput}
								onFocus={(e)=>this.props.onFocusSearchInput(e)}
								onMouseLeave={(e)=>this.props.outFocusSearchInput(e)}
								></input>

							<span class="input-group-btn"><button class="btn btn-secondary" type="button">Report</button></span>
							<span class="input-group-btn"><button class="btn btn-secondary" type="button">Erase</button></span>
						</div>
						{this.props.selectedFocusState ? preview : viewBlank}
						
					</div>
				</div>
			</div>
		);
	}
}

LolSearch.defaultProps = {
	typeSearchInput: ()=> {console.error('typeSearchInput not defined')},
	searchInput: ''
};
LolSearch.propTypes = {
	typeSearchInput: PropTypes.func,
	searchInput: PropTypes.string
}

export default LolSearch;