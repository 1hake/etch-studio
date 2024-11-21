import React from "react";

export const Intro: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between ">

      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <p className="dark:text-white text-black leading-relaxed">
          Artiste sculpteur, il sublime la matière brute pour créer des œuvres uniques. Entre la douceur du bois, la noblesse du tuffeau et l'élégance de ses lampes sculpturales, son travail mêle harmonie, lumière et émotion. Chaque pièce raconte une histoire, entre traditions artisanales et inspirations contemporaines.
        </p>
        
      </div>

      {/* Image */}
      <div className="lg:w-96 w-full mt-8 lg:mt-0 flex justify-center">
        <div className="lg:w-96 w-full lg:h-52 rounded-lg shadow-lg overflow-hidden">
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
