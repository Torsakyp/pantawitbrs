import React from "react";
import Navbar from "./navbar";
import Work from "./work";
import Intro from "./intro";
import Company from "./company";
import About from "./about";
import Contact from "./contact";
import ScrollToTop from "react-scroll-to-top";

function Portfolio() {
  return (
    <div class="relative max-w-7xl mx-auto my-0 w-full">
      <Navbar />
      <section class="relative flex items-center justify-center h-screen w-full welcome">
        <h1 class="text-6xl font-medium md:text-3xl">
          👋🏼&nbsp; Hi, I'm Tor! <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Junior Frontend
          Developer&nbsp;🧤
        </h1>
      </section>
      <Intro />
      <section>
        <Company />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="abhakara"
          span="Single Page Website"
          imgurl={require("../assests/images/web-abhakara.png")}
          alt="web-abhakara"
          weburl="https://abhakara.org/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="Aug - Sep 2021"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="excellency"
          span="Corporate Website"
          imgurl={require("../assests/images/web-exe.png")}
          alt="web-exe"
          weburl="http://excellency.co.th/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="Sep - Oct 2021"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="oldposh"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-oldposh.png")}
          alt="web-oldposh"
          weburl="http://oldposh.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="Oct - Nov 2021"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Portfolio"
          span="Portfolio Website"
          imgurl={require("../assests/images/web-me.png")}
          alt="web-me"
          weburl="http://pantawitbrs.com/"
          cate="frontend developer(desktop/mobile)"
          page="_self"
          period="Feb 2022"
          techs="VScode, Tailwind, React"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Lazy Dimension"
          span="Portfolio Website"
          imgurl={require("../assests/images/web-pai.png")}
          alt="web-pai"
          weburl="http://lazydimension.com/"
          cate="frontend developer(desktop)"
          page="_blank"
          period="Apr 2022"
          techs="Webflow, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Sand Studio"
          span="Corporate Website"
          imgurl={require("../assests/images/web-sand.png")}
          alt="web-sand"
          weburl="https://sandstudio.co/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="Jul - Dec 2022"
          techs="Webflow, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Studio360"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-360.png")}
          alt="web-360"
          weburl="https://www.studio360th.com"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="??? - ??? 2023"
          techs="Webflow, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Easy Visa"
          span="Corporate Website"
          imgurl={require("../assests/images/web-easyvisa.png")}
          alt="web-easyvisa"
          weburl="https://easyvisa.in.th"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="??? - ??? 2023"
          techs="Webflow, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Pavara"
          span="Corporate Website"
          imgurl={require("../assests/images/web-pavara.png")}
          alt="web-pavara"
          weburl="https://www.pavaragroup.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="??? - ??? 2023"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="join me!"
          span="Awesome Website"
          imgurl={require("../assests/images/web-join.png")}
          alt="web-join-me"
          weburl="mailto:pantawit.brs@gmail.com"
          cate="frontend developer , anything else"
          page="_self"
          period="-"
          techs="-"
          click="contact"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
      </section>
      <About />
      <Contact />
      <ScrollToTop smooth />
    </div>
  );
}

export default Portfolio;
