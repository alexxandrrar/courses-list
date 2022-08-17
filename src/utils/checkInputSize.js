export const checkInputSize = (size) => {
  switch (size) {
    case "large":
      return {
        padding: "10px 35px",
        fontSize: "15px",
      };
    case "medium":
      return {
        padding: "8px 25px",
        fontSize: "15px",
      };

    case "small":
      return {
        padding: "5px 10px",
        fontSize: "8px",
      };

    default:
      return {};
  }
};
