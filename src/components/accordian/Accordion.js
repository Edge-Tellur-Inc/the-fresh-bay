import React, { useState } from "react";
import { Collapse } from "reactstrap";

const Accordion = ({ className, variation, ...props }) => {
  const [isOpen, setIsOpen] = useState("1");

  const toggleCollapse = (param) => {
    if (param === isOpen) {
      setIsOpen("0");
    } else {
      setIsOpen(param);
    }
  };

  return (
    <div
      className={[
        `accordion${variation ? " accordion-s" + variation : ""}${
          className ? " " + className : ""
        }`,
      ]}
    >
      <div className="accordion-item">
        <div
          className={[`accordion-head${isOpen !== "1" ? " collapsed" : ""}`]}
          onClick={() => toggleCollapse("1")}
        >
          <h6 className="title">Where are we currently working at?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse
          className="accordion-body"
          isOpen={isOpen === "1" ? true : false}
        >
          <div className="accordion-inner">
            <p>
              We are currently operating in Cape Coast, but we will soon be in
              Accra and it's neighbourings.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div
          className={[`accordion-head${isOpen !== "2" ? " collapsed" : ""}`]}
          onClick={() => toggleCollapse("2")}
        >
          <h6 className="title">How long does it take to make delivery?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse
          className="accordion-body"
          isOpen={isOpen === "2" ? true : false}
        >
          <div className="accordion-inner">
            <p>
              For now delivery may take an hour or two before reaching your
              preferred destination.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div
          className={[`accordion-head${isOpen !== "3" ? " collapsed" : ""}`]}
          onClick={() => toggleCollapse("3")}
        >
          <h6 className="title">How do I get free discount?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse
          className="accordion-body"
          isOpen={isOpen === "3" ? true : false}
        >
          <div className="accordion-inner">
            <p>Referring a friend helps you earn free deliveries.</p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div
          className={[`accordion-head${isOpen !== "4" ? " collapsed" : ""}`]}
          onClick={() => toggleCollapse("4")}
        >
          <h6 className="title">How can I track my orders on the app?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse
          className="accordion-body"
          isOpen={isOpen === "4" ? true : false}
        >
          <div className="accordion-inner">
            <p>
              Order tracking has been carefully crafted into the application.
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Accordion;
