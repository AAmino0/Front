import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from 'next/image';
import { useLanguage } from "../../contexts/LanguageContext";

function ToggleLanguage() {
  const { language, setLanguage } = useLanguage();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="flex items-center space-x-1 px-1 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        aria-label={language === 'fr' ? 'Switch to French' : 'Switch to English'}
      >
        <span className="text-sm font-medium">{language  === 'fr' ?
         <Image src="/assets/icons/france.png" alt="France flag" width={16} height={16} className="w-4 h-4"/> : <Image src="/assets/icons/united-states.png" alt="US flag" width={16} height={16} className="w-4 h-4"/>
        }</span>
        <ChevronDownIcon className="w-4 h-4 text-gray-800 dark:text-gray-300" />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-20 bg-white dark:bg-gray-800 border
         border-gray-200 dark:border-gray-600 rounded-md shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setLanguage("fr")}
                  className={clsx(
                    "w-full text-left px-4 py-2 text-sm flex items-center justify-evenly",
                    active ? "bg-gray-100 dark:bg-gray-700" : "",
                    language === "fr" ? "font-semibold text-orange-800" : "text-gray-800 dark:text-white"
                  )}
                >
                  <Image src="/assets/icons/france.png" alt="France flag" width={16} height={16} className="w-4 h-4"/><span className="text-sm">FR</span>
                </button> 
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setLanguage("en")}
                  className={clsx(
                    "w-full text-left px-4 py-2 text-sm flex items-center justify-evenly",
                    active ? "bg-gray-100 dark:bg-gray-700" : "",
                    language === "en" ? "font-semibold text-orange-800" : "text-gray-800 dark:text-white"
                  )}
                >
                 <Image src="/assets/icons/united-states.png" alt="US flag" width={16} height={16} className="w-4 h-4"/><span className="text-sm">EN</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ToggleLanguage;
