/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import { CardContainer } from './components';

const CourseItem = ({
    details
}) => (
    <CardContainer>
        <h1>{details.title}</h1>
    </CardContainer>
)

export default CourseItem;
