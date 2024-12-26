import {createSlice, nanoid} from '@reduxjs/toolkit';
import {Code} from '../types/Code';

type State = {
  codes: Code[] | null;
};

const initialState: State = {
  codes: null,
};

const dataSlice = createSlice({
  name: 'storeddata',
  initialState,
  reducers: {
    addNewCode: (store, action) => {
      if (Array.isArray(store.codes)) {
        const {type, value} = action.payload;

        const isDuplicate = store.codes.some(item => item.value === value);

        if (!isDuplicate) {
          const id = nanoid();
          store.codes = [{id, type, value}, ...store.codes];
        }
      } else {
        const id = nanoid();
        store.codes = [{...action.payload, id}];
      }
    },
  },
});

export default dataSlice.reducer;
export const {addNewCode} = dataSlice.actions;
