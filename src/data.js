import list from "./db.json";

export const getInitialData = () => {
  if (!localStorage.getItem("homescope").length) {
    return localStorage.setItem("homescope", JSON.stringify(list.properties));
  } else {
    return list;
  }
};

export const sendData = (array) => {
  localStorage.setItem("homescope", JSON.stringify(array));
};
