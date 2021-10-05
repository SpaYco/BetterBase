export const POPULATE_TABLE = 'POPULATE_TABLE';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (data) => ({
  type: UPDATE_FILTER,
  data,
});
