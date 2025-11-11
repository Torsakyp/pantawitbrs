import React from "react";

function work(props) {
  const {
    title,
    span,
    weburl,
    design,
    dev,
    imgurl,
    page,
    period,
    techs,
    alt,
    click,
  } = props;

  return (
    <div class="flex flex-row md:flex-col">
      <div class="relative h-auto w-1/2 md:w-full">
        <p class="text-2xl mb-2.5">
          {title}
          <span
            class="italic font-lg absolute -top-2 ml-1 font-normal text-neutral-400 md:text-base
          md:right-0 text-nowrap"
          >
            {span}
          </span>
        </p>
        <p class="mb-1">Period | {period}</p>
        <p>Tech Stack | {techs}</p>
        <a
          class="absolute bottom-10 mb-1 ml-1 lg:hidden xl:block "
          href={weburl}
          target={page}
        >
          {click}
        </a>
        <p class="text-sm absolute bottom-5 mb-1 ml-1 text-neutral-400 lg:hidden xl:block">
          design by - {design}
        </p>
        <p class="text-sm absolute bottom-0 mb-1 ml-1 text-neutral-400 lg:hidden xl:block">
          development by - {dev}
        </p>
      </div>
      <div class="h-auto w-1/2 md:w-full">
        <img
          class="h-auto w-full border border-black border-solid md:my-5"
          src={imgurl}
          alt={alt}
        />
      </div>
      <a
        class="xl:hidden md:block lg:underline lg:mb-1"
        href={weburl || "#"}
        onClick={(e) => {
          if (!weburl || weburl.trim() === "") e.preventDefault();
        }}
        target={page}
        rel="noreferrer"
      >
        {click}
      </a>
      <p class="xl:hidden md:block md:text-sm md:text-neutral-400 md:bottom-0 md:left-0 md:m-0">
        design by - {design}
      </p>
      <p class="xl:hidden md:block md:text-sm md:text-neutral-400 md:bottom-0 md:left-0 md:m-0">
        development by - {dev}
      </p>
    </div>
  );
}

export default work;
