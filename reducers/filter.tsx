
export default function filter(visibility = "SHOW_ALL", action: any) {
  switch (action.type) {
    case "SET_FILTER":
      return action.visibility;
    default:
      return visibility;
  }
}
