import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'newsubscriber',
    initialState: {
        user: [],
    },
    reducers: {
        addUsers: (state, action) => {
            state.user.push(action.payload);
        },
    },
});

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;