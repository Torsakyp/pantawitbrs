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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Frontend
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="sandstudio.co"
          dev="teeoarp.dev"
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="1dd.co"
          dev="1dd.co & me"
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="1dd.co"
          dev="sprike.m & teeoarp.dev"
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="1dd.co"
          dev="1dd.co & me"
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
          design="1dd.co"
          dev="1dd.co & me"
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
          design="1dd.co"
          dev="teeoarp.dev"
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
          design="alin.studio"
          dev="teeoarp.dev"
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
          design="alin.studio"
          dev="teeoarp.dev"
          page="_blank"
          period="2023"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Torry's"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-torrys.png")}
          alt="web-torrys"
          weburl="https://www.torrys.com/"
          design="1dd.co"
          dev="earthflex & me"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Seire Collective"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-seire.png")}
          alt="web-seire"
          weburl="https://seirecollective.com/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2024"
          techs="Shopify, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Environman"
          span="Blog Website"
          imgurl={require("../assests/images/web-environman.png")}
          alt="web-environman"
          weburl="https://environman.co.th/"
          design="1dd.co"
          dev="1dd.co & me"
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
          weburl="javascript:void(0)"
          design="alin.studio"
          dev="teeoarp.dev"
          page=""
          period="2024"
          techs="Webflow, JavaScript"
          click="delivered"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Safesavethai"
          span="Blog Website"
          imgurl={require("../assests/images/web-safesavethai.png")}
          alt="web-safesavethai"
          weburl="https://safesavethai.com/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Greenerbangkok"
          span="Corporate Website"
          imgurl={require("../assests/images/web-greener.png")}
          alt="web-greenerbangkok"
          weburl="https://greenerbangkok.com/"
          design="1dd.co"
          dev="1dd.co & me"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="TAM3D"
          span="Corporate Website"
          imgurl={require("../assests/images/web-tam.png")}
          alt="web-tam3d"
          weburl="javascript:void(0)"
          design="alin.studio"
          dev="teeoarp.dev"
          page=""
          period="2024"
          techs="Webflow, JavaScript"
          click="delivered"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="The New Modern Home"
          span="Corporate Website"
          imgurl={require("../assests/images/web-tnmh.png")}
          alt="web-thenewmodernhome"
          weburl="https://www.thenewmodernhome.com/"
          design="alin.studio"
          dev="teeoarp.dev"
          page="_blank"
          period="2024"
          techs="Webflow, JavaScript"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Sentio"
          span="Corporate Website"
          imgurl={require("../assests/images/web-sentio-v2.png")}
          alt="web-sentio"
          weburl="https://sentiothailand.com/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Good to Great"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-g2g.png")}
          alt="web-g2g"
          weburl="https://goodtogreat.co.th/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Keimenkids"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-keimenkids.png")}
          alt="web-keimenkids"
          weburl="https://keimenkids.com/"
          design="1dd.co"
          dev="sprike.m & me"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        {/* <Work
          title="1DayGift"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-1day.png")}
          alt="web-1day"
          weburl="https://1daygift.co/"
          cate="full-stack developer"
          page="_blank"
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" /> */}
        <Work
          title="Chemo Aharon"
          span="Corporate Website"
          imgurl={require("../assests/images/web-chemo.png")}
          alt="web-chomo-aharon"
          weburl="javascript:void(0)"
          design="alin.studio"
          dev="teeoarp.dev"
          page=""
          period="2024"
          techs="Wordpress, JavaScript, VScode"
          click="delivered"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Hub of Talents in Natural Rubber"
          span="Corporate Website"
          imgurl={require("../assests/images/web-hub-nr.png")}
          alt="web-hub-nr"
          weburl="https://www.hubnr.com/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2025"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Stonesurfaces"
          span="Corporate Website"
          imgurl={require("../assests/images/web-stone.png")}
          alt="web-stonesurfaces"
          weburl="https://stonesurfaces.co.th/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2025"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="158technology"
          span="Corporate Website"
          imgurl={require("../assests/images/web-158.png")}
          alt="web-158technology"
          weburl="https://158technology.com/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2025"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="ROVE"
          span="Ecommerce Website"
          imgurl={require("../assests/images/web-rove.png")}
          alt="web-rove"
          weburl="javascript:void(0)"
          design="alin.studio"
          dev="teeoarp.dev"
          page=""
          period="2025"
          techs="Shopify, JavaScript, VScode"
          click="delivered"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="INHPF"
          span="Corporate Website"
          imgurl={require("../assests/images/web-inhpf.png")}
          alt="web-inhpf"
          weburl="https://inhpf.org/"
          design="1dd.co"
          dev="teeoarp.dev"
          page="_blank"
          period="2025"
          techs="Wordpress, JavaScript, VScode"
          click="live product"
        />
        <hr class="my-10 h-px border-none bg-neutral-400" />
        <Work
          title="Thai Investment Visa"
          span="Corporate Website"
          imgurl={require("../assests/images/web-thaiinvestmentvisa.png")}
          alt="web-thaiinvestmentvisa"
          weburl="https://thaiinvestmentvisa.com/"
          design="alin.studio"
          dev="teeoarp.dev"
          page="_blank"
          period="2025"
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
          design="you"
          dev="me"
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
