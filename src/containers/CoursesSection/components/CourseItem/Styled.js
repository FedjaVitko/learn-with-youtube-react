/**
 * External dependencies
 */
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { styleConst, difficultyConst } from 'const';
import { Tag } from 'components/Styled';

const { COLORS, FONT_SIZES } = styleConst;

const CardContainer = styled.article`
  display: block;
  width: 100%;
  height: 250px;
  position: relative;
  /* flex-wrap: wrap; */
  flex-direction: column;
  padding: 25px;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  background: ${COLORS.CARD_BACKGROUND};
  color: ${COLORS.TEXT_DARK};

  &:hover {
    cursor: pointer;

    &::before {
      box-shadow: 0 2px 8px 2px rgba(20, 23, 28, 0.15);
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: 0.2s ease;
    pointer-events: none;
    box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
      0 3px 1px 0 rgba(20, 23, 28, 0.1);
  }

  @media (min-width: 1200px) {
    width: 44%;
    margin: 0 0 20px;
  }
`;

const CreationDate = styled.time`
  position: absolute;
  font-size: ${FONT_SIZES.XS};
  font-weight: 300px;
  top: 10px;
`;

const CourseTitle = styled.h3``;

const CourseAuthor = styled.a`
  font-size: ${FONT_SIZES.XS};
  text-decoration: none;
`;

const CourseLanguage = Tag.extend`
  top: 10px;
  right: 0;
`;

const CourseLessonsCount = Tag.extend`
  top: 40px;
  right: 0;
`;
const CourseDifficulty = Tag.extend`
  bottom: 10px;
  right: 0;
  background: ${props => difficultyConst[props.difficulty].color};
`;
const CourseImgDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  width: 700px;
`;

const CourseDescription = styled.p`
  font-size: ${FONT_SIZES.L};
`;

const CourseImage = styled.img`
  width: 450px;
  height: 100%;
  margin-right: 2em;
`;

export {
  CardContainer,
  CreationDate,
  CourseTitle,
  CourseAuthor,
  CourseLanguage,
  CourseLessonsCount,
  CourseDifficulty,
  CourseImgDescriptionContainer,
  CourseDescription,
  CourseImage
};
