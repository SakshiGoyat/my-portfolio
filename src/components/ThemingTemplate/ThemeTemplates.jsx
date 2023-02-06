import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsMoonStars, BsFillSunFill, BsXLg } from "react-icons/bs";
import { useGlobalContext } from "../../hooks/contextAPI";
import "./themetemplate.scss";
import "../../utils/templateColors.scss";

const ThemeTemplates = React.memo(() => {
  const {
    isTemplateOpen,
    openTemplate,
    handleTheme,
    closeTemplate,
    changeTemp,
    handleTemp,
    colorTheme,
  } = useGlobalContext();
  return (
    <>
      {/* FiSettings wrapper */}
      <div className="theme-icon-wrapper" onClick={openTemplate}>
        <FiSettings className="theme-icon switch__color" />
      </div>

      {/* theme wrapper */}
      <div
        className={`${
          isTemplateOpen
            ? "theme-wrapper show-template"
            : "theme-wrapper hide-template"
        }`}
      >
        {/* theme header */}
        <div className="theme-header">
          <span>Theme Template</span>
          <span>
            <BsXLg
              className="close-template switch__color"
              onClick={closeTemplate}
            />
          </span>
        </div>
        {/* mode */}
        <div className="mode">
          <div onClick={() => handleTheme("light-mode")}>
            <BsFillSunFill className="icon switch__color" />
          </div>
          <div onClick={() => handleTheme("dark-mode")}>
            <BsMoonStars className="icon switch__color" />
          </div>
        </div>
        {/* template wrapper */}
        <div className="template-wrapper">
          {/* template 1 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-1" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-1")}
          >
            <div className="template-1"></div>
          </div>
          {/* template 2 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-2" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-2")}
          >
            <div className="template-2"></div>
          </div>
          {/* template 3 wrapper */}
          <div
            //
            className="template"
            onClick={() => handleTemp("template-3")}
          >
            <div className="template-3"></div>
          </div>
          {/* template 4 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-4" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-4")}
          >
            <div className="template-4"></div>
          </div>
          {/* template 5 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-5" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-5")}
          >
            <div className="template-5"></div>
          </div>
          {/* template 6 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-6" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-6")}
          >
            <div className="template-6"></div>
          </div>
          {/* template 7 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-7" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-7")}
          >
            <div className="template-7"></div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ThemeTemplates;
