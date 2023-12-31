import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ApiEndpoints} from '../ApiEndPoints';
import {Axios} from '../../lib/Axios';

export const GET_FOOD_TYPE = '/api/customer-profile';
export const SEARCH_QUERY = '/api/search-query';
export const GET_RESTAURANT_LIST = '/api/restaurant-list';
export const DELETE_SUGGESTION = '/api/delete-suggestion';
export const USER_LOCATION = '/api/user-location';
export const GET_POPULAR_ITEMS = 'api/popular_items';

export const addUserLocation = createAsyncThunk(
  USER_LOCATION,
  async ({lat, long}, thunkAPI) => {
    const {userId} = thunkAPI.getState().auth;
    const result = await Axios.post(ApiEndpoints.home.currentLocation, {
      user: userId,
      latitude: lat,
      longitude: long,
    });
    if (result.data.status === 'ok') {
      return true;
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const getDataOnYourMind = createAsyncThunk(
  GET_FOOD_TYPE,
  async (_, thunkAPI) => {
    const result = await Axios.get(ApiEndpoints.categoryFoodType.foodType);
    if (result.data.status === 'ok') {
      return thunkAPI.fulfillWithValue(result.data.response);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);


export const getAllPouplarItems = createAsyncThunk(
  GET_POPULAR_ITEMS,
  async (_, thunkAPI) => {
    const result = await Axios.get(ApiEndpoints.categoryFoodType.popularItems);
    if (result.data.status === 'ok') {
      // console.log('result.data---popular,',result.data)
      return thunkAPI.fulfillWithValue(result.data.response);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const getRestaurantList = createAsyncThunk(
  GET_RESTAURANT_LIST,
  async ({lat, long}, thunkAPI) => {
    const result = await Axios.get(
      `/api/nearby-stores/?latitude=${lat}&longitude=${long}`,
    );
    if (result.data.status === 'ok') {
      return thunkAPI.fulfillWithValue(result.data.response);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const getSearchResults = createAsyncThunk(
  SEARCH_QUERY,
  async ({text}, thunkAPI) => {
    const result = await Axios.get(ApiEndpoints.home.searchQuery, {
      params: {q: text},
    });
    if (result.data.status === 'ok') {
      return thunkAPI.fulfillWithValue(result.data.stores);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const getRecentSearches = createAsyncThunk(
  SEARCH_QUERY,
  async (_, thunkAPI) => {
    const result = await Axios.get(ApiEndpoints.home.recentSearches);
    if (result.data.status === 'ok') {
      const recentSearch = result.data.response;
      return thunkAPI.fulfillWithValue(recentSearch);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const deleteSuggestion = createAsyncThunk(
  DELETE_SUGGESTION,
  async ({id}, thunkAPI) => {
    const result = await Axios.delete(ApiEndpoints.home.deleteSearch, {
      params: {id: id},
    });
    if (result.data.status === 'ok') {
      return thunkAPI.fulfillWithValue(id);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const homeSlice = createSlice({
  name: 'home',
  initialState: {recentSearch: []},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRecentSearches.fulfilled, (state, action) => {
      state.recentSearch = action.payload;
    });
    builder.addCase(deleteSuggestion.fulfilled, (state, action) => {
      state.recentSearch = state.recentSearch.filter(
        i => i.id !== action.payload,
      );
    });
  },
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
