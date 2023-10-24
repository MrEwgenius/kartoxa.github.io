import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Rootstate } from "../store";


type InitialState = {
    potatoSacks: any
}


const initialState: InitialState = {
    potatoSacks: 0,
}

const formSlice = createSlice({
    name: 'formReducer',
    initialState,
    reducers: {
        // updateFormData: (state, action) => {
        //     state.formData = action.payload;
        // },
        updatePotatoSacks: (state, action) => {
            state.potatoSacks = action.payload;
            console.log(state.potatoSacks);
            
            
        },
        
    },
});

export const {  updatePotatoSacks } = formSlice.actions;

export const PostSelectors = {

    getRandomPostsList: (state: Rootstate) => state.formReducer.potatoSacks,


}
export default formSlice.reducer;



