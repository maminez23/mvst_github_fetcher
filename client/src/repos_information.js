import {MDBContainer, MDBListGroup, MDBListGroupItem, MDBPageItem, MDBPageNav, MDBPagination} from "mdbreact";
import moment from "moment";
import React from "react";
import {InputText} from "primereact/inputtext";


export  default function ReposInformation (props){
    return(
        <div>
            <div id="content">
                {props.view_active ?
                    <div className="overview-container-box">Component Overview should be rendered
                        here!</div> :
                    <div className="repos-container-box">
                        <div className="p-inputgroup search-repo">
                            <InputText placeholder="Search Repository" onKeyUp={props.filterRepos} className="search-input"/>
                        </div>

                        <div className="repos">
                            <MDBContainer>

                                <MDBListGroup style={{width: "100%"}}>
                                    {props.pageRepos.map((e, i) => {
                                        return (
                                            <MDBListGroupItem key={i} className="one-repo-container">
                                                <a href={e.html_url} target="_blank">
                                                            <span className="one-repo-name">
                                                              {e.name}
                                                            </span>
                                                </a>
                                                <br/>
                                                {e.language ?
                                                    <div className="one-repo-language-container">
                                                        <div className={e.language}/>

                                                        <span className="one-repo-language">
                                                                    {e.language}
                                                                </span>
                                                    </div> : null}
                                                <div className="one-repo-forks-count-container">
                                                    <img className="forks-count-icon"
                                                         src="https://user-images.githubusercontent.com/17777237/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png"/>
                                                    <span className="one-repo-forks-count">
                                                            {e.forks_count}
                                                          </span>
                                                </div>
                                                <div className="one-repo-updated_at-container">
                                                          <span className="one-repo-updated_at">
                                                            {" "}
                                                              Updated{" "}
                                                              {
                                                                  (" ",
                                                                      moment(
                                                                          e.updated_at
                                                                              .slice(0, 10)
                                                                              .split("-")
                                                                              .join("") +
                                                                          e.updated_at
                                                                              .slice(11, 19)
                                                                              .split(":")
                                                                              .join(""),
                                                                          "YYYYMMDDhhmmss"
                                                                      ).fromNow())
                                                              }
                                                          </span>
                                                </div>
                                            </MDBListGroupItem>
                                        );
                                    })}
                                </MDBListGroup>
                            </MDBContainer>
                            <span className="sr-only">(current)</span>
                                <MDBPagination className="mb-5">
                                    {props.current.slice(0, Math.ceil(props.current.length / 8)).map((element, index) => {
                                        return (
                                            <MDBPageItem onClick={props.changeRepo} key={index}>
                                                <MDBPageNav>{index + 1}</MDBPageNav>
                                            </MDBPageItem>
                                        );
                                    })}
                                </MDBPagination>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}