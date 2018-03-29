/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { SearchSection, CoursesSection } from 'containers';

const HomeView = () => (
    <div>
        <SearchSection
            onChange={this.onChange}
            onSearch={this.onSearch} 
        />
        <CoursesSection />
    </div>
)

export default HomeView;