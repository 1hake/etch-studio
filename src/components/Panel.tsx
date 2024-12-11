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
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN"); 
  console.log("🚀 ~ MyDialog ~ generalInfo:", generalInfo)


  const handleCloseClick = (event) => {
    onClose();
  };

  const generateMailtoLink = () => {
    const subject = `Commande pour ${currentPhoto?.name}`;
    const body = `Bonjour,\n\nJe souhaite commander le produit suivant :\n\nNom du produit : ${currentPhoto?.name}\nPrix : ${currentPhoto?.price} €\n\nNom du client : ${customerName}\nAdresse de livraison : ${address}\n\nMessage : ${customMessage}\n\nMerci.`;
    return `mailto:${generalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 h-96" onClose={handleCloseClick}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col items-end select-none max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div
                  onClick={handleCloseClick}
                  className="absolute top-0 mt-4 mr-4 flex justify-center items-center rounded-full bg-gray-300 text-black w-10 h-10 mb-4 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faClose} />
                </div>

                {currentPhoto && (
                  <>
                    <div className="flex flex-col items-start w-full">
                      <div className="w-full bg-gray-100 p-6 rounded-t-2xl">
                        <h1 className="text-4xl lg:text-5xl font-bold text-black">
                          {currentPhoto?.name}
                        </h1>
                      </div>

                      <div className="flex flex-col  space-y-6">
                        <div className="p-6">

                        {currentPhoto?.description && (
                          <p className="text-md text-black">{currentPhoto.description}</p>
                        )}

                        <div className="space-y-4">
                          {currentPhoto?.materials && (
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faCubes} />
                              <p className="text-md font-medium text-black">
                                <strong>Matériaux:</strong> {currentPhoto.materials.join(", ")}
                              </p>
                            </div>
                          )}
                              {currentPhoto?.size && (
                                <div className="flex items-center space-x-2">
                                  <FontAwesomeIcon icon={faRuler} />
                                  <p className="text-md font-medium text-black">
                                    <strong>Dimensions:</strong> {currentPhoto.size}
                                  </p>
                                </div>
                              )}
                          {currentPhoto?.price !== undefined && (
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faEuroSign} />

                              <p className="text-md font-medium text-black">
                                <strong>Prix:</strong> {currentPhoto.price} €
                              </p>
                            </div>
                          )}
                        </div>

                          </div>
                       
                        {currentPhoto?.gif ?
                          <GifReader path={currentPhoto?.gif} /> : <img src={currentPhoto?.url} className=""></img>
                        }
                        
                        <div className="px-6 pb-6 w-full">

                        {!isPurchasing && (
                          <Button
                            onClick={() => setIsPurchasing(true)}
                          >
                            Acheter
                          </Button>
                        )}

                        {isPurchasing && (
                          <div className="flex flex-col space-y-4">
                            <input
                              type="text"
                              placeholder="Nom du client"
                              value={customerName}
                              onChange={(e) => setCustomerName(e.target.value)}
                              className="p-2 border rounded-md"
                            />
                            <textarea
                              placeholder="Adresse de livraison"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              className="p-2 border rounded-md"
                            />
                            <textarea
                              placeholder="Message (optionnel)"
                              value={customMessage}
                              onChange={(e) => setCustomMessage(e.target.value)}
                              className="p-2 border rounded-md"
                            />
                            <Button
                              onClick={() => window.location.href = generateMailtoLink()}
                              className="bg-white text-black"
                            >
                              Confirmer
                            </Button>
                          </div>
                        )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};