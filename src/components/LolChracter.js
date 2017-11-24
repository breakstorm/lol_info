import React from 'react';
import ChracterCard from './ChracterCard';

class LolChracter extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const mapToCharacterCard = (data) => {
			return data.map((data, i) => {
				if(this.props.searchInput === ''){
					return (<ChracterCard 
						data={data} 
						key={i} 
						clickCharacter={this.props.clickCharacter}
						searchInput={this.props.searchInput} ></ChracterCard>)
				}else if(data.name.toLowerCase().indexOf(this.props.searchInput) === 0){
					return (<ChracterCard 
						data={data} 
						key={i} 
						clickCharacter={this.props.clickCharacter}
						searchInput={this.props.searchInput} ></ChracterCard>)
				}
		})}

		return(
			<div>
				<div class="btn-group" data-toggle="buttons" onClick={(e) => {
					this.props.clickBadge(e)
				}}>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="a" />A
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="b" />B
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="c"/>C
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="d"/>D
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="e"/>E
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="f"/>F
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="g"/>G
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="h"/>H
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="i"/>I
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="j" />J
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="k" />K
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="l"/>L
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="m"/>M
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="n"/>N
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="o"/>O
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="p"/>P
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="q"/>Q
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="r"/>R
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="s" />S
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="t" />T
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="u"/>U
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="v"/>V
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="w"/>W
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="x"/>X
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="y"/>Y
					</label>
					<label class="btn btn-light">
						<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="z"/>Z
					</label>
				</div>
				<h1></h1>
				<div class="card-columns">
				<div>{mapToCharacterCard(this.props.chracterstate)}</div>
				</div> 
			</div>
		)
	}
}

export default LolChracter;