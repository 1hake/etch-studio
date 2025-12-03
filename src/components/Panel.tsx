import { faClose, faCubes, faEuroSign, faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import useGeneralInfo from "../hooks/useGeneralInfo";
import { Image } from "../types/types";
import Button from "./Button";
import { GifReader } from "./GifReader";

interface Props {
  isOpen: boolean;
  currentPhoto: Image;
  onClose: () => void;
}

export const MyDialog = ({ isOpen, currentPhoto, onClose }: Props) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const { generalInfo, loading } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");

  const handleCloseClick = () => {
    setIsPurchasing(false);
    setCustomerName("");
    setAddress("");
    setCustomMessage("");
    onClose();
  };

  const generateMailtoLink = () => {
    const subject = `Commande pour ${currentPhoto?.name}`;
    const body = `Bonjour,\n\nJe souhaite commander le produit suivant :\n\nNom du produit : ${currentPhoto?.name}\nPrix : ${currentPhoto?.price} €\n\nNom du client : ${customerName}\nAdresse de livraison : ${address}\n\nMessage : ${customMessage}\n\nMerci.`;
    return `mailto:${generalInfo?.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleCloseClick}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-6xl mx-auto transform overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-xl transition-all">
                {/* Close button */}
                <button
                  onClick={handleCloseClick}
                  className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 group"
                  aria-label="Fermer"
                >
                  <FontAwesomeIcon icon={faClose} className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {currentPhoto && (
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="relative lg:w-3/5 bg-gray-50 dark:bg-gray-800">
                      {currentPhoto?.gif ? (
                        <div className="w-full h-[50vh] lg:h-[80vh] flex items-center justify-center p-6">
                          <GifReader path={currentPhoto?.gif} />
                        </div>
                      ) : (
                        <img
                          src={currentPhoto?.url}
                          alt={currentPhoto?.name}
                          className="w-full h-[50vh] lg:h-[80vh] object-cover"
                        />
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between">
                      <div className="space-y-8">
                        {/* Title */}
                        <div className="space-y-4">
                          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white leading-tight">
                            {currentPhoto?.name}
                          </h1>
                          {currentPhoto?.description && (
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                              {currentPhoto.description}
                            </p>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                          {currentPhoto?.materials && currentPhoto.materials.length > 0 && (
                            <div className="group">
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="w-5 h-5 text-gray-400">
                                  <FontAwesomeIcon icon={faCubes} className="w-full h-full" />
                                </div>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  Matériaux
                                </span>
                              </div>
                              <p className="text-gray-900 dark:text-white font-light ml-8">
                                {currentPhoto.materials.join(" • ")}
                              </p>
                            </div>
                          )}

                          {currentPhoto?.size && (
                            <div className="group">
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="w-5 h-5 text-gray-400">
                                  <FontAwesomeIcon icon={faRuler} className="w-full h-full" />
                                </div>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  Dimensions
                                </span>
                              </div>
                              <p className="text-gray-900 dark:text-white font-light ml-8">
                                {currentPhoto.size}
                              </p>
                            </div>
                          )}

                          {currentPhoto?.price !== undefined && currentPhoto.price > 0 && (
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  Prix
                                </span>
                                <div className="text-right">
                                  <p className="text-3xl font-light text-gray-900 dark:text-white">
                                    {currentPhoto.price}€
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Purchase Section */}
                      <div className="pt-8">
                        {!isPurchasing ? (
                          <button
                            onClick={() => setIsPurchasing(true)}
                            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 px-8 rounded-2xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                          >
                            Commander cette pièce
                          </button>
                        ) : (
                          <div className="space-y-6">
                            <div className="text-center pb-4">
                              <h3 className="text-xl font-light text-gray-900 dark:text-white">
                                Informations de commande
                              </h3>
                            </div>

                            <div className="space-y-4">
                              <input
                                type="text"
                                placeholder="Nom complet"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-gray-400 dark:focus:border-gray-400 focus:ring-0 transition-colors duration-300"
                                required
                              />

                              <textarea
                                placeholder="Adresse de livraison complète"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                rows={3}
                                className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-gray-400 dark:focus:border-gray-400 focus:ring-0 resize-none transition-colors duration-300"
                                required
                              />

                              <textarea
                                placeholder="Message ou instructions particulières (optionnel)"
                                value={customMessage}
                                onChange={(e) => setCustomMessage(e.target.value)}
                                rows={2}
                                className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-gray-400 dark:focus:border-gray-400 focus:ring-0 resize-none transition-colors duration-300"
                              />
                            </div>

                            <div className="flex gap-4 pt-4">
                              <button
                                onClick={() => setIsPurchasing(false)}
                                className="flex-1 py-4 px-6 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                              >
                                Retour
                              </button>
                              <button
                                onClick={() => {
                                  if (customerName && address) {
                                    window.location.href = generateMailtoLink();
                                  }
                                }}
                                disabled={!customerName || !address}
                                className="flex-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 px-8 rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:shadow-lg disabled:hover:shadow-none disabled:hover:translate-y-0 hover:-translate-y-1"
                              >
                                Envoyer la commande
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};