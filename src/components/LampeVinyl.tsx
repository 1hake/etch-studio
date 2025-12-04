import React from "react";
import { SectionTitle } from "./SectionTitle";
import Button from "./Button";
import vinylImage from "../images/vinyle.jpeg";
import vinylImageDark from "../images/vinyle-dark.jpeg";
import { useDarkMode } from "../hooks/useDarkMode";

export const LampeVinyl = () => {
    const isDark = useDarkMode();
    const currentImage = isDark ? vinylImageDark : vinylImage;

    const handleOrder = () => {
        // Handle order logic here - could open a contact form, redirect to a form, etc.
        console.log("Order lamp clicked");
    };

    return (
        <section id="lampe-vinyl" className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    subtitle="Personnalise ta décoration avec une lampe unique"
                >
                    Lampe Vinyl
                </SectionTitle>

                <div className="w-full">
                    <div className="relative overflow-hidden rounded-2xl bg-surface dark:bg-dark-surface elevated-card">
                        {/* Desktop Column Layout */}
                        <div className="flex flex-col lg:flex-row">
                            {/* Image Section */}
                            <div className="relative lg:w-1/2">
                                <div className="relative h-96 lg:h-[600px] overflow-hidden">
                                    <img
                                        src={currentImage}
                                        alt="Lampe Vinyl colorée"
                                        className="w-full h-full object-cover object-center transition-all duration-[1500ms] ease-in-out"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-display-md md:text-display-lg font-bold text-text-primary dark:text-dark-text-primary mb-6">
                                        Commande ta lampe couleur au choix
                                    </h3>



                                    <Button
                                        onClick={handleOrder}
                                        variant="primary"
                                        size="lg"
                                        className="mb-8 bg-black text-white hover:bg-gray-800 border-black"
                                    >
                                        Commander maintenant
                                    </Button>

                                    {/* Features inline for desktop */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
                                        <div className="text-center lg:text-left">
                                            <h4 className="text-body-md font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                                                Personnalisable
                                            </h4>
                                            <p className="text-body-sm text-text-secondary dark:text-dark-text-secondary">
                                                Large gamme de couleurs
                                            </p>
                                        </div>

                                        <div className="text-center lg:text-left">
                                            <h4 className="text-body-md font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                                                LED Économique
                                            </h4>
                                            <p className="text-body-sm text-text-secondary dark:text-dark-text-secondary">
                                                Basse consommation
                                            </p>
                                        </div>

                                        <div className="text-center lg:text-left">
                                            <h4 className="text-body-md font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                                                Fait Main
                                            </h4>
                                            <p className="text-body-sm text-text-secondary dark:text-dark-text-secondary">
                                                Créé avec soin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};