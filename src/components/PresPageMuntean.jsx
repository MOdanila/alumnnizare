import { useState } from "react";
import muntean1 from "../poze/MUNTI (106 of 281).jpg";
import { useNavigate } from "react-router-dom";
function PresPageMuntean() {
  const navigate = useNavigate();
  const gotoPoze = () => {
    navigate("/poze");
  };
  return (
    <div className="PresPage">
      <div className="upper">
        <div className="left">
          <img className="poza" src={muntean1} />
          <h1>Razvan Muntean</h1>
          <h2>AKA Degetica</h2>
        </div>
        <p>
          Salut, eu sunt Razvan si asa cum probabil stiti sau nu am incercat sa
          fiu orientat mai mult pe partea de IT, ca JAVA ul. Ideea e ca am avut
          un parcurs destul de diferit in BEST pentru ca prima mea candidatura a
          fost de coordonator interimar IT unde, pe moment, am zis ca o sa fie
          cea mai proasta candidatura pe care o sa o am, dar aparent au venti
          doua de MDV un an mai incolo. Am inceput de jos, cu mini echipa de PR
          in EBEC (sa nu afle Andi ca dupa rade de mine) si dupa am inceput cu
          IT la BIT, Academic la Summer, Mo de BCDs. In perioada asta a fost
          primul Teambuilding de LBG unde mi-am facut lansarea ca profesor de
          matematica cu radical de -1 la cererea Lui {' '}
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href =
                "https://imgflip.com/memegenerator/90133015/2-gay-black-mens-kissing")
            }
          >
            (Am pus cu litera mare ca ma refer la Cristian Stefan Galiceanu)
          </span>
          si acolo am intampinat persoana care a fost o influenta foarte mare
          pentru mine atat in bine dar si in rau, anume Andi Maria
          Chichilindreanu :))). Ulterior am aplicat ca Mo de BIT si am venit la
          aceeasi sedinta cu un site pentru a candida ca coordonator al
          departamentului IT. Si surpriseee am reusit 2/2 din acestea, desi
          weekendul ala a fost 2/3 reusite, dar nu conteaza. Am zis ca daca tot
          in perioada asta am inceput sa fiu mai activ, am zis sa inchei acest
          ciclu tot in cadrul unui AG si tot print-un site!! Cam asta am facut,
          sotto o sa mai zic chestii si live dar am zis sa ma limitez la ce am
          facut si a fost de impact pentru mine!!! (Ati observat ca nu am zis
          nimic de departamentul Lorenei, ala e in alta liga pe care doar unii o
          stiu ❤)
        </p>
      </div>
      <div>
        <button onClick={gotoPoze}>
          Dovezi fotografice ale infractiunilor
        </button>
      </div>
    </div>
  );
}

export default PresPageMuntean;
