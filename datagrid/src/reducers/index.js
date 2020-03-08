let name = {
  data: 'Fake'
};
let person = {
  data: 'Persons'
};

function firstData(state = name) {
  return state
}

function secondData(state = person) {
  return state
}

export default {firstData, secondData};
