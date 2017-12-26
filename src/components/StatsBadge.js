import React from 'react';

class StatsBadge extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
        return (
            <div class="btn-group" data-toggle="buttons">
			  <label class="btn btn-secondary active"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" checked autocomplete="off" value="attackdamage"/>attackdamage
			  </label>
			  <label class="btn btn-secondary"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" autocomplete="off" value="armor"/>armor
			  </label>
			  <label class="btn btn-secondary"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" autocomplete="off" value="hp" />hp
			  </label>
			  <label class="btn btn-secondary"  onClick={this.props.clickStatsBadge}>
			    <input type="radio" autocomplete="off" value="spellblock"/>spellblock
			  </label>
			</div>
        );
    }
}
export default StatsBadge