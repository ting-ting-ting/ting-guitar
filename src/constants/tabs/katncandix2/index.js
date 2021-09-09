import goodbyePrince from './goodbyePrince';
import allFlower from './allFlower';

const singerInfoData = {
  singer: '綿花糖',
  singerId: 'katncandix2',
};

const katncandix2 = {
  'katncandix2-1': {
    id: 'katncandix2-1',
    ...singerInfoData,
    ...goodbyePrince,
  },
  'katncandix2-2': {
    id: 'katncandix2-2',
    ...singerInfoData,
    ...allFlower,
  },
}

export default katncandix2;
