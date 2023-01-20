import React from "react";
import { AboutRow } from "./AboutRow";
import MainImage from "../../public/images/main-img.png";

export const About = () => {
  return (
    
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      
      <AboutRow heading={"what is HackGLB'23?"} img={"./images/about1.svg"}>
        <p>
          Our hackathon, HACKGLB is ready for it&apos;s 2023 edition. It is an
          exciting learning opportunity for students who are passionate about
          technology and are interested in solving real-world problems with
          cutting-edge solutions.
        </p>
        <p>
          With the first edition of HACKGLB &apos;23, we&apos;re
          hoping to see much more innovative, improved and effective solutions
          to the issues at hand and share them with the rest of the world by
          bringing back the community of student developers together yet again.
        </p>
      </AboutRow>
      
      <AboutRow
        heading={"what is Shrinik Club | GLBITM?"}
        img={"./images/shrinik.png"}
        isReverse
      >
        <p>
          Shrinik Club aims at building a thriving community of student developers here in
          GLBITM. {" "}
        </p>
        <p>
          We host various workshops and hackathons. Our goal is to build an inclusive community of
          students from GLBITM who want to learn about tech and grow together
          solving real world issues and improving the lives of everyone around
          us.
        </p>
      </AboutRow>
    </div>
  );
};
