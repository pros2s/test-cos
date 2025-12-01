export const getCardBagColor = (bagType) => {
  switch (bagType) {
    case "Marketing":
      return "success";
    case "Management":
      return "info";
    case "HR & Recruting":
      return "warning";
    case "Design":
      return "error";
    case "Development":
      return "dev";

    default:
      return "";
  }
};
