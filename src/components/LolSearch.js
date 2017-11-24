import React from 'react';

class LolSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: this.props.searchInput
		}
	}

	render() {
		return (
			<div>
				<h2>LolSearch</h2>
				<div class="card">
					<div class="card-body bg-primary">
						<div class="input-group">
							<input 
								class="form-control" 
								type="text" 
								onChange={(e) => {
									console.log("a");
									this.props.typeSearchInput(e)}}
								value={this.props.searchInput}></input>
							<span class="input-group-btn"><button class="btn btn-secondary" type="button">lol</button></span>
						</div>
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
{/*LolSearch.propTypes = {
	typeSearchInput: PropTypes.func,
	searchInput: PropTypes.string
}*/}

export default LolSearch;