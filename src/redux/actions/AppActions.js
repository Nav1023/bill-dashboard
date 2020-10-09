import { ACTION_TYPES } from './ActionTypes';

export const networkChanged = (isOnline)=>{
  return (dispath)=>{
    dispath({
      type: ACTION_TYPES.NETWORK_CHANGE,
      payload : isOnline
    });
  };
};