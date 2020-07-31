import React, { Component, Fragment } from 'react'

const headerStyle = {
    backgroundImage : "./public/banner_bg.jpg"
}

export class dashboardPage extends Component {
    render() {
        return (
            <Fragment>
                <header className='header'>
                    <h1>this is dashboardPage</h1>
                </header>
            </Fragment>
        )
    }
}

export default dashboardPage
