import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Grid from "./Components/Grid/Grid";
import EditForm from "./Components/Form/EditForm";

class App extends React.Component {
  state = {
    data: [],
    editableUser: "",
  };
  componentDidMount() {
    fetch("http://localhost:8000/get_data")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: [...res],
        });
      });
  }
  allData = (data) => {
    this.setState({
      data: [...this.state.data, data],
    });
    fetch("http://localhost:8000/add_to_db", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  deleteIdHandler = (id) => {
    let users = this.state.data;
    users = users.filter((user) => {
      return user._id !== id;
    });
    this.setState({
      data: users,
    });
    fetch(`http://localhost:8000/remove_from_db/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "Deleted successfully!") {
          console.log(this.state.data);
        }
      });
  };
  editClickHandler = (id) => {
    let users = this.state.data;
    users = users.filter((user) => {
      return user._id === id;
    });
    this.setState({
      editableUser: users[0],
    });
  };
  editDataHandler = (editedData) => {
    let users = this.state.data;
    users.forEach((user) => {
      if (user._id === editedData.id) {
        user.firstname = editedData.firstname;
        user.lastname = editedData.lastname;
        user.dob = editedData.dob;
        user.number = editedData.number;
        user.email = editedData.email;
        user.address = editedData.address;
        user.country = editedData.country;
        user.city = editedData.city;
        user.gender = editedData.gender;
        user.language = editedData.language;
        user.comments = editedData.comments;
      }
    });
    this.setState({
      data: users,
      editableUser: "",
    });
    fetch(`http://localhost:8000/update_data/${editedData.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    console.log(editedData);
  };
  render() {
    return (
      <div className="app">
        {this.state.editableUser === "" ? (
          <Form allData={this.allData} />
        ) : (
          <EditForm
            data={this.state.editableUser}
            EditData={this.editDataHandler}
          />
        )}
        {this.state.data.length > 0 ? (
          <Grid
            data={this.state.data}
            deleteId={this.deleteIdHandler}
            editedId={this.editClickHandler}
          />
        ) : (
          <h1 style={{ textAlign: "center" }}>No data found!</h1>
        )}
      </div>
    );
  }
}

export default App;
