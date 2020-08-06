import React, { Component, Fragment } from 'react'
import UserContentCard from '../components/UserContentCard';

class UserPuns extends Component {
    render() {
        return (
            <Fragment>
                <UserContentCard
                caption={this.props.caption}
                pun={this.props.pun}
                postedBy={this.props.postedBy}
                id={this.props.id}
                contentType={this.props.contentType}
                likeAmt={this.props.likeAmt} />
            </Fragment>
        )
    }
}

export default UserPuns
