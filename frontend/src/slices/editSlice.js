import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    editData : false,
    userData: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null,
}


const editSlice = createSlice({
    name: "edit",
    initialState : initialState,
    reducers: {
        setEditData(state,value) {
            state.editData = value.payload;
        },
        setUserData(state,value) {
            state.userData = value.payload;
        },
    }
})

export const {setEditData,setUserData} = editSlice.actions;
export default editSlice.reducer;