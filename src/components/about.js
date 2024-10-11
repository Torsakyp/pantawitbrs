import React from "react";

const about = () => {
  return (
    <div id="abt-sec">
      <div class="grid grid-cols-2 gap-10 py-12 md:grid-cols-1 md:gap-y-5 md:py-10">
        <div>
          <h3 class="text-5xl mb-10 font-medium md:text-4xl md:mb-5">
            Pantawit Burasirirak
          </h3>
          <div class="text-lg font-normal md:text-base">
            <p>developer with 2 year experience🧑🏻‍💻</p>
            <br />
            <p>part-time home dev🦭</p>
            <p>full-time 1dd dev🦦</p>
            {/* <p>
              I am a junior frontend developer with 6-7 month of experience.
              <br class="md:hidden" /> I have an interest in frontend developer
              because It is like creating
              <br class="md:hidden" /> a good and beautiful face. And there are
              gimmicks to look attractive.
              <br class="md:hidden" /> And I'm happy to do it too.
            </p>
            <br class="md:inline" />
            <p>
              In this position. I have continued to study HTML CSS JavaScript
              <br class="md:hidden" /> and libraries like React and other
              related skills. which I am ready to
              <br class="md:hidden" /> study and further my knowledge in order
              to be backend and full-stack.
              <br class="md:hidden" />
            </p>
            <br class="md:inline" />
            <p>
              From the experience of having an internship and working
              <br class="md:hidden" /> as a frontend developer. What I have
              learned is basic knowledge,
              <br class="md:hidden" /> workflow, using various tools, working
              technique, troubleshooting
              <br class="md:hidden" /> and making real project.
            </p>
            <br class="md:inline" />
            <p>
              My personality is friendly, communicates well, able to work in a
              team.
            </p> */}
          </div>
        </div>
        <img
          src={require("../assests/images/me.jpg")}
          alt="pic-me"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default about;
