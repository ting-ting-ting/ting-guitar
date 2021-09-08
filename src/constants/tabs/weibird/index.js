import someoneWaitingForMe from './someoneWaitingForMe';

const singerInfoData = {
  singer: '韋禮安',
  singerId: 'weibird',
};

const weibird = {
  'weibird-1': {
    id: 'weibird-1',
    ...singerInfoData,
    ...someoneWaitingForMe,
  },
}

export default weibird;
