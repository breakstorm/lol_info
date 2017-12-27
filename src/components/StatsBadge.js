import React from 'react';

class StatsBadge extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
        return (
            <div className="btn-group" data-toggle="buttons">
			  <label className="btn btn-secondary active"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" defaultChecked autoComplete="off" value="attackdamage"/>attackdamage
			  </label>
			  <label className="btn btn-secondary"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" autoComplete="off" value="armor"/>armor
			  </label>
			  <label className="btn btn-secondary"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" autoComplete="off" value="hp" />hp
			  </label>
			  <label className="btn btn-secondary"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" autoComplete="off" value="spellblock"/>spellblock
			  </label>
			</div>
        );
    }
}
export default StatsBadge