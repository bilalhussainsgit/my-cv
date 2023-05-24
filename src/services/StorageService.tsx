
// setSession in local storage
const setSession = (user: Object) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// clear session of local storage
const clearSession = () => {
  localStorage.removeItem("user");
};

const StorageService = {
  setSession,
  clearSession
};

export default StorageService;
