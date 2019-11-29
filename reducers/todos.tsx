export default function todos(state: [] = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    case "TOGGLE_TODO":
      return state.map((item, index) => {
        if (item.text === action.text) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        else return item ;
      });

    // return state.concat({
    //    text : action.text,
    //     completed : false
    // })

    default:
      return state;
  }
}
