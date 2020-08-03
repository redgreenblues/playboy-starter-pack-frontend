import React, { Component, Fragment } from 'react'
import ContentCard from '../components/contentCard';

class UserPuns extends Component {
    render() {
        return (
            <Fragment>
                <ContentCard caption={this.props.caption} pun={this.props.pun} postedBy={this.props.postedBy} />
            </Fragment>
        )
    }
}

export default UserPuns
