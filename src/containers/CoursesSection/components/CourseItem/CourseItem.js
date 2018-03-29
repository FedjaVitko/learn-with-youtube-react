/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import {
  CardContainer,
  CreationDate,
  CourseTitle,
  CourseAuthor,
  CourseLanguage,
  CourseLessonsCount,
  CourseImageContainer,
  CourseDifficulty,
  CourseImgDescriptionContainer,
  CourseImage,
  CourseDescription
} from './Styled';
import { difficultyConst } from 'const';

const CourseItem = ({ details, onClick }) =>
  console.log(details) || (
    <CardContainer onClick={onClick}>
      <CreationDate title="Course creation date" datetime="21-03-2018">
        21.03.2018
      </CreationDate>
      <CourseTitle>{details.title}</CourseTitle>
      <CourseAuthor href="#">{details.channel_title}</CourseAuthor>
      <CourseLanguage>{details.lang}</CourseLanguage>
      <CourseLessonsCount>
        {`${details.lessons_count} lessons`}
      </CourseLessonsCount>
      <CourseDifficulty difficulty={details.difficulty}>
        {difficultyConst[details.difficulty].text}
      </CourseDifficulty>
      <CourseImgDescriptionContainer>
        <CourseImage src={details.thumbnail} />
        <CourseDescription>
          This course will take you on the wonderful journey through the
          JavaScript land. It will take you to places you have never been
          before. Regardless of how experienced you are in the field of Web
          Development.
        </CourseDescription>
      </CourseImgDescriptionContainer>
    </CardContainer>
  );

export default CourseItem;
