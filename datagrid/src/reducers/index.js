import Data from '../data/data';

let name = {
  data: 'Fake'
};
let person = {
  data: 'Persons'
};

let fakeInfo = {
  data: Data
}
function firstData(state = name) {
  return state
}

function secondData(state = person) {
  return state
}

function thirdData(state = fakeInfo) {
  return state
}

export default {firstData, secondData, thirdData};
