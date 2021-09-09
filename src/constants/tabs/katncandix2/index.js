import goodbyePrince from './goodbyePrince';

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
}

export default katncandix2;
