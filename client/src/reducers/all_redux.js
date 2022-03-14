export const AllDatas = (state = { datas: [] }, action) => {
    switch (action.type) {
        case "ALL_DATA_REQUEST":
            return {
                loading: true,
                datas: []
            }

        case "ALL_DATA_SUCCESS":
            return {
                loading: false,
                male: action.payload.male,
                female: action.payload.female,
                other: action.payload.other,
                pnts: action.payload.pnts,
                users: action.payload.users,
                tutors: action.payload.tutors,
                subs: action.payload.subs,

            }
            case "ALL_DATA_FAIL":
            return {
                loading: false,
                error: action.payload
            }

        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}