import React, { useContext } from "react";
import { themeContext } from "../../Context";

import { motion } from "framer-motion";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <>
      <div class="box-container">
        <h3 class="title" data-aos="fade-up">
          Experience
        </h3>
        <div class="box" data-aos="fade-up">
          <span>(2021-2022)</span>
          <h3>Frontend developer (Freelance)</h3>
          <motion.div
            whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
            transition={transition}
          >
            <ul>
              <li class="list">Direct communication with customers</li>
              <li class="list">Helping customers with website design</li>
              <li class="list">Website development</li>
              <li class="list">Support of the existing web projects</li>
            </ul>
          </motion.div>
        </div>
        <div class="box" data-aos="fade-up">
          <span>(2021)</span>
          <h3>Frontend developer (MUK)</h3>
          <ul>
            <li class="list">Email templates development</li>
            <li class="list">Marketing team support</li>
            <li class="list">Landing page development</li>
            <li class="list">Content management via 1C-Bitrix CMS</li>
          </ul>
        </div>
        <div class="box" data-aos="fade-up">
          <span>(2020)</span>
          <h3>Frontend developer</h3>
          <ul>
            <li class="list">Landing page development</li>
          </ul>
        </div>
        <div class="box" data-aos="fade-up">
          <span>(2019)</span>
          <h3>Manual QA engineer (ZEO Alliance)</h3>
          <ul>
            <li class="list">
              Manual testing of the client‐server web application
            </li>
          </ul>
        </div>
        <div class="box" data-aos="fade-up">
          <span>(2016-2018)</span>
          <h3>Customer Service Administrator, SMM manager</h3>
          <ul>
            <li class="list">Goods inventory and counting (MS Office, 1C)</li>
            <li class="list">Sales analysis, order management</li>
            <li class="list">Customer care</li>
            <li class="list">
              Social media marketing, content plans development
            </li>
          </ul>
        </div>
      </div>
    </>
    // <div className="experience" id='experience'>
    //   {/* <div className="achievement">
    //     {/* darkMode */}
    //     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
    //     <span  style={{color: darkMode?'white':''}}>years </span>
    //     <span>Experience</span>
    //   </div> */}
    //   <div className="achievement">
    //     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
    //     <span  style={{color: darkMode?'white':''}}>completed </span>
    //     <span>Projects</span>
    //   </div>
    //   // <div className="achievement">
    //   //   <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
    //   //   <span  style={{color: darkMode?'white':''}}>companies </span>
    //   //   <span>Work</span>
    //   // </div>
    // </div>
  );
};

export default Experience;
