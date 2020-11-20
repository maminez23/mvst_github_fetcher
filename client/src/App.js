import "./css/App.css";
import React from "react";
import axios from "axios";
import Profile from "./Profile.js";
import HomePage from "./home_page";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        repos: [],  // array of all the user repos
        user: null, // user information
        first_visit: true, // used for redirect the user to the home page in case you activate it in the routes
        loading: false, // to display the spin while loading data
    };
  }
    //function responsible for searching the user github account and get his repositories
  async search(term) {
    this.setState({loading: true, first_visit: false });
    await axios
      .post(`${process.env.REACT_APP_URL}api/repos`, { term })
      .then((response) => {
        console.log(response);
        if (response.data.name === "Error") {
          this.setState({ repos: [], user: null, loading: false });
        } else {
          this.setState({
                repos: response.data.repos,
                user: response.data.user,
                loading: false,
          });

            document.getElementsByClassName("search-input")[0].value = "";
        }
      });
  }


  render() {
    return (
        // at first there was HomePage lack of time I did'nt get the chance to work on some details to make it perfect. you still can activate it
        // by disabling the comments inside the router and comment the last Route tag
        <Router>
          {/*<Route exact path='/' component={() => !this.state.user ? <HomePage user={this.state.user} found={this.state.found} search={this.search.bind(this)}/> :*/}
          {/*    <Redirect to='/profile'/>}/>*/}

          {/*<Route path='/profile' component={() => this.state.first_visit ? <Redirect to='/'/> : */}
            <Route exact path='/' component={() => <Profile loading = {this.state.loading} user={this.state.user} repos={this.state.repos} onSearch={this.search.bind(this)}/>}
          />

        </Router>

    );
  }
}

export default App;
