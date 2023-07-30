import React, { forwardRef } from 'react';
import { toggleMobileMenu } from '~/utils/helpers';

const SidebarMobile = forwardRef((props, ref) => {
  // SidebarMobile bileşeni burada oluşturulan JSX'i döndürür.
  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden">
          <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
            <i className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white" onClick={() => toggleMobileMenu(ref)}></i>
            <ul className="mt-8 flex flex-col">
              <li className="">
                <a
                  href="/"
                  className="mb-3 block px-2 font-body text-lg font-medium text-white"
                >
                  Intro
                </a>
              </li>

              <li className="">
                <a
                  href="/blog"
                  className="mb-3 block px-2 font-body text-lg font-medium text-white"
                >
                  Blog
                </a>
              </li>

              <li className="">
                <a
                  href="/uses"
                  className="mb-3 block px-2 font-body text-lg font-medium text-white"
                >
                  Uses
                </a>
              </li>

              <li className="">
                <a
                  href="/contact"
                  className="mb-3 block px-2 font-body text-lg font-medium text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
  );
});

export default SidebarMobile;