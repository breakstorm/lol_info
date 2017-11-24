import React from 'react';
import ChracterCard from './ChracterCard';

class LolChracter extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const mapToCharacterCard = (data) => {
			return data.map((data, i) => {
				console.log(data)
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
				<div class="btn-group" onClick={(e) => {
					this.props.clickCharacter(e);
				}}>
					<button class="btn btn-light">ㄱ</button>
					<button class="btn btn-light">ㄴ</button>
					<button class="btn btn-light">ㄷ</button>
					<button class="btn btn-light">ㄹ</button>
					<button class="btn btn-light">ㅁ</button>
					<button class="btn btn-light">ㅂ</button>
					<button class="btn btn-light">ㅅ</button>
					<button class="btn btn-light">ㅇ</button>
					<button class="btn btn-light">ㅈ</button>
					<button class="btn btn-light">ㅊ</button>
					<button class="btn btn-light">ㅋ</button>
					<button class="btn btn-light">ㅌ</button>
					<button class="btn btn-light">ㅍ</button>
					<button class="btn btn-light">{this.props.name}</button>
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