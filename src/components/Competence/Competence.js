import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSymfony, faNodeJs, faReact, faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import "./Competence.css"



export default class Competence extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className={"flex w-full px-[5rem]"}>
                    <ul className={"container-isometrique"}>
                        <li style={{"--i": 7}}>
                            Symfony
                        </li>
                        <li style={{"--i": 6}}>
                            NodeJS
                        </li>
                        <li style={{"--i": 5}}>
                            ReactJS
                        </li>
                        <li style={{"--i": 4}}>
                            VueJS
                        </li>
                        <li style={{"--i": 3}}>
                            React Native
                        </li>
                        <li style={{"--i": 2}}>
                            Github
                        </li>
                        <li style={{"--i": 1}}>
                            Database
                        </li>
                    </ul>
                </div>

            </>
        )
    }
}
