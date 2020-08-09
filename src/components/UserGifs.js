import React, { Component, Fragment } from 'react';
import UserContentCard from '../components/UserContentCard';

class UserGifs extends Component {
    render() {
        return (
            <Fragment>
                <UserContentCard 
                    currentUser = {this.props.currentUser}
                    comments = {this.props.comments}
                    commentAmt={this.props.commentAmt}
                    caption={this.props.caption}
                    imgUrl={this.props.imgUrl}
                    postedBy={this.props.postedBy}
                    id={this.props.id}
                    contentType={this.props.contentType}
                    likeAmt={this.props.likeAmt}
                    handleDelete = {this.props.deleteContent} />
            </Fragment>
        )
    }
}

export default UserGifs
