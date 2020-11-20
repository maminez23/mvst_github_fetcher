import React from "react";
import "./css/App.css";
import {Redirect} from 'react-router-dom'
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            found: true,
        };
    }

    onChange(e) {
        this.setState({
            term: e.target.value,
        });
        this.setState({ found: true });
    }

    search() {
        this.props.search(this.state.term);
        this.setState({ term: "" });
        if (!this.props.user){
            this.setState({ found: false });
        }
    }


    render() {
        return (
            <div>
                <center>
                    <div className="cover-page">
                        <h1 color="dark">
                            Search For repositories on
                        </h1>
                            <div className="p-col-12 p-md-4 back">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Search User" onChange={this.onChange.bind(this)} className="search-input"/>
                                    <Button label="Search" onClick={this.search.bind(this)}/>
                                </div>
                                {(this.state.found) ? null : <span className="warning-color-dark">User not found</span> }
                            </div>
                    </div>
                </center>
                {(this.props.user) && <Redirect to='/profile'/>}
            </div>

        )
    }
}

export default HomePage;