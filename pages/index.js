import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { projects, technologies } from "../utils/data";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isBurgerMenuExpanded, setIsBurgerMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsBurgerMenuExpanded(!isBurgerMenuExpanded);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>SamyLeeDev Portfolio</title>
        <meta
          name="description"
          content="Développeur web fullstack basé à Nantes, je participe à la construction de l'application/site web de vos rêves, de sa conception à son déploiement."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-100 dark:bg-slate-800  scroll-smooth">
        <nav className="px-5 lg:px-10 py-3 flex flex-wrap justify-between items-center sticky top-0 z-50 bg-slate-100 dark:bg-slate-800/90 backdrop-blur-lg ">
          <h1 className="text-slate-800 dark:text-slate-50 font-bold text-xl font-burtons cursor-pointer">
            <a href="#home">_SamyLeeDev</a>
          </h1>
          <div className="flex items-center">
            {darkMode ? (
              <BsSunFill
                className="cursor-pointer text-yellow-400 text-2xl mr-2"
                onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <BsFillMoonStarsFill
                className="cursor-pointer text-teal-600 text-2xl mr-2"
                onClick={() => setDarkMode(!darkMode)}
              />
            )}

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={`${isBurgerMenuExpanded ? "true" : "false"}`}
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              className={`${
                isBurgerMenuExpanded ? "" : "hidden"
              } w-full md:block md:w-auto md:relative md:top-0 absolute left-0 top-10`}
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#whoami"
                    onClick={() => setIsBurgerMenuExpanded(false)}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Qui suis-je ?
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    onClick={() => setIsBurgerMenuExpanded(false)}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setIsBurgerMenuExpanded(false)}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section
          className="px-5 lg:px-10 h-[100vh] lg:flex-row  pt-10 pb-10 flex flex-col scroll-mt-20 "
          id="home"
        >
          <div className="z-10">
            <div className="p-3 text-left mt-9">
              <p className="text-5xl md:text-6xl lg:text-7xl text-slate-800 dark:text-slate-50 tracking-widest font-burtons">
                Enchanté,
                <br /> Samy-Lee,
                <br />{" "}
                <span className="text-teal-600 dark:text-yellow-500">
                  développeur fullstack
                </span>
                .
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl text-slate-800 dark:text-slate-50 font-burtons mt-5">
                On commence quand ? 🙃 🚀
              </p>
            </div>
            <button className="animate-bounce transition ease-in-out hover:-translate-y-2  duration-300 ml-2 p-5 cursor-pointer bg-gradient-to-r from-rose-600 to-red-500 rounded-xl text-lg font-bold text-slate-50 mt-5 lg:p-7 lg:text-2xl shadow-slate-800 shadow-md">
              <a href="#contact">Contactez-moi !</a>
            </button>
          </div>
          <div className="basis-full shrink flex justify-center items-start hidden lg:block">
            <img
              src={
                darkMode
                  ? "../undraw_feeling_proud_qne1_yellow.svg"
                  : "../undraw_feeling_proud_qne1_teal.svg"
              }
              alt="logo accueil"
            />
          </div>
        </section>
        <section
          id="whoami"
          className="px-5 lg:px-10 pt-10 pb-10 h-auto  flex flex-col"
        >
          <div className="flex items-center">
            <h2 className="text-teal-600 dark:text-yellow-400 text-5xl font-burtons text-bold mb-5">
              Qui suis-je ?
            </h2>

            <img
              className="ml-5 rounded-full max-w-48 max-h-48"
              src="../PSX_20200309_185130.jpg"
              alt="Photo de moi"
            />
          </div>

          <div className="flex flex-col h-auto">
            <div className="flex flex-col md:flex-row lg:flex-row h-auto">
              <div className="p-3 flex-1 ">
                <p className="text-slate-800 dark:text-slate-50 text-xl mb-5 border-l-2 pl-5">
                  <span className="text-6xl">S</span>
                  alut à toi cher visiteur ! Je m&apos;appelle Samy-Lee LEVY,
                  j&apos;habite à <strong className="font-bold">Nantes</strong>,
                  et je suis <strong>développeur web fullstack</strong> !
                  Principalement attiré par l&apos;environnement{" "}
                  <strong className="font-bold">Javascript & Typescript</strong>{" "}
                  , que ce soit côté front-end (
                  <strong className="font-bold">React.js</strong>,{" "}
                  <strong className="font-bold">Next.js</strong>) ou back-end (
                  <strong className="font-bold">Node.js</strong>,{" "}
                  <strong className="font-bold">Nest.js</strong>), je peux aussi
                  travailler avec d&apos;autres langages/frameworks/outils (PHP,
                  Symfony, Wordpress ...).
                  <br /> Et oui ... c&apos;est la solution qui s&apos;adapte au
                  besoin et non l&apos;inverse ! 😉 <br />
                  Titulaire du titre professionnel{" "}
                  <span className="font-bold">Développeur Web & Mobile</span> et
                  de celui de{" "}
                  <span className="font-bold">
                    Concepteur Développeur d&apos;Applications
                  </span>{" "}
                  , je me ferai un plaisir de participer à la construction de
                  l&apos;application de vos rêves de sa conception à son
                  déploiement.
                </p>
              </div>
              <div className="flex flex-col p-3 justify-center flex-1 pt-10">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-row justify-center items-center">
                    <p className="w-28 text-slate-800 dark:text-slate-50 font-burtons bold mr-2">
                      Curieux
                    </p>
                    <div className="relative w-full h-9 rounded-full bg-gray-300 overflow-hidden shadow-md shadow-slate-800 border-gray-300 border">
                      <div className="absolute top-0 -left-1 h-full w-[90%]  bg-blue-700 rounded-full "></div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <p className="w-28 text-slate-800 dark:text-slate-50 font-burtons bold mr-2">
                      Sympathique
                    </p>
                    <div className="relative w-full h-9 rounded-full bg-gray-300 overflow-hidden shadow-md shadow-slate-800 border-gray-300 border">
                      <div className="absolute top-0 -left-1 h-full w-[80%]  bg-red-700 rounded-full "></div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <p className="w-28 text-slate-800 dark:text-slate-50 font-burtons bold mr-2">
                      Coopératif
                    </p>
                    <div className="relative w-full h-9 rounded-full bg-gray-300 overflow-hidden shadow-md shadow-slate-800 border-gray-300 border">
                      <div className="absolute top-0 -left-1 h-full w-[82%]  bg-green-700 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <p className="w-28 text-slate-800 dark:text-slate-50 font-burtons bold mr-2">
                      Adaptable
                    </p>
                    <div className="relative w-full h-9 rounded-full bg-gray-300 overflow-hidden shadow-md shadow-slate-800 border-gray-300 border">
                      <div className="absolute top-0 -left-1 h-full w-[85%]  bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <p className="w-28 text-slate-800 dark:text-slate-50 font-burtons bold mr-2">
                      Anglophone
                    </p>
                    <div className="relative w-full h-9 rounded-full bg-gray-300 overflow-hidden shadow-md shadow-slate-800 border-gray-300 border">
                      <div className="absolute top-0 -left-1 h-full w-[80%]  bg-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden md:flex lg:flex  flex-row w-screen h-40 bg-slate-200 overflow-hidden">
          {technologies.map(({ title, logo }) => (
            <div
              key={title}
              className="w-52 rounded-xl flex justify-center items-center mx-3 animate-marquee"
            >
              <img
                src={logo}
                alt={title}
                className="w-full object-cover transition ease-in-out duration-300 hover:scale-150 cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="flex md:hidden lg:hidden  flex-row flex-wrap mb-10">
          {technologies.map(({ title, logo }) => (
            <div
              key={title}
              className="w-24 h-24 rounded-xl flex justify-center items-center m-3 bg-gray-300 p-5  hover:scale-105 cursor-pointer"
            >
              <img src={logo} alt={title} className=" object-contain" />
            </div>
          ))}
        </div>
        <section
          id="project"
          className="px-5 lg:px-10 pt-10 pb-10 h-auto overflow-hidden  dark:bg-slate-700"
        >
          <h2 className="text-teal-600 dark:text-yellow-400 text-5xl font-burtons mb-5">
            Mes projets
          </h2>

          <div className="flex flex-wrap">
            {projects.map(
              ({ id, title, description, type, image, tags, url, github }) => (
                <div
                  key={id}
                  className="w-80 h-[550px] flex flex-col bg-white rounded-lg  border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 m-3 overflow-hidden relative transition ease-in-out hover:scale-105"
                >
                  <div className="bg-rose-600 rounded-xl w-12 h-12 absolute -right-2 -top-2">
                    <p className="text-white font-bold text-xs absolute bottom-3 left-1">
                      Front
                    </p>
                  </div>
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <img
                        src="../logo_technologies/github.png"
                        alt="Logo Github"
                        className="w-10 h-10 rounded-full absolute right-2 bottom-2 dark:backdrop-invert cursor-pointer transition ease-in-out hover:scale-110"
                      />
                    </a>
                  )}

                  <a
                    href={url}
                    key={id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex justify-center h-40 bg-red-200">
                      <img className="object-cover w-full" src={image} alt="" />
                    </div>
                  </a>
                  <div className="p-5">
                    <a
                      href={url}
                      key={id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
                      {description}
                    </p>

                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <p
                          className="bold text-gray-900 dark:bg-slate-700 w-fit p-2 mr-2 mb-2 rounded-xl dark:text-white"
                          key={tag}
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
        <section
          id="contact"
          className="px-5 lg:px-10 pt-10 pb-10  flex flex-col mt-5 bg-slate-200 dark:bg-slate-800"
        >
          <h2 className="text-teal-600 dark:text-yellow-400 text-5xl font-burtons text-bold mb-5">
            Contactez-moi !
          </h2>
          <p className="text-slate-800 dark:text-slate-50 text-xl mb-5">
            Mon profil vous intéresse ? N&apos;hésitez pas à m&apos;envoyer un
            message via le formulaire ! Je vous répondrai dans les plus brefs
            délais 🙂
          </p>
          <ContactForm />
          <div className="flex-1 relative"></div>
        </section>
        <footer
          className="text-sm px-5 lg:px-10 pt-5 pb-5 h-auto overflow-hidden  dark:bg-slate-700 flex justify-center items-center font-burtons text-slate-800 dark:text-slate-50
        "
        >
          <p className="text-center">
            Ce portfolio a été réalisé en{" "}
            <img
              src="../logo_technologies/react.png"
              alt="Logo React.js"
              className="w-16 h-auto p-1 inline"
            />{" "}
            associé à{" "}
            <img
              src="../logo_technologies/nextjs.png"
              alt="Logo Next.js"
              className="w-16 h-auto p-2 inline"
            />
            ,
            <br />
            stylisé avec{" "}
            <img
              src="../logo_technologies/tailwind.png"
              alt="Logo TailwindCSS"
              className="w-24 h-auto p-1 inline"
            />{" "}
            et deployé grâce à
            <img
              src="../logo_technologies/vercel.png"
              alt="Logo Vercel"
              className="w-16 h-auto p-1 inline"
            />
            .<br />
            L&apos;intégralité du code est en accès libre ici{" "}
            <a href="https://github.com/samyleedev/samyleedev-portfolio">
              <img
                src="../logo_technologies/github.png"
                alt="Logo Github"
                className="w-16 h-auto p-1 inline cursor-pointer animate-bounce transition ease-in-out hover:-translate-y-2  duration-300"
              />
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
