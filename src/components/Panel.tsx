import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  currentPhoto: any;
  onClose: () => void;
}

export const MyDialog = ({ isOpen, currentPhoto, onClose }: Props) => {
  console.log("", isOpen);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 h-96" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="select-none w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all">
                {currentPhoto && (
                  <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <img src={currentPhoto?.src} className="max-h-96"></img>
                    <div className="flex flex-col justify-start items-start">
                      <h1 className=" text-4xl font-light text-black mb-3">
                        {currentPhoto?.name}
                      </h1>
                      <p className="text-md text-black">
                        {currentPhoto?.description}
                      </p>
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
