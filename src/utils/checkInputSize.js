export const checkInputSize = (size) => {
  switch (size) {
    case "large":
      return {
        padding: "10px 25px",
        fontSize: "15px",
      };
    case "medium":
      return {
        padding: "8px 25px",
        fontSize: "15px",
      };

    case "small":
      return {
        width: "800px",
        height: "15px",
        padding: "5px 8px",
        fontSize: "10px",
      };

    default:
      return {};
  }
};
