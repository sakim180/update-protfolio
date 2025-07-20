"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = ({ id }) => {
  const [messsage, SetMessage] = useState<string>("");
  const [name, SetName] = useState<string>("");
  const [email, SetEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit =async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !messsage) {
      toast.warn("Please fill out all fields: Name, Email, and Message", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return;
    }

    setLoading(true);

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_Service_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        {
          from_name: name,
          to_name: "Sumon Mia",
          from_email: email,
          to_email: "sumonahmedsakim@gmail.com",
          message: messsage,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log(res)
          setLoading(false);
          toast("Thank you. I will get back to you as soon as possible.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          SetName("");
          SetEmail("");
          SetMessage("");
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <>
      <div id={id}>
        <ToastContainer />
        <div className="text-center text-black dark:text-white">
          <p className="text-4xl sm:text-5xl font-serif font-medium mt-4">
            Get in touch
          </p>
          <p className="mt-4 font-serif font-medium text-lg sm:text-xl ">
            Contact Me
          </p>
        </div>
        <div className="flex justify-evenly mt-16 flex-col sm:flex-row gap-8">
          <div className="flex flex-col items-center mt-8">
            {" "}
            {/* Container for centering elements vertically */}
            <div className="max-w-md mx-auto bg-white dark:bg-green-600 shadow-md rounded-lg p-6 mb-4">
              {" "}
              {/* Added margin-bottom for spacing */}
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#0000F5"
                >
                  <path d="m729.33-162.67-46.66-46.66L752.33-280H576v-66.67h176.33l-69.66-70.66L729.33-464 880-313.33 729.33-162.67ZM146.67-280q-27.5 0-47.09-19.58Q80-319.17 80-346.67v-426.66q0-27.5 19.58-47.09Q119.17-840 146.67-840h546.66q27.5 0 47.09 19.58Q760-800.83 760-773.33v222.66q-8.33-1.33-16.67-2-8.33-.66-16.66-.66-8.67 0-16.67.5-8 .5-16.67 1.83v-172.33L416-528 146.67-722.33v375.66h341.66Q487-338 486.83-331q-.16 7-.16 15.83 0 8.84.66 17.67.67 8.83 2.67 17.5H146.67ZM190-773.33 416-610l232-163.33H190Zm-43.33 426.66V-773.33v426.66Z" />
                </svg>
              </div>
              <p className="flex justify-center text-xl font-serif text-black dark:text-white">
                {" "}
                Email
              </p>
              <p className="flex justify-center font-serif text-black dark:text-white">
                {" "}
                sakimahmedsumon@gmail.com
              </p>
              <button
                className="flex items-center justify-center mt-2"
                onClick={() => {
                  window.location.href = "mailto:sakimahmedsumon@gmail.com";
                }}
              >
                {" "}
                {/* Added onClick event to open default mail app */}
                <a className="font-serif text-black dark:text-white">
                  Write me
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#0000F5"
                >
                  <path d="m560-241.33-47.33-47.34L672-448H160v-66.67h512l-160-160L559.33-722 800-481.33l-240 240Z" />
                </svg>
              </button>
            </div>
            <div className="bg-white dark:bg-green-600 shadow-md rounded-lg p-6">
              {" "}
              {/* Removed max-w-md class */}
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#0000F5"
                >
                  <path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" />
                </svg>
              </div>
              <p className="flex justify-center text-xl font-serif mt-2 text-black dark:text-white">
                {" "}
                Call
              </p>
              <p className="flex justify-center  px-14 sm:px tabular-nums text-black dark:text-white">
                {" "}
                +8801706908824
              </p>
              <button className="flex items-center justify-center mt-2">
                {" "}
                {/* Added justify-center class */}
                <a
                  href="tel:7432969136"
                  className="font-serif text-black dark:text-white"
                >
                  Call me
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#0000F5"
                >
                  <path d="m560-241.33-47.33-47.34L672-448H160v-66.67h512l-160-160L559.33-722 800-481.33l-240 240Z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <form className="max-w-lg mx-auto w-full sm:max-w-md">
                {" "}
                {/* Adjusted width for small screens */}
                <div className="mb-5">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="what you want to say"
                    value={messsage}
                    onChange={(e) => SetMessage(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="mt-12 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
                  onClick={handleSubmit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#75FBFD"
                  >
                    <path d="M120-160v-640l760 320-760 320Zm66.67-102 520.66-218-520.66-220v158.67L428-480l-241.33 60v158Zm0 0v-438 438Z" />
                  </svg>
                  <a className="font-serif text-xl font-semibold">
                    {loading ? "Sending..." : "Send Message "}
                  </a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
