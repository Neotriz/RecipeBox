import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalBox from '../components/modalbox'

class AddRecipeButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipeName: '',
      userIngredients: ''
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this)
    this.handleUserIngredientsChange = this.handleUserIngredientsChange.bind(this)
  }
  onClickSubmit(){
    const splitIngredients = this.state.userIngredients.split(/[,]+/)
    this.props.addRecipe([this.state.recipeName, splitIngredients])
    this.setState({
      recipeName: '',
      userIngredients: ''
    })
  }
  handleRecipeNameChange(event){
    this.setState({recipeName: event.target.value})
  }
  handleUserIngredientsChange(event){
    this.setState({userIngredients: event.target.value})
  }
  render(){
    return (
      <div id='add-recipe'>
        <ModalBox
          modalTextTitle={'Add Recipe'}
          icon={'add'}
          floating={true}
          large={true}
          recipeName={this.state.recipeName}
          userIngredients={this.state.userIngredients}
          handleRecipeNameChange={this.handleRecipeNameChange}
          handleUserIngredientsChange={this.handleUserIngredientsChange}
          onClickSubmit={this.onClickSubmit}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe}, dispatch)
}

export default connect(null,mapDispatchToProps)(AddRecipeButton)
