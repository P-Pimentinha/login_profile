const createJob = async (req, res) => {
  res.send('createJob');
};

const deleteJob = async (req, res) => {
  res.send('delete');
};

const getAllJobs = async (req, res) => {
  res.send('get all');
};

const showStats = async (req, res) => {
  res.send('show stats');
};

const updateJob = async (req, res) => {
  res.send('update');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
