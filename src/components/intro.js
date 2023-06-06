import React from "react";

const intro = () => {
  return (
    <div class="h-screen">
      <img
        class="m-5 md:w-36 md:m-2"
        src={require("../assests/images/emoji.png")}
        alt="emoji-me"
        width="200"
      />
      <h2 class="text-4xl font-normal md:text-xl">
        Hello, I am Pantawit.
        <br />
        <br />
        {/* I have an interest in frontend developer,
        <br />
        however, I'm determined to develop
        <br />
        myself as a backend and full-stack.
        <br /> */}
        ??? mean i can't remember :P
        <br />
        <br />
        <br />
        👇🏼 Let's see what I did 👇🏼
      </h2>
    </div>
  );
};
export default intro;
