// actions.js

export const updateCategory = (categoryVal) => {
    return {
      type: 'UPDATE_CATEGORY',
      payload: categoryVal,  // This is the data you want to pass
    };
  };
  