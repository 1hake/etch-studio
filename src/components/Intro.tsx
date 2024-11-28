import React from "react";

export const Intro: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 ">

      <div className="lg:w-1/2 text-center lg:text-left space-y-2">
        <p className="dark:text-white text-black leading-relaxed">
          Après des années de recherches et d’expérimentations en tant qu’autodidacte, je vous ouvre aujourd’hui les portes de mon univers.
        </p>
        <p className="dark:text-white text-black leading-relaxed">
          J’aime sublimer la matière brute pour créer des œuvres uniques, un contraste entre formes et matériaux.

        </p>
                <p className="dark:text-white text-black leading-relaxed">

          Entre la douceur du bois, la noblesse du tuffeau et la brillance de l’aluminium, j’apporte avec une grande finesse et un soin du détail, l’harmonie, la lumière et l’émotion. 

        </p>
        <p className="dark:text-white text-black leading-relaxed">

          Chaque création a sa propre histoire. 
Certaines d’entre elles naissent à partir du réemploi, permettant d’offrir une seconde vie à ces matières, et ainsi créer avec originalité des sculptures, lampes et autres objets, avec une inspiration contemporaine et organique.
        </p>
        
      </div>

      {/* Image */}
      <div className="lg:w-64 w-full mt-8 lg:mt-0 flex justify-center">
        <div className="lg:w-full w-full lg:h-full rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/204fd084-ea56-41fa-b836-31648dac67ef.jpg?alt=media&token=69d7ac97-ad89-47ab-ac17-7c278a45eca2"
            alt="À propos de nous"
            className="w-full h-full object-contain	"
          />
        </div>
      </div>
    </section>
  );
};
