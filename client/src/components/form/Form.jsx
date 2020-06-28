import React from "react";


export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }
  
  export function TextArea(props) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="6" {...props} />
      </div>
    );
  }
  
  export function FormBtn(props) {
    return (
      <button {...props} onClick={props.handleSearchSubmit} style={{ float: "center", marginBottom: 10 }} className="form-btn">
        {props.children}
      </button>
    );
  }