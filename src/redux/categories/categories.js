const CATEGORIES_STATUS = 'CATEGORIES_STATUS';

export const categoriesStatus = () => ({
  type: CATEGORIES_STATUS,
});

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
