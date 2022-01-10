import React, { Fragment } from "react";
import about from "./assets/img/home..jpg";
import wano from "./assets/img/wano.png";

export default function About() {
  return (
    <Fragment>
      <div>
        <img className="about" src={about} alt="" />
      </div>
      <div className="txt-about">
        <h1>ABOUT</h1>
      </div>
      <div className="about-info">
        <img src={wano} alt="" />
        <div className="wano-txt">
          <span>WANO STORY <i class="fas fa-skull-crossbones"></i></span>
          <p>
            L'arc Pays des Wa est le trente et unième Arc de la série et le
            quatrième Arc de la Saga Quatre Empereurs de One Piece, l'arc
            suivant celui de la Rêverie. <br /> <br /> L'Alliance Ninja-Pirate-Mink-Samouraï
            met son plan en marche pour recruter les Pirates de Barbe Blanche et
            libérer le Pays des Wa du contrôle de Kaido et de son shogun.
            <br /><br /> Sur une île du Nouveau Monde, les Gardiens patientent à bord de leur navire tandis que Nekomamushi rend visite à Marco, et essaie, en vain, de le convaincre de se joindre à l'Alliance Ninja-Pirate-Mink-Samouraï. L'ancien bras droit de Barbe Blanche, qui est occupé à soigner les habitants du village, explique à Nekomamushi que cette île est le seul héritage laissé par son père spirituel, et déclare son intention d'y rester pour la protéger de la menace d'Edward Weeble. Selon Marco, le nouveau Shichibukai menace en effet la paix de l'île, car sa mère, Miss Bakkin, a connu Barbe Blanche et pourrait s'attaquer à son île natale en quête de son héritage. Marco refuse donc de se rendre au Pays des Wa, mais demande néanmoins à Nekomamushi de transmettre un message à Luffy.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
