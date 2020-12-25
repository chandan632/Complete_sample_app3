import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);
  }
  btnClickedHandler() {
    this.props.deleteClicked(this.props.data._id);
  }
  editBtnClickedHandler = () => {
    this.props.editBtnClickHandler(this.props.data._id);
  };
  render() {
    return (
      <>
        <span className="edit" onClick={this.editBtnClickedHandler}>
          <EditIcon />
        </span>
        <span className="delete" onClick={this.btnClickedHandler}>
          <DeleteIcon />
        </span>
      </>
    );
  }
}
export default Button;
