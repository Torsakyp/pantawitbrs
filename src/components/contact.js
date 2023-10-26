import React from "react";

const contact = () => {
  return (
    <div id="con-sec">
      <div class="flex flex-row mx-10 px-5 border border-black border-solid md:flex-col md:text-center md:py-10">
        <div class="text-2xl font-semibold flex items-center pl-24 w-2/4 h-auto md:w-full md:pl-0 md:block md:text-center ">
          <p class="md:mb-4"> Let's Connect</p>
        </div>
        <div class="flex items-center pl-24 w-2/4 h-auto md:w-full md:pl-0 md:block md:text-center">
          <ul class="list-none">
            <li class="py-3">
              <a
                href="mailto:pantawit.work@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>
            </li>
            <li class="py-3">
              <a
                href="https://github.com/Torsakyp"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </li>
            <li class="py-3">
              <a
                href="https://www.linkedin.com/in/pantawit-burasirirak-314738231/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
