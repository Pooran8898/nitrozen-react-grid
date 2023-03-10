import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var e =
  '@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.n-date-picker-container {\n  position: relative;\n  width: 100%;\n}\n.n-date-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.n-date-inputfield {\n  width: 100%;\n  border: 1px solid var(--ColorPrimaryGrey60, #b5b5b5);\n  border-radius: 16px;\n  height: 4.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.n-date-inputfield:hover {\n  border: 1px solid var(--ColorPrimary60, #000093);\n}\n.n-date-inputfield:active {\n  background-color: var(--ColorPrimaryGrey20, #f5f5f5);\n}\n.n-date-left-group {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 1.2rem;\n  flex-direction: row;\n  width: 80%;\n}\n.n-date-input-group {\n  width: 80%;\n  display: flex;\n  padding-left: 1.2rem;\n  align-items: center;\n}\n@media screen and (max-width: 425px) {\n  .n-date-input-group {\n    width: 90%;\n  }\n}\n.n-date-single-field {\n  width: 10%;\n  border: 0px;\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  font-size: 1.6rem;\n  background: transparent;\n}\n.n-date-single-field:last-of-type {\n  width: 20%;\n}\n.n-date-divider {\n  font-size: 1.6rem;\n}\n.n-date-divider:last-child {\n  display: none;\n}\n.n-date-range-field {\n  color: var(--ColorPrimaryGrey60, #b5b5b5);\n  font-size: 1.6rem;\n  width: 90%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.n-icon-container {\n  height: 2.4rem;\n  width: 2.4rem;\n}\n.n-icon-container svg {\n  height: 100%;\n  width: 100%;\n}\n\n.n-input-close-btn {\n  height: 100%;\n  padding-right: 1.2rem;\n  display: flex;\n  align-items: center;\n  width: 2.4rem;\n}\n\n.n-date-error {\n  border-color: var(--ColorFeedbackError50, #f50031) !important;\n}\n\n.n-error-field {\n  border-color: var(--ColorFeedbackError50, #f50031) !important;\n}\n\n.n-warning-field {\n  border-color: var(--ColorFeedbackWarning50, #f06d0f) !important;\n}\n\n.n-success-field {\n  border-color: var(--ColorFeedbackSuccess50, #25ab21) !important;\n}\n\n.n-date-single-field::placeholder {\n  font-size: 1.4rem;\n  padding: 0;\n}\n\n.date-input-wrapper {\n  width: 37.6rem;\n}\n@media screen and (max-width: 425px) {\n  .date-input-wrapper {\n    width: 30.6rem;\n  }\n}\n\n.n-date-inputfield:hover .n-date-single-field::placeholder {\n  color: var(--ColorPrimaryGrey80, rgba(0, 0, 0, 0.65));\n  font-weight: 500;\n}\n\n.custom-date-story {\n  flex-direction: column;\n  align-items: center;\n}\n\n.state-date {\n  font-size: 1.4rem;\n  text-align: left;\n  width: 37.6rem;\n  margin-bottom: 1.2rem;\n}';
n(e);
export { e as default };
//# sourceMappingURL=DateInput.scss.js.map
