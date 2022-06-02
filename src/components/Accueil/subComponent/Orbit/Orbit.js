import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./orbit.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSymfony, faNodeJs, faReact, faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import memoji from "../../../../assets/moi_qui_dev.png";

const PAUSED = 'paused';
const PLAY = 'play';

export default class Orbit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateAnimation: PLAY
        }
    }

    render() {
        return (
            <div className={"h-96 w-96 rounded-full relative flex justify-center items-center container-orbit"}>
                <img className={"h-60 mx-auto "} src={memoji}  alt={"memoji"}/>
                <ul className={`orbit ${this.state.stateAnimation}`} >
                    <li className={"orbit-item"} onMouseEnter={() => this.setState({stateAnimation: PAUSED})} onMouseLeave={() => this.setState({stateAnimation: PLAY})}>
                        <Link to={"/competence?competence=symfony"}>
                            <div className={`orbit-content ${this.state.stateAnimation}`}>
                                <FontAwesomeIcon icon={faSymfony} />
                            </div>
                        </Link>
                    </li>
                    <li className={"orbit-item"} onMouseEnter={() => this.setState({stateAnimation: PAUSED})} onMouseLeave={() => this.setState({stateAnimation: PLAY})}>
                        <Link to={"/competence?competence=symfony"}>
                            <div className={`orbit-content ${this.state.stateAnimation}`}>
                                <FontAwesomeIcon icon={faReact} />
                            </div>
                        </Link>
                    </li>
                    <li className={"orbit-item"} onMouseEnter={() => this.setState({stateAnimation: PAUSED})} onMouseLeave={() => this.setState({stateAnimation: PLAY})}>
                        <Link to={"/competence?competence=symfony"}>
                            <div className={`orbit-content ${this.state.stateAnimation}`}>
                                <FontAwesomeIcon icon={faNodeJs} />
                            </div>
                        </Link>
                    </li>
                    <li className={"orbit-item"} onMouseEnter={() => this.setState({stateAnimation: PAUSED})} onMouseLeave={() => this.setState({stateAnimation: PLAY})}>
                        <Link to={"/competence?competence=symfony"}>
                            <div className={`orbit-content ${this.state.stateAnimation}`}>
                                <FontAwesomeIcon icon={faDatabase}/>
                            </div>
                        </Link>
                    </li>
                    <li className={"orbit-item"} onMouseEnter={() => this.setState({stateAnimation: PAUSED})} onMouseLeave={() => this.setState({stateAnimation: PLAY})}>
                        <Link to={"/competence?competence=symfony"}>
                            <div className={`orbit-content ${this.state.stateAnimation}`}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </div>
                        </Link>
                    </li>
                    <li className={"orbit-item"} onMouseEnter={() => this.setState({stateAnimation: PAUSED})} onMouseLeave={() => this.setState({stateAnimation: PLAY})}>
                        <Link to={"/competence?competence=symfony"}>
                            <div className={`orbit-content ${this.state.stateAnimation}`}>
                                <FontAwesomeIcon icon={faVuejs}/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
