import React from "react";

const navbar = () => {
  return (
    <div id="nav-sec" class="absolute z-10 w-full top-0">
      <div class="relative flex items-center justify-between mt-10 mb-20">
        <div>
          <h1 class="font-medium"> T&nbsp;|&nbsp;P&nbsp;B ---</h1>
        </div>
        <div class="flex w-60 items-center justify-between font-normal md:hidden">
          <a href="#company-sec">Work</a>
          <a href="#abt-sec">About</a>
          <a href="#con-sec">Contact</a>
          {/* <a
            href="https://drive.google.com/file/d/1Q_oY6FhQ-pKm0mdn7ttJzRHk4dVINtd7/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a> */}
        </div>
        <div class="xl:hidden md:block font-normal">
          <ul>
            <li class="md:p-0.5">
              <a href="#company-sec">Work</a>
            </li>
            <li class="md:p-0.5">
              <a href="#abt-sec">About</a>
            </li>
            <li class="md:p-0.5">
              <a href="#con-sec">Contact</a>
            </li>
            {/* <li class="md:p-0.5">
              <a
                href="https://drive.google.com/file/d/1Q_oY6FhQ-pKm0mdn7ttJzRHk4dVINtd7/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;