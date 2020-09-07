import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class MyComponent extends Component {
    static defaultProps ={
        modules : {
            toolbar: [
              [{'size': ['small', false, 'large', 'huge']  }],
              [{ 'header': [1, 2, 3] }],
              [{'font': []}],
              ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
              [{ 'script': 'sub'}, { 'script': 'super' }],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+2'}, {'indent': '+1'}],
              [{ 'align': [] }],
              ['link', 'image'],
              ['clean'],
              [{'color': []}],
              [{'background': []}],
              [{ 'direction': 'rtl' }],
            ],
          }
    }
    constructor(props) {
      super(props);
      this.state = {
        text: "",
      }
    }
  
    render() {
      return (
        <div className="text-editor">
          <ReactQuill 
                theme="snow"
                modules={this.props.modules}>
          </ReactQuill>
        </div>
      );
    }
  }
  
  export default MyComponent;