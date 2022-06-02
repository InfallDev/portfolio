import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./Navigation.css";
import Accueil from "../Accueil/Accueil"
import Competence from "../Competence/Competence";

export default function Navigation(){
    return(
      <Router>
          <div>
              <nav className={"flex justify-center w-full py-4 mb-[5rem] items-start"}>
                  <ul className={"flex justify-around min-w-1/3"}>
                      <li className={"navigation-item flex flex-col mr-4"}>
                          <Link to={"/"}>Accueil</Link>
                          <Link to={"/"}>Accueil</Link>
                      </li>
                      <li className={"navigation-item flex flex-col mr-4"}>
                          <Link to={"/competence"}>Compétences</Link>
                          <Link to={"/competence"}>Compétences</Link>
                      </li>
                      <li className={"navigation-item flex flex-col mr-4"}>
                          <Link to={"/projet"}>Mes projets</Link>
                          <Link to={"/projet"}>Mes projets</Link>
                      </li>
                      <li className={"navigation-item flex flex-col mr-4"}>
                          <Link to={"/contact"}>Contact</Link>
                          <Link to={"/contact"}>Contact</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/" element={<Accueil />}/>
                  <Route path="/projet" element={<div>Projet</div>}/>
                  <Route path="/competence" element={<Competence />}/>
                  <Route path="/contact" element={<div>Contact</div>}/>
              </Routes>
          </div>
      </Router>
    );
}
