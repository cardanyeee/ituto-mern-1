import axios from 'axios';
export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: "ALL_DATA_REQUEST" })

        let link = `/api/admin/data`

        const { data } = await axios.get(link)
        dispatch({
            type: "ALL_DATA_SUCCESS",
            payload: data
        })

    } catch(error) {

        dispatch({
            type: "ALL_DATA_FAIL",
            payload: error
        })
    }
}