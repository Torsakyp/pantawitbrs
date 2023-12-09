import React from "react";
import OneDDsvg from "../assests/images/1dd-logo.svg";

const company = () => {
  return (
    <div id="company-sec">
      <div class="flex flex-col items-center w-full px-10 ">
        <p class="font-medium"> Company I have worked with </p>
        <div class="grid grid-cols-5 justify-items-center w-full mt-12 gap-y-10 md:grid-cols-2 md:gap-y-10">
          <img
            src={require("../assests/images/logicspace-logo.png")}
            alt="logicspace-logo"
            width="150"
            class="m-auto"
          />
          <img src={OneDDsvg} alt="1dd-logo" width="100" />
          <img
            src={require("../assests/images/sandstudio.png")}
            alt="sandstudio-logo"
            width="100"
            class="m-auto"
          />
          <img
            src={require("../assests/images/bemo.jpeg")}
            alt="bemo-logo"
            width="100"
            class="m-auto"
          />
          <img
            src={require("../assests/images/untitled.jpeg")}
            alt="bemo-logo"
            width="100"
            class="m-auto"
          />
          <img
            src={require("../assests/images/wait2-logo.png")}
            alt="wait-and-logo"
            width="100"
            class="m-auto"
          />
          <img
            src={require("../assests/images/wait-logo.png")}
            alt="wait-you-logo"
            width="100"
            class="m-auto"
          />
          
        </div>
      </div>
    </div>
  );
};

export default company;
