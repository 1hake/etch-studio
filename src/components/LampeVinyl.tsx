import React from "react";
import { SectionTitle } from "./SectionTitle";
import Button from "./Button";
import vinylImage from "../images/vinyle.jpeg";
import vinylImageDark from "../images/vinyle-dark.jpeg";
import { useDarkMode } from "../hooks/useDarkMode";
import useGeneralInfo from "../hooks/useGeneralInfo";

export const LampeVinyl = () => {
    const isDark = useDarkMode();
    const { generalInfo, loading } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");
    console.log("🚀 ~ LampeVinyl ~ generalInfo:", generalInfo)
    const currentImage = isDark ? vinylImageDark : vinylImage;

    const handleOrder = () => {
        // Generate mailto link for lamp order
        const subject = "Commande Lampe Vinyl Personnalisée";
        const body = `Bonjour,

Je souhaite commander une lampe vinyl personnalisée.

Produit : Lampe vinyl personnalisée
Description : Lampe vinyle avec couleur personnalisée pour décoration d'intérieur

Merci de me recontacter pour discuter des détails (couleur souhaitée, délais, prix, etc.).

Cordialement`;

        if (generalInfo?.email) {
            const mailtoLink = `mailto:${generalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        } else {
            console.error("Email address not available");
        }
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
                                <div className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
                                    <h3 className="text-display-md md:text-display-lg font-bold text-text-primary dark:text-dark-text-primary mb-6">
                                        Lampe vinyle personnalisée
                                    </h3>

                                    <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                                        Transforme ton intérieur avec une lampe vinyle personnalisée.
                                        Choisis ta couleur préférée et crée une ambiance unique dans ton espace.
                                    </p>

                                    <Button
                                        onClick={handleOrder}
                                        variant="primary"
                                        size="lg"
                                        className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 border-black transition-all duration-300"
                                        disabled={loading || !generalInfo?.email}
                                    >
                                        {loading ? "Chargement..." : "Commander maintenant"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};