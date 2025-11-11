import { combineSlices } from "@reduxjs/toolkit";
import type { LazyLoadedReduxSlices } from "./types";
import { baseApi } from "../../api/baseApi";
import filtersReducer from "../../../widgets/questionFilters/model/filterSlice";

export const rootReducer = combineSlices({
  [baseApi.reducerPath]: baseApi.reducer,
  filters: filtersReducer,
}).withLazyLoadedSlices<LazyLoadedReduxSlices>();
