export const sortByValue = (value, array, sortDirection) => {
  function compare(a, b) {
    if (value == "rent") {
      if (a.rent < b.rent) {
        return -1;
      }
      if (a.rent > b.rent) {
        return 1;
      }
      return 0;
    }

    if (value == "area") {
      if (a.area < b.area) {
        return -1;
      }
      if (a.area > b.area) {
        return 1;
      }
      return 0;
    }

    if (value == "location") {
      if (a.location < b.location) {
        return -1;
      }
      if (a.location > b.location) {
        return 1;
      }
      return 0;
    }

    if (value == "space") {
      if (a.space < b.space) {
        return -1;
      }
      if (a.space > b.space) {
        return 1;
      }
      return 0;
    }

    if (value == "quality") {
      if (a.quality < b.quality) {
        return -1;
      }
      if (a.quality > b.quality) {
        return 1;
      }
      return 0;
    }

    if (value == "transport") {
      if (a.transport < b.transport) {
        return -1;
      }
      if (a.transport > b.transport) {
        return 1;
      }
      return 0;
    }
  }

  const newArray = [...array.sort(compare)];

  {
    !sortDirection && newArray.reverse();
  }

  return newArray;
};
