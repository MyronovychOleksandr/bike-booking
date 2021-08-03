const {
  addBicycleRepository,
  listBicyclesRepository,
  updateBicycleRepository,
  removeBicycleRepository,
} = require("../repository/bicycleRepository");

const addBicycle = async (body) => {
  const data = await addBicycleRepository(body);
  return data;
};

const listBicycles = async () => {
  const data = await listBicyclesRepository();
  return data;
};

const removeBicycle = async (id) => {
  const data = await removeBicycleRepository(id);
  return data;
};

const updateBicycle = async (id, body) => {
  const data = await updateBicycleRepository(id, body);
  return data;
};

module.exports = {
  addBicycle,
  listBicycles,
  updateBicycle,
  removeBicycle,
};
