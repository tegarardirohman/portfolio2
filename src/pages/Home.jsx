import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="container mx-auto flex font-sans px-28 text-base m-4 text-slate-400 font-poppins">
              <div className="w-48 h-48 bg-blue-950 rounded-full fixed z-0 top-0 left-0 -mt-24 -ml-24"></div>
              <div className="w-96 h-96 border-2 border-blue-950 rounded-full fixed z-0 top-0 left-0 -mt-48 -ml-48"></div>
              <div className="w-[70rem] h-[70rem] border-2 border-blue-950 rounded-full fixed z-0 top-0 left-0 -mt-[35rem] -ml-[35rem]"></div>
              <div className="w-[100rem] h-[100rem] border-2 border-blue-950 rounded-full fixed z-0 top-0 left-0 -mt-[50rem] -ml-[50rem]"></div>
              <div className="w-[140rem] h-[140rem] border-2 border-blue-950 rounded-full fixed z-0 top-0 left-0 -mt-[70rem] -ml-[70rem]"></div>
              <div className="w-[180rem] h-[180rem] border-2 border-blue-950 rounded-full fixed z-0 top-0 left-0 -mt-[90rem] -ml-[90rem]"></div>
              <div className="w-[220rem] h-[220rem] border-2 border-blue-950 rounded-full fixed z-0 top-0 left-0 -mt-[110rem] -ml-[110rem]"></div>

              <div className="fixed bottom-0 right-0 p-10">Up</div>
              

      {/* left */}
      <div className="h-screen w-1/2 flex justify-end px-24">
        {/* top */}
        <div className="flex-nowrap fixed top-0 h-screen max-w-1/2 pt-24 justify-between">
          <h1 className="font-bold text-5xl tracking-tight text-slate-200">
            Tegar Ardi Rohman
          </h1>

          <h2 className="pt-4 text-md text-blue-100">Junior Fullstack Web Developer</h2>

          <h3 className="pt-4 leading-normal">
            Blending Creativity and Code, Turning Ideas into Reality.
          </h3>

          {/* nav */}
          <div className="pt-0">
            <nav
              className="nav hidden lg:block"
              aria-label="In-page jump links"
            >
              <ul className="mt-16 w-max">
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3"
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* bawah */}
          <div className="flex flex-row gap-6 mt-96">
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-5 text-xs shrink-0">
                <a
                  className="block hover:text-slate-200"
                  href="https://github.com/tegarardirohman"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub (opens in a new tab)"
                  title="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs shrink-0">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/tegarardirohman/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                  title="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs shrink-0">
                <a
                  className="block hover:text-slate-200"
                  href="https://instagram.com/tegarardrhmn"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram (opens in a new tab)"
                  title="Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs shrink-0">
                <a
                  className="block hover:text-slate-200"
                  href="https://twitter.com/bchiang7"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Twitter (opens in a new tab)"
                  title="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 1227"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 py-20 backdrop-blur text-base font-light pr-32 leading-6">


        {/* <div className="w-32 h-32 bg-blue-900 rounded-full absolute z-0 blur-3xl right-0 top-96"></div> */}


        <div className="m-t-1 pl-4 z-10 relative">
          <p className="line-clamp-6">
            I am a graduate of the Yogyakarta University of Technology with a
            degree in Informatics, with a GPA of 3.79 which shows high
            dedication to my education. As a junior fullstack web developer, I
            have extensive experience in various software development
            technologies.
          </p>
          <p className="pt-5">
            I am skilled in web application development using{" "}
            <span className="text-white font-medium">Java Spring Boot</span> for
            the backend, as well as the{" "}
            <span className="text-white font-medium">React JS</span> library for
            responsive and dynamic frontend development. Additionally, I also
            have expertise in using{" "}
            <span className="text-white font-medium">Laravel</span>,{" "}
            <span className="text-white font-medium">Node.js</span>, and{" "}
            <span className="text-white font-medium">Python</span> for software
            development in the field of{" "}
            <span className="text-white">Machine Learning</span>.
          </p>
          <p className="pt-5">
            With an unwavering spirit to continuously grow and expand my
            knowledge in this dynamic industry, I am ready to face new
            challenges and contribute significantly to creating innovative and
            beneficial technology solutions for society.
          </p>
        </div>

        <div className="mt-40 text-base"> 
          {/* first */}
          <div className="rounded-lg p-5 hover:bg-sky-500/[.06] border-blue-950 ">
            <div className="flex justify-between text-slate-100">
              <div className="font-semibold">Clarus Architect</div>
              <div className="font-thin">2020 - 2022</div>
            </div>
            <div className="py-2">Junior Fullstack Web Developer</div>

            <div className="desc text-sm">
              I had the opportunity to be a full stack web developer and digital
              marketer on the team. Development of an SEO friendly online
              architectural services website on the basis of PHP Laravel.
              <br />
              My accomplishment: <br />
              - Develop an SEO friendly online architectural services booking
              website. <br />
              - SEO optimization and management of Google ads on the site.{" "}
              <br />- to work together as a team in the process of solving the
              problem.
            </div>

            <div className="flex text-xs p-4 pl-0 text-blue-500 gap-2">
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">Laravel</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">HTML</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">CSS</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">Javascript</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">jQuery</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">SEO</span> 
            </div>

          </div>

          {/* second */}
          <div className="rounded-lg p-5 hover:bg-sky-500/[.06] border-blue-950 mt-4">
            <div className="flex justify-between text-slate-100">
              <div className="font-semibold">
                PT Pranala Digital Transmaritim
              </div>
              <div className="font-thin">2018</div>
            </div>
            <div className="py-2">Junior Software Engineer Internship</div>

            <div className="desc text-sm">
              I had the opportunity to be a full stack web developer and digital
              marketer on the team. Development of an SEO friendly online
              architectural services website on the basis of PHP Laravel.
              <br />
              My accomplishment: <br />
              - Winner of the 'Best' award in the PT Pranala Digital
              Transmaritim software development competition. <br />
              - Collaborated with the development team in developing marine toll
              administration software.
              <br />- Developed and implemented various features for desktop
              applications.
            </div>

            <div className="flex text-xs p-4 pl-0 text-blue-400 gap-2">
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">C++</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">Qt</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">PHP</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">HTML</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">CSS</span>
              <span className="p-1 px-3 bg-blue-700/[.2] rounded-full">javascript</span>
            </div>
          </div>
        </div>

        {/* last project */}
        <div className="pl-5 mt-20">
          test
        </div>

        {/* footer */}
        <footer className="pl-5 mt-20">
          hy, its my footer
        </footer>

      </div>
    </div>
  );
};

export default Home;
