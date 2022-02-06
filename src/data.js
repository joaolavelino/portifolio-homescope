import list from "./db.json";

export const getInitialData = () => {
  if (!localStorage.getItem("homescope")) {
    return localStorage.setItem("homescope", JSON.stringify(list.properties));
  } else if (
    JSON.parse(localStorage.getItem("homescope")).length <
    list.properties.length
  ) {
    return localStorage.setItem("homescope", JSON.stringify(list.properties));
  }
};

export const sendData = (array) => {
  localStorage.setItem("homescope", JSON.stringify(array));
};
