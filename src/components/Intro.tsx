import React from "react";

export const Intro: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between ">

      <div className="lg:w-1/2 text-center lg:text-left space-y-2">
        <p className="dark:text-white text-black leading-relaxed">
          Après des années de recherches et d'expérimentations en tant qu'autodidacte, je vous ouvre aujourd'hui les portes de mon univers.
        </p>
        <p className="dark:text-white text-black leading-relaxed">
          J'aime sublimer la matière brute pour créer des œuvres uniques, un contraste entre formes et matières.
        </p>
                <p className="dark:text-white text-black leading-relaxed">

          Entre la douceur du bois et la noblesse du tuffeau, j'essaie d'apporter avec une grande finesse et un soin du détail, l' harmonie, la lumière et l'émotion.
        </p>
        <p className="dark:text-white text-black leading-relaxed">

          Ces pièces ont leur propre histoire. Certaines matières et certains matériaux sont transformés et/ou détournés, pour leur offrir une seconde vie, et ainsi créer avec originalité des sculptures, lampes et autres objets du quotidien avec une inspiration contemporaine.
        </p>
        
      </div>

      {/* Image */}
      <div className="lg:w-96 w-full mt-8 lg:mt-0 flex justify-center">
        <div className="lg:w-96 w-full lg:h-64 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/portrait.jpeg?alt=media&token=27a3a4cc-debe-4d48-98c8-a1c383dac354"
            alt="À propos de nous"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
