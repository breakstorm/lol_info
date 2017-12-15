import React from 'react';
import ChracterCard from './ChracterCard';
import Alphabet from './Alphabet';

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
				<Alphabet 
					clickBadge={this.props.clickBadge}
				/>
				<h1></h1>
				<div class="card-columns">
					<div>{mapToCharacterCard(this.props.chracterstate)}</div>
				</div> 
			</div>
		)
	}
}

export default LolChracter;