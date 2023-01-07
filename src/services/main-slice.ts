import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MainState = {
	pollingInterval: number;
};

const initialState = { pollingInterval: 60000 } as MainState;

const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setPollingInterval: (state, action: PayloadAction<number>) => {
			state.pollingInterval = action.payload;
		},
	},
});

export const { setPollingInterval } = mainSlice.actions;
export default mainSlice.reducer;
