import React, { Component, Fragment } from 'react';
import UserContentCard from '../components/UserContentCard';

class UserGifs extends Component {
    render() {
        return (
            <Fragment>
                <UserContentCard caption={this.props.caption} imgUrl={this.props.imgUrl} postedBy={this.props.postedBy} />
            </Fragment>
        )
    }
}

export default UserGifs
