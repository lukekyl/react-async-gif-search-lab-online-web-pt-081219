import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = {
        query: '',
        list: []
    }

    handleQuery = query => {
        console.log(query)
        this.setState({
            query: query
        }, () => this.fetchData())
        
    }

    fetchData() {
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let dataList = [json.data[0], json.data[1], json.data[2]]
            console.log(dataList)
            this.setState({
                list: dataList
            })
            
        })
    }



    render() {
        return (
            <div className = 'gifWrapper'>
            <div className = 'gifSearch'>
                <GifSearch onSearch={this.handleQuery} />
            </div>
            <div className = 'gifCard'>
                <GifList gifList={this.state.list} />
            </div>
            </div>
        )
    }
}

export default GifListContainer