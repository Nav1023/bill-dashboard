import { PrintLog } from "../../utils/StaticFunctions";
import { ACTION_TYPES } from "./ActionTypes";
import moment from 'moment';

export  const addBill = (body, data, onCallback)=>{
    PrintLog('checkParams', body);
    PrintLog('data', data);
    body ={ 
        ...body,
        id: data.length,
        date: moment(new Date()).format('DD-MM-YYYY')
    };
    return async (dispatch)=>{
            const response ={ Status: 'S'};
            PrintLog('response', response)
            if (response.Status === 'S') {
                onCallback(true, response.response);
                dispatch({
                    type: ACTION_TYPES.INSTITUTE_SUCCESS,
                    payload : response.response
                  });
            }else{
                onCallback(false, response.message);
                dispatch({
                    type: ACTION_TYPES.INSTITUTE_FAILED,
                    payload : response.response
                  });
            }
        };
    }
export const editBill = (params, onCallback)=>{
    console.log('checkParams', params);
    console.log('checkParams', params);
    return async (dispatch)=>{
        const response ={ Status: 'S'};
            PrintLog('response', response)
            if (response.Status === 'S') {
                onCallback(true, response.response);
                dispatch({
                    type: ACTION_TYPES.INSTITUTE_SUCCESS,
                    payload : response.response
                  });
            }else{
                onCallback(false, response.message);
                dispatch({
                    type: ACTION_TYPES.INSTITUTE_FAILED,
                    payload : response.response
                  });
            }
        };
}

export  const deleteBill = (params, onCallback)=>{
    console.log('checkParams', params);
    console.log('checkParams', params);
    return async (dispatch)=>{
        const response ={ Status: 'S'};
            PrintLog('response', response)
            if (response.Status === 'S') {
                onCallback(true, response.response);
                dispatch({
                    type: ACTION_TYPES.INSTITUTE_SUCCESS,
                    payload : response.response
                  });
            }else{
                onCallback(false, response.message);
                dispatch({
                    type: ACTION_TYPES.INSTITUTE_FAILED,
                    payload : response.response
                  });
            }
        };
}
