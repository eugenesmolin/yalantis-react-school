const selectors = {
  list: state => state.users.list,
  listByAlphabet: state => state.users.listByAlphabet,
  listStatus: state => state.users.listStatus,
};

export { selectors };
