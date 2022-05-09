import React from "react";

import Fade from "react-reveal/Fade";

import pic from "./liceu.jpg";

const Timeline = () => {
  return (
    <div>
      <h3 className="text-4xl text-center -translate-y-20 pl-1">Education</h3>
      <div class="flex items-center justify-center pb-56">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black">
          <div class="flex flex-row-reverse md:contents">
            <div class=" col-start-1 col-end-5 p-4 my-4 ml-auto animate-fade-in-right">
              <Fade left>
                <p
                  style={{ fontWeight: 700, fontSize: 20 }}
                  class="text-xl font-bold"
                >
                  Attended Secondary School in Science and Technology
                </p>
                <h3 class="mb-1">Escola Secundária Poeta António Aleixo</h3>
              </Fade>
              <img
                src={pic}
                style={{ width: 200, height: 200, position: "inherit" }}
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto">
              <div class="w-10 h-10 rounded-full bg-pink-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2016</h1>
              </div>
              <div class="h-full flex items-center justify-center">
                <div class="h-full w-1 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 pointer-events-none pt-96 pb-96"></div>
              </div>
            </div>
          </div>
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="w-10 h-10 rounded-full bg-indigo-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2019</h1>
              </div>
            </div>
            <div class=" col-start-6 col-end-10 p-4 my-4 mr-auto">
              <Fade left>
                <p
                  style={{ fontWeight: 700, fontSize: 20 }}
                  class="text-xl mb-1 text-black"
                >
                  Attending Bachelor's Degree in Informatics Engineering
                </p>
                <p class="mb-1">University Coimbra, FCTUC</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
