import React, { Component } from 'react';
import {connect } from 'react-redux';

class UserHeader extends Component {
    
    render() {
        const {user} = this.props;

        if (!user) {
            return null
        }

        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

// to do sort of pre-calculation on values are coming into our component as props and redux state
const mapStateToProps = (state, ownProps) => (
    {user: state.users.find(user => user.id === ownProps.userId)}
);

export default connect(mapStateToProps)(UserHeader);