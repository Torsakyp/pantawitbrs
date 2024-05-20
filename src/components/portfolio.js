import React from "react";
import Navbar from "./navbar";
import Work from "./work";
import Intro from "./intro";
import Company from "./company";
import About from "./about";
import Contact from "./contact";
// import ScrollToTop from "react-scroll-to-top";

function Portfolio() {
  return (
    <div class="relative max-w-7xl mx-auto my-0 w-full">
      <Navbar />
      <section class="relative flex items-center justify-center h-screen w-full">
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
          title="Maison Hotel"
          span="Corporate Website"
          imgurl={require("../assests/images/web-maison.png")}
          alt="web-maison"
          weburl="https://maisonhotelbangkok.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2021"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Abhakara"
          span="Single Page Website"
          imgurl={require("../assests/images/web-abhakara.png")}
          alt="web-abhakara"
          weburl="https://abhakara.org/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2021"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Excellency"
          span="Corporate Website"
          imgurl={require("../assests/images/web-exe.png")}
          alt="web-exe"
          weburl="http://excellency.co.th/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2021"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Oldposh"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-oldposh.png")}
          alt="web-oldposh"
          weburl="http://oldposh.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2021"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        {/* <Work
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
        /> */}
        {/* <hr class="my-10 h-px border-none bg-neutral-400" /> */}
        {/* <Work
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
        /> */}
        {/* <hr class="my-10 h-px border-none bg-neutral-400" /> */}
        <Work
          title="Sand Studio"
          span="Corporate Website"
          imgurl={require("../assests/images/web-sand.png")}
          alt="web-sand"
          weburl="https://sandstudio.co/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2022"
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
          period="2023"
          techs="Webflow, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Kinnom"
          span="Corporate Website"
          imgurl={require("../assests/images/web-kinnom.png")}
          alt="web-kinnom"
          weburl="https://kinnom.co/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2023"
          techs="Wordpress, JavaScript, VScode"
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
          period="2023"
          techs="Webflow, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="GamingDose"
          span="News Website"
          imgurl={require("../assests/images/web-gamingdose.png")}
          alt="web-gameingdose"
          weburl="https://www.gamingdose.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2023"
          techs="Wordpress, JavaScript, VScode"
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
          period="2023"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Okamura"
          span="Corporate Website"
          imgurl={require("../assests/images/web-okamura.png")}
          alt="web-okamura"
          weburl="https://www.okamura.co.th/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2023"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="SM"
          span="Corporate Website"
          imgurl={require("../assests/images/web-SM.png")}
          alt="web-sm"
          weburl="https://www.smlubritech1.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2023"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="hibiki"
          span="Corporate Website"
          imgurl={require("../assests/images/web-hibiki.png")}
          alt="web-hibiki"
          weburl="https://www.hibikibrand.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2023"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Un-titled Lab"
          span="Corporate Website"
          imgurl={require("../assests/images/untitled-lab.png")}
          alt="web-untitled-lab"
          weburl="https://www.un-titledlab.com/"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2023"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="TEB"
          span="Corporate Website"
          imgurl={require("../assests/images/web-teb.png")}
          alt="web-teb"
          weburl="https://www.teb.co.th"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2023"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Seire Collective"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-seire.png")}
          alt="web-seire"
          weburl="https://seirecollective.com/"
          cate="full-stack developer"
          page="_blank"
          period="2024"
          techs="Shopify, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Torry's"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-torrys.png")}
          alt="web-torrys"
          weburl="https://www.torrys.com/"
          cate="backend developer"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Environman"
          span="Blog Website"
          imgurl={require("../assests/images/web-environman.png")}
          alt="web-environman"
          weburl="https://environman.co.th/"
          cate="full-stack developer"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="UNI"
          span="Corporate Website"
          imgurl={require("../assests/images/web-uni.png")}
          alt="web-uni"
          weburl="https://www.un-titledlab.com/uni"
          cate="frontend developer(desktop/mobile)"
          page="_blank"
          period="2024"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="join me!"
          span="Awesome Website"
          imgurl={require("../assests/images/web-join.png")}
          alt="web-join-me"
          weburl="mailto:pantawit.work@gmail.com"
          cate="frontend developer , anything else"
          page="_self"
          period="-"
          techs="-"
          click="contact"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
      </section>
      {/* <About /> */}
      <Contact />
    </div>
  );
}

export default Portfolio;
