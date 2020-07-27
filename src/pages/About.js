import React from "react";
import Banner from "../assets/silvana.jpg"
import Modal from '../components/Modal'

export const About = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <Modal/>
      <div class="container">
        <h1 class="display-4">Баннер</h1>
        <div className="banner"><img className="img-fluid turn active" src={Banner} alt="image"/></div>
        <p class="lead">Чтобы рассмотреть баннер кликните на него.</p>
      </div>
    </div>
  );
};
