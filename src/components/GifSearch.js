import React from 'react';

class GifSearch extends React.Component {
    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.query.length !== 0) {
            return this.props.onSearch(this.state.query)
        }
    }


    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>Search Gifs: &nbsp;</label>
                <input id="query" name="query" type="text" onChange={event => this.handleChange(event)} value={this.state.query} />
                <button value="submit">Submit</button>
            </form>
        )
    }
}

export default GifSearch