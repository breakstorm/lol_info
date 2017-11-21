import React from 'react';
import ChracterCard from './ChracterCard';

class LolChracter extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		this.props.chracterstate.map((data) => {
					console.log(data.name + " : " + data.id);
				})
		return(
			<div>
				<div class="btn-group">
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
					{this.props.chracterstate.map((data, i) => {
						return (
							<ChracterCard data={data} key={i}></ChracterCard>
						)
					})};	
				</div> 
			</div>
		)
	}
}

export default LolChracter;