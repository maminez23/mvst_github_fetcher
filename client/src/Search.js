import React from "react";
import "./css/App.css"
import { Menubar } from 'primereact/menubar';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({ term: "" });
  }

  render() {

    return (

        <div className="card">
          <Menubar start={[<strong className="p-mr-2" height="40">Github</strong>]} end={[ <InputText placeholder="User's name" onChange={this.onChange.bind(this)} className="search-input"/>, <Button icon="pi pi-search" className="p-button" onClick={this.search.bind(this)}/>]}/>
        </div>

    );
  }
}

export default Search;
