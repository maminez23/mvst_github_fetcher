import React from "react";
import {Container, Nav} from "react-bootstrap";
import Search from "./Search.js";
import UserInformation from "./user_information";
import ReposInformation from "./repos_information";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageRepos: this.props.repos && this.props.repos.slice(0, 8), // array of repos to display per page(pagination)
            current: this.props.repos, //array containing all the repos used by the filter function
            repos: true,
            view: false,
            page: 1,
        };
    }
    // responsible for filtering the repos
    filterRepos(e) {
        if (e.target.value == "") {
            this.setState({pageRepos: this.props.repos.slice(0, 8)});
            this.setState({current: this.props.repos});
        } else {
            this.setState({
                pageRepos: this.props.repos
                    .filter((element, i) => {
                        return element.name.toLowerCase().includes(e.target.value.toLowerCase());
                    })
                    .slice(0, 8),
            });
            this.setState({
                current: this.props.repos
                    .filter((element, i) => {
                        return element.name.toLowerCase().includes(e.target.value.toLowerCase());
                    })
                    .slice(0, 8),
            });
        }
    }
    // responsible for rendering the overview of the profile when you select overview
    renderView(e) {
        this.setState({repos: false, view: true});
        e.target.classList.add("active");
        document.getElementsByClassName("change")[1].classList.remove("active");
    }

    // responsible for rendering the overview of the profile when you select overview
    renderRepos(e) {
        this.setState({repos: true, view: false});
        e.target.classList.add("active");
        document.getElementsByClassName("change")[0].classList.remove("active");
    }

    // used for the pagination to render 8 repos per page
    changeRepos(e) {
        this.setState({
            page: e.target.innerText,
            pageRepos: this.props.repos.slice(
                (e.target.innerText - 1) * 8,
                (e.target.innerText - 1) * 8 + 8
            ),
        });
    }

    render() {
        return (
            <Container>
                <Search onSearch={this.props.onSearch.bind(this)}/>
                {this.props.loading ? <div className="loader"/> :
                    this.props.user ?
                        <Container>
                <div className="top-nav">
                    <Nav as="ul">
                        <Nav.Item onClick={this.renderView.bind(this)} as="li">
                            <Nav.Link className="change "><img src="https://i.ibb.co/m86SGDn/Overviews.jpg"/>Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={this.renderRepos.bind(this)} as="li">
                            <Nav.Link className="change active">
                                <img src="https://i.ibb.co/DD2ddjy/Repo.jpg"/>Repositories
                                <span className="nbr-repo">{this.props.repos.length}</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <hr className="line"/>
                <div className="row">
                    <div className="col-3" >
                        <UserInformation user={this.props.user}/>
                    </div>
                    <div className="col-9">
                        <ReposInformation
                            filterRepos={this.filterRepos.bind(this)}
                            pageRepos={this.state.pageRepos}
                            current={this.state.current}
                            changeRepo={this.changeRepos.bind(this)}
                            view_active={this.state.view}
                        />
                    </div>
                </div>
                        </Container>:
                    <div className="error-container">
                               <center>
                                   <img className="error-image" src="https://img.icons8.com/windows/452/no-user.png"/>
                                   <br/>
                                   {/*<span className="error-span">No User Found</span>*/}
                                   <span className="error-span"/>
                               </center>
                    </div>
                }
            </Container>
        );
    }
}

export default Profile;
