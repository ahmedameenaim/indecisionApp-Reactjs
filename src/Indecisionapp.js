import React, { Component } from 'react';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';

class Indecisionapp extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    }
  };

  componentDidMount() {

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
       this.setState(() => ({options}));
    }

    } catch(e) {

    }

    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options ) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log("saving data")
    }
    
  }

  componentWillUnmount() {
    
  }

  handleCloseModal() {
    this.setState(() => ({selectedOption: undefined}));
    console.log('hi superman')
  }
  
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}));
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid value to add option'
    } else if (this.state.options.indexOf(option) > -1){
      return 'The option is already exists'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  render() {
    return (
      <div>
        <Header titles = 'INDECISION' subTitle = 'Put your life in the hands of computers'/>
        <div className = 'container'>
        <Action 
        hasOptions = {this.state.options.length > 0}
        handlePick = {this.handlePick}
        />
        <div className = 'widget'>
        <Options 
        options = {this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption handleAddOption = {this.handleAddOption}/>
        </div>
        <OptionModal  selectedOption = {this.state.selectedOption} handleCloseModal = {this.handleCloseModal}/>
        </div>
      </div>
    );
  }
}

export default Indecisionapp;
