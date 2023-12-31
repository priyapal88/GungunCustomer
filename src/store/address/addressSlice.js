import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ApiEndpoints} from '../ApiEndPoints';
import {Axios} from '../../lib/Axios';

export const GET_ADDRESS_LIST = '/get-address-list';
export const GET_ADDRESS = '/get-address';
export const DELETE_ADDRESS = '/delete-address';
export const SET_DEFAULT_ADDRESS = '/set-default-address';

export const getAllAddresses = createAsyncThunk(
  GET_ADDRESS_LIST,
  async (_, thunkAPI) => {
    const {userId} = thunkAPI.getState().auth;
    const result = await Axios.get(
      ApiEndpoints.address.getAllAddresses.replace('USER_ID', String(userId)),
    );
    if (result.data.status === 'ok') {
      const addressList = result.data.response;
      return thunkAPI.fulfillWithValue(addressList);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);
export const getSingleAddress = createAsyncThunk(
  GET_ADDRESS,
  async ({addressId}, thunkAPI) => {
    const {userId} = thunkAPI.getState().auth;
    const result = await Axios.get(
      `/api/customer-address/${userId}/${addressId}/`,
    );
    if (result.data.status === 'ok') {
      return thunkAPI.fulfillWithValue(result.data.response);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const deleteAddress = createAsyncThunk(
  DELETE_ADDRESS,
  async ({addressId}, thunkAPI) => {
    const {userId} = thunkAPI.getState().auth;
    const result = await Axios.delete(
      `/api/customer-address/${userId}/${addressId}/`,
    );
    if (result.data.status === 'ok') {
      return true;
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const addAddress = createAsyncThunk(
  GET_ADDRESS,
  async (
    {
      address1,
      address2,
      landmark,
      addressType,
      lat,
      long,
      // pincode,
      // city,
      // state,
    },
    thunkAPI,
  ) => {
    const {userId} = thunkAPI.getState().auth;
    const result = await Axios.post(ApiEndpoints.address.addAddress, {
      latitude: lat,
      longitude: long,
      address_type: addressType,
      address1: address1,
      address2: address2,
      landmark: landmark,
      // pincode: pincode,
      // city: city,
      // state: state,
      user: userId,
    });
    if (result.data.status === 'ok') {
      return thunkAPI.fulfillWithValue(result.data.response);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const setDefaultAddress = createAsyncThunk(
  SET_DEFAULT_ADDRESS,
  async ({addressId}, thunkAPI) => {
    const result = await Axios.post(`/api/set_default_address/${addressId}/`);
    if (result.data.status === 'ok') {
      return thunkAPI.fulfillWithValue(addressId);
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const updateAddress = createAsyncThunk(
  GET_ADDRESS,
  async (
    {
      addressId,
      address1,
      address2,
      landmark,
      addressType,
      lat = 1,
      long = 2,
      pincode = 123,
      city = 'ggn',
      state = 'hr',
    },
    thunkAPI,
  ) => {
    const {userId} = thunkAPI.getState().auth;
    const result = await Axios.put(
      `/api/customer-address/${userId}/${addressId}/`,
      {
        latitude: lat,
        longitude: long,
        address_type: addressType,
        address1: address1,
        address2: address2,
        landmark: landmark,
        pincode: pincode,
        city: city,
        state: state,
        user: userId,
      },
    );
    if (result.data.status === 'ok') {
      return true;
    } else {
      return thunkAPI.rejectWithValue(new Error(result.data.msg));
    }
  },
);

export const addressSlice = createSlice({
  name: 'address',
  initialState: {addressList: []},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllAddresses.fulfilled, (state, action) => {
      state.addressList = action.payload;
    });
    builder.addCase(setDefaultAddress.fulfilled, (state, action) => {
      const id = action.payload;
      const list = state.addressList;

      state.addressList = list.map(val =>
        val.id === id
          ? {...val, is_default: true}
          : {...val, is_default: false},
      );
    });
  },
});

export const {} = addressSlice.actions;

export default addressSlice.reducer;
