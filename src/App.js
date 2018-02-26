import React, { Component } from 'react';
import { SearchSection } from './containers';

class App extends Component {

  onSearch = () => console.log('onSearch');

  render() {
    return (
      <div>
        <SearchSection
          onChange={this.onChange}
          onSearch={this.onSearch} 
        />
      </div>
    );
  }
}

export default App;
