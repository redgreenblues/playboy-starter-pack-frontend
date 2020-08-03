import React, { Component, Fragment } from 'react'
import ContentCard from '../components/contentCard';

class UserMemes extends Component {
    render() {
        return (
            <Fragment>
                <ContentCard caption={this.props.caption} imgUrl={this.props.imgUrl} postedBy={this.props.postedBy} />
            </Fragment>
        )
    }
}

export default UserMemes
