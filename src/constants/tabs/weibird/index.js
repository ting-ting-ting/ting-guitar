import someoneWaitingForMeTabDataTabData from './someoneWaitingForMe';

const singerInfoData = {
  singer: '韋禮安',
  singerId: 'weibird',
};

const weibirdTabData = {
  'weibird-1': {
    id: 'weibird-1',
    ...singerInfoData,
    ...someoneWaitingForMeTabDataTabData,
  },
}

export default weibirdTabData;
