import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import carsService from "../services/cars.service";

// export const getAllCars = createAsyncThunk(
//   "carsSlice/getAllCars",
//   async (_, { rejectWithValue }) => {
//     try {
//       const cars = await carsService.getAllCars();
//       return cars;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const createCar = createAsyncThunk(
//   "carsSlice/createCar",
//   async ({ data }, { dispatch }) => {
//     try {
//       const newCar = await carsService.createCar(data);
//       dispatch(addCar({ data: newCar }));
//     } catch (e) {
//       console.log(e);
//     }
//   }
// );
// export const updateCar2 = createAsyncThunk(
//   "carsSlice/updateCar2",
//   async ({ data }, { dispatch }) => {
//     try {
//       const editedCar = await carsService.updateById(data);
//       dispatch(addCar({ data: editedCar }));
//     } catch (e) {
//       console.log(e);
//     }
//   }
// );
// export const deleteCAR = createAsyncThunk(
//   "carsSlice/deleteCAR",
//   async ({ id }, { dispatch }) => {
//     try {
//       await carsService.deleteById(id);
//       dispatch(deleteCar({ id }));
//     } catch (e) {
//       console.log(e);
//     }
//   }
// );

// const carsSlice = createSlice({
//   name: "carsSlice",
//   initialState: {
//     cars: [],
//     car: {},
//     error: null,
//     status: null,
//   },
//   reducers: {
//     addCar: (state, action) => {
//       let index = state.cars.findIndex((item) => item["id"] === state.car.id);

//       state.cars[index === -1 ? state.cars.length : index] =
//         action.payload.data;
//       state.car = {};
//     },
//     deleteCar: (state, action) => {
//       state.cars = state.cars.filter((car) => car.id !== action.payload.id);
//     },
//     updateCar: (state, action) => {
//       state.car = {
//         ...action.payload.car,
//       };
//     },
//   },
//   extraReducers: {
//     [getAllCars.pending]: (state, action) => {
//       state.status = "pending";
//       state.error = null;
//     },
//     [getAllCars.fulfilled]: (state, action) => {
//       state.status = "fulfilled";
//       state.cars = action.payload;
//     },
//     [getAllCars.rejected]: (state, action) => {
//       state.status = "rejected";
//       state.error = action.payload;
//     },
//   },
// });

const initialState = {
  cars: [],
  car: null,
  error: null,
  status: null,
};

export const getAllCars = createAsyncThunk(
  "carsSlice/getAllCars",
  async (_, { rejectWithValue }) => {
    try {
      const cars = await carsService.getAllCars();
      return cars;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const createCar = createAsyncThunk(
  "carsSlice/createCar",
  async ({ data }, _) => {
    try {
      const newCar = await carsService.createCar(data);
      return newCar;
    } catch (e) {
      console.log(e);
    }
  }
);
export const updateCar = createAsyncThunk(
  "carsSlice/updateCar",
  async ({ id, data }) => {
    try {
      const editedCar = await carsService.updateById(id, data);
      return editedCar;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteCar = createAsyncThunk(
  "carsSlice/deleteCar",
  async ({ id }) => {
    try {
      await carsService.deleteById(id);
      return id;
    } catch (e) {
      console.log(e);
    }
  }
);

const carsSlice = createSlice({
  name: "carsSlice",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state.car = action.payload.car;
    },
  },
  extraReducers: {
    [getAllCars.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [getAllCars.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.cars = action.payload;
    },

    [getAllCars.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    [createCar.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.cars.push(action.payload);
    },

    [updateCar.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const index = state.cars.findIndex((item) => item.id === state.car.id);
      state.cars[index] = action.payload;
      state.car = null;
    },

    [deleteCar.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const index = state.cars.findIndex((item) => item.id === action.payload);
      state.cars.splice(index, 1);
    },
  },
});

const carsReducer = carsSlice.reducer;

export const { update } = carsSlice.actions;
export default carsReducer;
