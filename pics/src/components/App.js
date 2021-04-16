import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit =  async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      // headers: {
      //   Authorization:
      //   'Client-ID y4m6B3uo-xPFIK72rptSqpq3MNNIgq29XA-_HI8c2MQ'
      // }
    });

    this.setState({ images: response.data.results });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  };
}

export default App;
