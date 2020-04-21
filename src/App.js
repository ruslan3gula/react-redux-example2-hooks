import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props.editText);
  // const [value, setValue] = useState("asdcsdcsdc");
  return (
    <div className="App">
      <input onChange={e => props.editText(e)} type="text" />
      <button>Click me</button>
      <input value={props.text} type="text" disabled />
    </div>
  );
}

const mapStateToProps = state => {
  return { text: state.text };
};

const mapDispatchToProps = dispatch => {
  return {
    editText: e => dispatch({ type: "EDIT_TEXT", text: e.target.value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
