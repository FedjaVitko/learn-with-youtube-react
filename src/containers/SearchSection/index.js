import React, { Component } from 'react';
import {connect} from 'react-redux';

import ReactSVG from 'react-svg';
import Downshift from 'downshift';

import { TextLabel, Input, InputButton, Section, Menu, Item, Container } from './components';


const SearchSection = ({
    updateCurrent,
    onSearch
}) => {
    // const handleInputChange = (e) => {
    //     // updateCurrent(e.target.value);
    // }

    const itemToString = (i) => {
        return i ? i.name : '';
    }

    return (
        <Section>
            <Container >
            <TextLabel>Today I want to learn</TextLabel>
            <Downshift itemToString={itemToString}>
                {({
                    getInputProps,
                    getItemProps,
                    isOpen,
                    selectedItem,
                    highlightedIndex
                }) => (
                    <div>
                        <Input 
                            {...getInputProps({
                                isOpen,
                                placeholder: 'JavaScript, React, ES6...'
                            })}
                        />
                        {!isOpen
                            ? null
                            : <Menu>
                                {[{id: 'java', name: 'Java'}, {id: 'javascript', name: 'JavaScript'}, {id: 'react', name: 'React'}, {id: 'redux', name: 'Redux'}].map((item, index) => (
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
            </Container>
        </Section>
    )
}

export default SearchSection;






