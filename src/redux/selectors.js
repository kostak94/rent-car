import { createSelector } from "@reduxjs/toolkit";

export const selectIsInitialized = (state) => state.cars.isInitialized;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectIsError = (state) => state.cars.isError;
export const selectCars = (state) => state.cars.cars;
export const selectFavorites = (state) => state.favorites.favorites;
export const selectIsAllFetched = (state) => state.cars.isAllFetched;
export const selectPage = (state) => state.cars.page;
export const selectFilters = (state) => state.filters.filters;
export const selectFiltersBrand = (state) => state.filters.filters.brand;
export const selectFiltersPrice = (state) => state.filters.filters.price;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilters],
  (cars, filters) => {
    return cars?.filter((car) => {
      if (
        filters.brand &&
        !car.make.toLowerCase().includes(filters.brand.toLowerCase())
      ) {
        return false;
      }

      if (filters.mileageFrom && car.mileage < filters.mileageFrom) {
        return false;
      }

      if (filters.mileageTo && car.mileage > filters.mileageTo) {
        return false;
      }

      if (
        filters.price &&
        parseInt(car.rentalPrice.replace("$", ""), 10) > filters.price
      ) {
        return false;
      }

      return true;
    });
  }
);
