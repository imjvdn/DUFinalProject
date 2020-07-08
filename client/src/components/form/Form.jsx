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
        <textarea className="form-control" rows="4" {...props} />
      </div>
    );
  }
  
  export function FormBtnRest(props) {
    return (
      <button {...props} onClick={props.handleSearchRestaurant} style={{ float: "center", marginBottom: 10 }} className="form-btn">
        {props.children}
      </button>
    );
  }
  export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "center", marginBottom: 10 }} className="form-btn">
        {props.children}
      </button>
    );
  }

  export function CreateBtn(props) {
    return (
      <button {...props} className="create-btn">
        {props.children}
      </button>
    );
  }
  export function TrendingBtn(props) {
    return (
      <button {...props} onClick={props.onClick} className="trend-btn">
        {props.children}
      </button>
    )
  }