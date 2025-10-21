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
      <p>🦦🎈😶‍🌫️🧢💫🥬🏸</p>
      <br />
      <p>:D 🧑🏻‍💻</p>
      <br />
      <p>part-time home dev🦭</p>
      <p>full-time 1dd dev🦦</p>
      <br />
      <a
        href="https://open.spotify.com/playlist/1UXpxnnJzWFKXp9HD9CUE9?si=fab1da1ff4094430"
        target="_blank"
      >
        spotify🎧
      </a>
      <a href="https://www.youtube.com/@iiioare" target="_blank">
        djing🎵
      </a>
    </div>
  );
};
export default intro;
