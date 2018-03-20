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
  const items = [{ id: 'java', name: 'Java' }, { id: 'javascript', name: 'JavaScript' }, { id: 'react', name: 'React' }, { id: 'redux', name: 'Redux' }, { id: 'node.js', name: 'Node.js' }];

  const itemToString = (i) => i ? i.name : '';

  const getItems = (value) => value ? matchSorter(items, value, { keys: ['name'], threshold: matchSorter.rankings.WORD_STARTS_WITH }) : items;

  const handleChange = (selectedItem) => {
    smoothScroll(900);
    console.log(selectedItem);
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
          }) => console.log(selectedItem) || (
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
              <QueryCourses query={selectedItem && selectedItem.name} />
              </div>
            )}
        </Downshift>
      </Container>
    </Section>
  )
}

export default SearchSection






