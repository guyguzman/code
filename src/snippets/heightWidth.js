import { setWidthHeight } from "./js/common.js";
window.onload = function () {
  setWidthHeight();

  window.addEventListener("resize", () => {
    setWidthHeight();
  });
};
