/**
 * External dependencies
 */
import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import smoothScroll from 'smoothscroll';

/**
 * Internal dependencies
 */
import { TextLabel, Input, InputButton, Section, Menu, Item, Container } from './components';
import QueryCourses from 'components/data/query-courses';


const SearchSection = () => {
  const items = [{ id: 'java', name: 'Java' }, { id: 'javascript', name: 'JavaScript' }, { id: 'react', name: 'React' }, { id: 'redux', name: 'Redux' }];

  const itemToString = (i) => i ? i.name : '';

  const getItems = (value) => value ? matchSorter(items, value, { keys: ['name'], threshold: matchSorter.rankings.WORD_STARTS_WITH }) : items;

  const handleChange = (selectedItem) => {
    smoothScroll(900);
    console.log(selectedItem.id);
  }

  return (
    <Section>
      <Container >
        <TextLabel>Today I want to learn</TextLabel>
        <Downshift
          itemToString={itemToString}
          onChange={handleChange}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            selectedItem,
            highlightedIndex,
            inputValue,
            highlightedItem,
            selectHighlightedItem
          }) => (
              <div>
                <Input
                  {...getInputProps({
                    isOpen,
                    placeholder: 'JavaScript, React, ES6...',

                  })}
                />
                {!isOpen
                  ? null
                  : <Menu>
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
                }
              </div>
            )}
        </Downshift>
        <QueryCourses query='java' />
      </Container>
    </Section>
  )
}

export default SearchSection






