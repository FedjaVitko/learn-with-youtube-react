/**
 * External dependencies
 */
import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import smoothScroll from 'smoothscroll';

/**
 * Internal dependencies
 */
import {
  TextLabel,
  Input,
  Section,
  Menu,
  Item,
  Container,
  BgVideo,
  BgVideoContent
} from './Styled';
import QueryCourses from 'components/data/query-courses';
import keyWords from 'const/keyWords';
import videoMp4 from 'videos/Coder.mp4';
import videoWebm from 'videos/Coder.webm';

const SearchSection = () => {
  const itemToString = i => (i ? i.name : '');

  const getItems = value =>
    value
      ? matchSorter(keyWords, value, {
        keys: ['name'],
        threshold: matchSorter.rankings.WORD_STARTS_WITH
      })
      : keyWords;

  const handleChange = selectedItem => {
    smoothScroll(1000);
  };

  return (
    <Section>
      <BgVideo>
        <BgVideoContent autoPlay muted loop>
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported
        </BgVideoContent>
      </BgVideo>
      <Container>
        <TextLabel>Today I want to learn</TextLabel>
        <Downshift itemToString={itemToString} onChange={handleChange}>
          {({
            getInputProps,
            getItemProps,
            isOpen,
            selectedItem,
            highlightedIndex,
            inputValue
          }) => (
            <div>
              <Input
                {...getInputProps({
                  isOpen,
                  placeholder: 'JavaScript, React, ES6...'
                })}
              />
              {!isOpen ? null : (
                <Menu>
                  {getItems(inputValue).map((item, index) => (
                    <Item
                      key={item.id}
                      {...getItemProps({
                        item,
                        index,
                        isActive: highlightedIndex === index,
                        isSelected: selectedItem === item
                      })}
                    >
                      {item.name}
                    </Item>
                  ))}
                </Menu>
              )}
              <QueryCourses query={selectedItem && selectedItem.name} />
            </div>
          )}
        </Downshift>
      </Container>
    </Section>
  );
};

export default SearchSection;
