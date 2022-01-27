// const reducer = (state, action) => {
//   switch (action.payload) {
//     case 1:
//       doAction(state, action.type, 1);
//       break;
//     case 2:
//       doAction(state, action.type, 2);
//       break;
//     case 3:
//       doAction(state, action.type, 3);
//       break;
//     default:
//       alert("You don't make a action!");
//   }
// };

// const doAction = (state, action, player) => {
//   if (action === "inc") {
//     // state[`count_${player}`] += 1;
//     return { ...state, [`count_${player}`]: state[`count_${player}`]++ };
//   }

//   if (action === "dec")
//     //   {
//     //     state[`count_${player}`] -= 1;
//     //     return state;
//     //   }
//     return { ...state, [`count_${player}`]: state[`count_${player}`]-- };

//   if (action === "reset")
//     //   {
//     //     state[`count_${player}`] = 0;
//     //     return state;
//     //   }
//     return { ...state, [`count_${player}`]: (state[`count_${player}`] = 0) };
// };
