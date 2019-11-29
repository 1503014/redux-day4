
export default function color(clr = ["RED, PINK"], action:any )
{
  switch(action.type)
  {
    case "ADD_BLACK" :
    return [
      ...clr,
      "BLACK"
    ];

    default:
      return clr;
  }
}