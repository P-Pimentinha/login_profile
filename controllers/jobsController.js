const createJob = async (red, res) => {
  res.send('createJob');
};

const deleteJob = async (red, res) => {
  res.send('delete');
};

const getAllJobs = async (red, res) => {
  res.send('get all');
};

const showStats = async (red, res) => {
  res.send('show stats');
};

const updateJob = async (red, res) => {
  res.send('update');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
