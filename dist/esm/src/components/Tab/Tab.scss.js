import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var r =
  '@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "NitrozenType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/NitrozenType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.n-tab-container {\n  display: flex;\n  height: 4.8rem;\n  position: relative;\n}\n.n-tab-container.n-tab-scroll {\n  padding: 0 6.4rem;\n  overscroll-behavior-x: none;\n}\n.n-tab-container.n-tab-scroll .n-tab {\n  overflow: hidden;\n  scroll-behavior: smooth;\n}\n.n-tab-container.n-tab-scroll .n-tab .n-tab-item {\n  flex: auto;\n}\n.n-tab-container.n-overflow-scroll .n-tab .n-tab-item {\n  flex: none;\n}\n.n-tab-container.n-tab-navbar {\n  background-color: var(--ColorPrimary60, #000093);\n  color: var(--ColorPrimaryBackground, #ffffff);\n}\n.n-tab-container.n-tab-navbar .n-nav-btn {\n  color: var(--DarkPrimary60, #7f7ffb);\n  border-radius: 50%;\n}\n.n-tab-container.n-tab-navbar .n-nav-btn:hover {\n  background-color: var(--ColorPrimary20Dark, #16164b);\n}\n.n-tab-container.n-tab-navbar .n-nav-btn.n-icon-btn-left svg {\n  color: var(--DarkPrimary60, #7f7ffb);\n}\n.n-tab-container.n-tab-navbar .n-nav-btn.n-icon-btn-right svg {\n  color: var(--DarkPrimary60, #7f7ffb);\n}\n.n-tab-container.n-tab-navbar .n-tab .n-d-scroll {\n  background-color: var(--DarkPrimary60, #7f7ffb);\n}\n.n-tab-container.n-tab-navbar .n-tab .n-tab-item button.n-tab-btn {\n  background-color: var(--ColorPrimary60, #000093);\n  color: var(--ColorPrimaryBackground, #ffffff);\n}\n.n-tab-container.n-tab-navbar .n-tab .n-tab-item button.n-tab-btn:hover {\n  color: var(--ColorPrimaryInverse80, rgba(255, 255, 255, 0.78));\n}\n.n-tab-container.n-tab-navbar .n-tab .n-tab-item.n-tab-active button.n-tab-btn {\n  color: var(--ColorPrimaryBackground, #ffffff);\n}\n.n-tab-container .n-nav-btn {\n  border: none;\n  background: none;\n  color: var(--ColorPrimary60, #000093);\n  border-radius: 50%;\n  height: 4rem;\n  width: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 1;\n  font-size: 3rem;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.n-tab-container .n-nav-btn:hover {\n  background-color: var(--ColorPrimary20, #e8e8fc);\n}\n.n-tab-container .n-nav-btn.n-icon-btn-left {\n  left: 0.5rem;\n  display: none;\n}\n.n-tab-container .n-nav-btn.n-icon-btn-left svg {\n  color: var(--ActiveFieldBorder, #000093);\n}\n.n-tab-container .n-nav-btn.n-icon-btn-right {\n  right: 0.5rem;\n  display: none;\n}\n.n-tab-container .n-nav-btn.n-icon-btn-right svg {\n  color: var(--ActiveFieldBorder, #000093);\n}\n.n-tab-container .n-tab {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0 1.6rem;\n  font-family: var(--PrimaryFont, "NitrozenType", helvetica, arial, sans-serif);\n  position: relative;\n}\n.n-tab-container .n-tab .n-d-scroll {\n  height: 0.4rem;\n  background-color: var(--ColorPrimary50, #3535f3);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-radius: 0.4rem;\n  transition: 0.3s ease all;\n}\n.n-tab-container .n-tab::-webkit-scrollbar {\n  display: none;\n}\n.n-tab-container .n-tab.n-dragging {\n  scroll-behavior: auto;\n  cursor: grab;\n}';
n(r);
export { r as default };
//# sourceMappingURL=Tab.scss.js.map