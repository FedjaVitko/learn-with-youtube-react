import React, { Component } from 'react';
import { SearchSection, CoursesSection } from './containers';

class App extends Component {

  onSearch = () => console.log('onSearch');

  render() {
    return (
      <div>
        <SearchSection
          onChange={this.onChange}
          onSearch={this.onSearch} 
        />
        <CoursesSection />
      </div>
    );
  }
}

export default App;
