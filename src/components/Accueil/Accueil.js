import React, {Component} from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import Orbit from "./subComponent/Orbit/Orbit.js";
import "./accueil.css"



export default class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className={"flex flex-wrap justify-center mb-10 w-[80%] m-auto"}>

                    <div className={"px-5 text-start w-full md:w-1/2 relative content mb-5"}>
                        <div className={"encart bg-amber-200 rounded-xl"}></div>
                        <p className={"text-4xl lg:text-6xl xl:text-8xl font-normal mb-5 text-zinc-800"}>
                            Hey je suis <br/>
                            <span className={"font-bold text-amber-500 underline decoration-amber-500"}>Kéziah&nbsp;THIBO</span>
                        </p>
                        <p className={"text-gray-600 mb-5 text-4xl sm:text-2xl"}>
                            Je suis un développeur freelance full-stack en mobile et web.<br/>
                        </p>
                        <button className={"outline outline-amber-400 rounded-xl border-1 p-2 hover:bg-amber-500 hover:outline-0 transition duration-200 text-amber-600 font-semibold hover:text-white"}>
                            <Link to={"/projet"}>Voir mes projets</Link>
                        </button>

                    </div>
                    <div className={"w-full md:w-1/2 flex justify-center align-center content"} id={"orbit"}>
                        <Orbit />
                    </div>
                </div>
                <div className={"w-full flex content flex-wrap"}>
                    <div className={"flex flex-col p-5 bg-indigo-100 rounded-r-xl max-w-5xl w-1/2 content"}>
                        <p className={"text-6xl mb-10 text-indigo-700"}>Qui suis-je ?</p>
                        <p className={"text-xl"}>
                            Je m'appelle <strong className={"text-indigo-600"}>Kéziah</strong>. J'ai 23 ans. Je suis d'abord un passionné de développement informatique.<br/>
                            Les technologies que j'utilise sont <strong className={"text-indigo-600"}>ReactJS</strong> et <strong className={"text-indigo-600"}>VueJS</strong> pour le front, <strong className={"text-indigo-600"}>Symfony</strong> et
                            <strong className={"text-indigo-600"}>NodeJS</strong> pour le back.<br/>
                            Je fais aussi du mobile avec <strong className={"text-indigo-600"}>React native</strong>.<br/>
                            Mon activité principale est la <strong className={"text-indigo-600"}>conception d'application mobile</strong> pour les start-up mais je réalise aussi des <strong className={"text-indigo-600"}>sites web </strong>
                            et des <strong className={"text-indigo-600"}>applications web</strong>.<br/>
                        </p>
                    </div>
                    <div className={"flex flex-col items-center p-5 max-w-5xl w-1/2 content"}>
                        <p className={"text-6xl mb-10 text-zinc-800 text-center"}>Vous souhaitez mon <span className={"text-6xl mb-10 text-amber-500"}>CV</span> ?</p>
                        <button className={"btn-gradient-amber-blur"}> Télécharger mon CV </button>
                        <p className={"text-2xl text-zinc-800 mb-5 text-center"}>Vous pouvez me retrouver aussi sur :</p>
                        <div className={"flex justify-around w-1/2"}>
                            <a href={"https://www.superprof.fr/titulaire-bac-aimerais-transmettre-savoir-passion-developpement-web-travers-cours-peux.html"} className={"bg-amber-500 text-2xl p-2 rounded-md text-white min-w-[3rem] flex justify-center items-center"} target={"_blank"} rel="noreferrer">
                                <FontAwesomeIcon icon={faChalkboardTeacher}/>
                            </a>
                            <a href={"https://www.linkedin.com/in/k%C3%A9ziah-thibo-405a70216/"} className={"bg-amber-500 text-2xl p-2 rounded-md text-white min-w-[3rem] flex justify-center items-center"} target={"_blank"} rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href={"https://www.instagram.com/infalldev/"} className={"bg-amber-500 text-2xl p-2 rounded-md text-white min-w-[3rem] flex justify-center items-center"} target={"_blank"} rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
