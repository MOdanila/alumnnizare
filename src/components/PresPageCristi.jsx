import { useState } from "react";
import cristi1 from "../poze/IMG-20250514-WA0060.jpg";
import { useNavigate } from "react-router-dom";
function PresPageCristi() {
  const navigate = useNavigate();
  const gotoPoze = () => {
    navigate("/poze");
  };
  const prank = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };
  return (
    <div className="PresPage">
      <div className="upper">
        <div className="left">
          <img className="pozaCristi" src={cristi1} alt="" />
          <h1>Cristian Galiceanu</h1>
          <h2>AKA "Papagalu are-o boala Cristi Gi in pl goala"</h2>
          <h3>
            (m-a vazut o colega cum lucram la asta si a intrebat "awww are
            sindrom down?")
          </h3>
        </div>
        <div className="right">
          <p>
            Iată că a venit în sfârșit momentul mult așteptat. Se alumnizează o
            generație. BESTHub is out. Pentru cei ce nu mă cunoașteți, sunt
            Cristi aka Cristi G cum îmi place mie sau Găli cum vă place vouă. A
            fost o experiență de 4 ani, destul de lungă, dar nu mai lungă decât
            anii mei de facultate. Mi-ar plăcea să cred că m-am implicat foarte
            mult și că am avut câteva realizări chiar foarte importante cum ar
            fi: am făcut limousine de o grămadă de ori, am un timp de invidiat
            la beer contest, chiar am adus și papagalul (muie Brasov) înapoi
            acasă, am intrat în BIG, sunt chiar și în pompa. Eu zic că este de
            ajuns, iar dacă nu considerați cumva asta atunci ghinion vouă, nuj
            ce ați putea să îmi faceți, poate să mă propuneți spre former, I
            don`t know! Pe lângă toate acestea, cred totuși că mi-am adus și eu
            cumva amprenta asupra acestei organizații, fiind creatorul zâmbiței,
            emoji de care pare că nu vă săturați așa că o să vă umplu cu el ori
            de câte ori am ocazia. De asemenea am observat că apreciați foarte
            mult bancurile mele, așa că am să vă las unul scurt aici: Doi
            băștinași, unul cu experiență și unul începător, mergeau la
            vânătoare.
            <br />
            <br /> Cel cu experiență spune:
            <br />
            „Azi mergem la vânătoare de pliznăi”
            <br />
            „Dar ce sunt ăia pliznăi?”
            <br />
            „N-am nicio idee, dar când îndrept arma spre ei încep să strige:
            „please no, please no”😁
          </p>
          <button onClick={prank}>
            Buton pt HAHA ca gluma nu a fost destul
          </button>
          <p>
            Per total consider că BEST-ul m-a schimbat foarte mult. Am intrat
            plin de speranță, iar acum ies cu mai puțin păr în cap. Dar n-aș
            schimba absolut nimic din toată experiența. Vă mulțumesc tuturor că
            ați făcut parte din ea!❤😁
          </p>
        </div>
      </div>
      <div>
        <button onClick={gotoPoze}>
          Dovezi fotografice ale infractiunilor
        </button>
      </div>
    </div>
  );
}

export default PresPageCristi;
