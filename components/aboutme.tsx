'use client'
import Image from 'next/image';

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <div id={id} className="flex flex-col items-center">
      <div className="flex justify-center text-black dark:text-white">
        <p className="text-5xl font-serif font-medium mt-4">About Me</p>
      </div>
      <div className="flex justify-center">
        <p className="mt-2 font-serif font-medium text-xl text-black dark:text-white">My Introduction</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full max-w-6xl">
        <div className="w-full sm:w-1/3 pl-4 sm:pl-0 sm:pr-4">
          <Image
            src="/pic.jpg"
            alt="img"
            width={250}
            height={350}
            className="rounded-lg h-72 sm:mt-12"
          />
        </div>
        <div className="w-full sm:w-1/2 px-4 sm:px-12 mt-8 sm:mt-20">
          <p className="font-serif font-medium text-xl text-teal-500">
            Hey there, I&apos;m Sumon Mia hailing from Tangail, Dhaka, Bangladesh (1900). Currently cruising through my B.Tech in Computer Science with a specialization in AIML at Brainware University, Barasat.
          </p>
          <p className="font-serif font-medium text-xl mt-8 text-teal-500">
            A passionate Machine Learning enthusiast and web developer, dedicated to creating innovative solutions and advancing the field of technology through continuous learning and development
          </p>
          <p className="font-serif font-medium text-xl mt-8 text-teal-500">
            Feel free to reach out! Click the &apos;Contact&apos; button. Looking forward to connecting with you! I&apos;m always up for interesting conversations and collaborations.
          </p>
          <div className="pl-4 sm:pl-12 mt-8">
            <button
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2 w-48"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0000F5">
                <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM733.33-80H226.67q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880h334L800-640.67v494q0 27-19.83 46.84Q760.33-80 733.33-80Zm0-66.67v-464.66l-202-202H226.67v666.66h506.66Zm-506.66 0v-666.66 666.66Z" />
              </svg>
              <a href="#contact-page" className="pl-4 text-xl font-serif font-semibold italic antialiased text-blue-800">
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
