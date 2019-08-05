import React from 'react'

class Quote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "quote"
        }
    }

    render() {
        return <p>{this.state.text}</p>
    }
}

export default Quote