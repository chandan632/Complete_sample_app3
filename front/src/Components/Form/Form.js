import React, { Component } from "react";
import "./Form.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import JqxInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxinput";
import JqxTextArea from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea";
import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput";
import JqxNumberInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput";
import JqxDropDownList from "jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist";
import JqxRadioButton from "jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton";
import JqxCheckBox from "jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox";
import JqxFileUpload from "jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload";
import JqxTooltip from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip";
import JqxEditor from "jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor";
import JqxButton from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons";

class Form extends Component {
  state = {
    countries: [
      "India",
      "Bangladesh",
      "Australia",
      "Iran",
      "Iraq",
      "Sri Lanka",
      "South Africa",
      "France",
    ],
    cities: [
      "Kolkata",
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Hyderabad",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
      "Patna",
      "Bhopal",
    ],
    firstname: "",
    lastname: "",
    dob: "",
    number: "",
    email: "",
    address: "",
    country: "India",
    city: "Kolkata",
    gender: "",
    language: [],
    comments: "",
    error: false,
  };

  componentDidMount() {
    const dateObject = new Date();
    this.setState({
      dob: `${
        dateObject.getDate() >= 10
          ? dateObject.getDate()
          : "0" + dateObject.getDate()
      }/${
        dateObject.getMonth() + 1 >= 10
          ? dateObject.getMonth() + 1
          : "0" + (dateObject.getMonth() + 1)
      }/${dateObject.getFullYear()}`,
    });
  }

  firstnameChangeHandler = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };
  lastnameChangeHandler = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  dateChangeHandler = (e) => {
    const dateObject = e.args.date;
    this.setState({
      dob: `${
        dateObject.getDate() >= 10
          ? dateObject.getDate()
          : "0" + dateObject.getDate()
      }/${
        dateObject.getMonth() + 1 >= 10
          ? dateObject.getMonth() + 1
          : "0" + (dateObject.getMonth() + 1)
      }/${dateObject.getFullYear()}`,
    });
  };
  numberChangeHandler = (e) => {
    this.setState({
      number: e.args.value,
    });
  };
  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  addressChangeHandler = (e) => {
    this.setState({
      address: e.target.children[0].children[0].value,
    });
  };
  countryHandler = (e) => {
    this.setState({
      country: e.args.item.label,
    });
  };
  cityHandler = (e) => {
    this.setState({
      city: e.args.item.label,
    });
  };
  checkedMaleHandler = () => {
    this.setState({
      gender: "Male",
    });
  };
  checkedFemaleHandler = () => {
    this.setState({
      gender: "Female",
    });
  };
  checkedOtherHandler = () => {
    this.setState({
      gender: "Other",
    });
  };
  bengaliLanguageCheckHandler = () => {
    this.setState({
      language: [...this.state.language, "Bengali"],
    });
  };
  bengaliLanguageUnCheckHandler = () => {
    let languages = this.state.language.filter(
      (language) => language !== "Bengali"
    );
    this.setState({ language: languages });
  };
  hindiLanguageCheckHandler = () => {
    this.setState({
      language: [...this.state.language, "Hindi"],
    });
  };
  HindiLanguageUnCheckHandler = () => {
    let languages = this.state.language.filter(
      (language) => language !== "Hindi"
    );
    this.setState({ language: languages });
  };
  englishLanguageCheckHandler = () => {
    this.setState({
      language: [...this.state.language, "English"],
    });
  };
  englishLanguageUnCheckHandler = () => {
    let languages = this.state.language.filter(
      (language) => language !== "English"
    );
    this.setState({ language: languages });
  };
  otherLanguageCheckHandler = () => {
    this.setState({
      language: [...this.state.language, "Other"],
    });
  };
  otherLanguageUnCheckHandler = () => {
    let languages = this.state.language.filter(
      (language) => language !== "Other"
    );
    this.setState({ language: languages });
  };
  editorHandler = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  btnClickHandler = () => {
    let firstname = this.state.firstname;
    let lastname = this.state.lastname;
    let dob = this.state.dob;
    let number = this.state.number;
    let email = this.state.email;
    let address = this.state.address;
    let country = this.state.country;
    let city = this.state.city;
    let gender = this.state.gender;
    let language = this.state.language;
    let comments = this.state.comments;
    if (
      firstname !== "" &&
      lastname !== "" &&
      number !== "" &&
      email !== "" &&
      address !== "" &&
      country !== "" &&
      city !== "" &&
      gender !== "" &&
      language !== "" &&
      comments !== ""
    ) {
      this.props.allData({
        firstname,
        lastname,
        dob,
        number,
        email,
        address,
        country,
        city,
        gender,
        language,
        comments,
      });
    } else {
      this.setState({
        error: true,
      });
    }
    if (this.state.error) {
      setTimeout(() => {
        this.setState({
          error: false,
        });
      }, 1000);
    }
  };
  render() {
    return (
      <center className="form">
        <h3>User Form</h3>
        <table>
          <tbody>
            <tr>
              <td>Firstname</td>
              <td>
                <JqxInput
                  width={"100%"}
                  height={25}
                  onChange={this.firstnameChangeHandler}
                />
              </td>
              <td>Lastname</td>
              <td>
                <JqxInput
                  width={"100%"}
                  height={25}
                  onChange={this.lastnameChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>
                <JqxDateTimeInput
                  width={"100%"}
                  height={25}
                  onValueChanged={this.dateChangeHandler}
                />
              </td>
              <td>Mobile</td>
              <td className="mobile">
                <JqxNumberInput
                  spinButtons={false}
                  inputMode={"simple"}
                  width={"100%"}
                  height={25}
                  digits={10}
                  decimalDigits={0}
                  onChange={this.numberChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>Email ID</td>
              <td colSpan={3} className="email">
                <JqxInput
                  width={"100%"}
                  height={25}
                  onChange={this.emailChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td colSpan={3} className="textarea">
                <JqxTextArea
                  width={"100%"}
                  height={100}
                  onChange={this.addressChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <JqxDropDownList
                  onChange={this.countryHandler}
                  width={"100%"}
                  height={30}
                  source={this.state.countries}
                />
              </td>
              <td>City</td>
              <td>
                <JqxDropDownList
                  style={{ float: "left", marginTop: "10px" }}
                  onSelect={this.cityHandler}
                  width={"100%"}
                  height={30}
                  source={this.state.cities}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td className="gender" colSpan={3}>
                <JqxRadioButton
                  onChecked={this.checkedMaleHandler}
                  className="male"
                >
                  Male
                </JqxRadioButton>
                <JqxRadioButton
                  onChecked={this.checkedFemaleHandler}
                  className="female"
                >
                  Female
                </JqxRadioButton>
                <JqxRadioButton
                  onChecked={this.checkedOtherHandler}
                  className="other"
                >
                  Other
                </JqxRadioButton>
              </td>
            </tr>
            <tr>
              <td>Languages Know</td>
              <td className="language" colSpan={3}>
                <JqxCheckBox
                  onChecked={this.bengaliLanguageCheckHandler}
                  onUnchecked={this.bengaliLanguageUnCheckHandler}
                >
                  Bengali
                </JqxCheckBox>
                <JqxCheckBox
                  onChecked={this.hindiLanguageCheckHandler}
                  onUnchecked={this.HindiLanguageUnCheckHandler}
                >
                  Hindi
                </JqxCheckBox>
                <JqxCheckBox
                  onChecked={this.englishLanguageCheckHandler}
                  onUnchecked={this.englishLanguageUnCheckHandler}
                >
                  English
                </JqxCheckBox>
                <JqxCheckBox
                  onChecked={this.otherLanguageCheckHandler}
                  onUnchecked={this.otherLanguageUnCheckHandler}
                >
                  Other
                </JqxCheckBox>
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td colSpan={3}>
                <JqxTooltip
                  position={"mouse"}
                  name={"moveTooltip"}
                  content={"Upload your photo"}
                >
                  <JqxFileUpload width={290} fileInputName={"fileToUpload"} />
                </JqxTooltip>
              </td>
            </tr>
            <tr>
              <td>Comments/Bio</td>
              <td colSpan={3}>
                <JqxEditor
                  onChange={this.editorHandler}
                  width={"100%"}
                  height={200}
                  tools="bold italic underline | left center right"
                />
              </td>
            </tr>
            <tr className="btns__row">
              <td className="btns" colSpan={4}>
                <center>
                  <JqxButton
                    onClick={this.btnClickHandler}
                    className="mybtn"
                    width={120}
                    height={30}
                  >
                    Add User
                  </JqxButton>
                  {this.state.error ? (
                    <span className="error__msg">All fields are required!</span>
                  ) : null}
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    );
  }
}

export default Form;
