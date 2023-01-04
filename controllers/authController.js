const register = async (red, res) => {
  res.send('register user');
};

const login = async (red, res) => {
  res.send('login user');
};

const updateUser = async (red, res) => {
  res.send('updateUser user');
};

export { register, login, updateUser };
