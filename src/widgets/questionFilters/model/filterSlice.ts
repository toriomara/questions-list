import { createSlice } from "@reduxjs/toolkit";

interface FiltersState {
  specialization: number | null;
  skills: number[];
  complexity: number[];
  rate: number[];
  search: string;
}

const initialState: FiltersState = {
  specialization: 11,
  skills: [],
  complexity: [],
  rate: [],
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSpecialization: (state, action) => {
      state.specialization = action.payload;
    },
    resetSpecialization: (state) => {
      state.specialization = null;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setComplexity: (state, action) => {
      state.complexity = action.payload;
    },
    setRate: (state, action) => {
      state.rate = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    resetAllFilters: () => initialState,
  },
});

export const {
  setSpecialization,
  resetSpecialization,
  setSkills,
  setComplexity,
  setRate,
  setSearch,
  resetAllFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
