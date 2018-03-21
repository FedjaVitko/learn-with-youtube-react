/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import { 
    CardContainer, 
    CreationDate,
    CourseTitle,
    CourseLanguage,
    CourseLessonsCount,
    CourseImageContainer,
    CourseDifficulty
} from './Styled';

const CourseItem = ({
    details
}) => console.log(details) || (
    <CardContainer>
        {/* <div>
        <h2>{details.title}</h2>
        </div>
        <img src={details.thumbnail} /> */}
        <CreationDate 
            title="Course creation date"
            datetime="21-03-2018"
        >
            21.03.2018
        </CreationDate>
        <CourseTitle>
            {details.title}
        </CourseTitle>
        <CourseLanguage>
            {details.lang}
        </CourseLanguage>
        <CourseLessonsCount>
            {`${details.lessons_count} lessons`}
        </CourseLessonsCount>
        <CourseDifficulty>
            advanced
        </CourseDifficulty>
        <CourseImageContainer>
            <img src={details.thumbnail} />
        </CourseImageContainer>
    </CardContainer>
)

export default CourseItem;
