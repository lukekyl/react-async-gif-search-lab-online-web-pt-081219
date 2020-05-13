import React from 'react';

class GifList extends React.Component {


    renderList = gif => {
        if (gif !== undefined ) {
            console.log(gif.images.original.url)
            return <li><img src={gif.images.original.url} /></li>
        } else {
            return <p><strong>Image Not Found</strong></p>
        }
    }

    render() {
        console.log(this.props)
        let gifs = this.props.gifList
        return (
            <ul className="cardList">
                {gifs.map( gif => this.renderList(gif) )}
            </ul>
        )
    }
}

export default GifList