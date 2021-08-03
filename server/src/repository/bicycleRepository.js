const Bicycle = require("../schemas/bicycleSchema");

const listBicyclesRepository = async () => {
  const results = await Bicycle.find({});

  return results;
};

const addBicycleRepository = async (body) => {
  const results = await Bicycle.create({ ...body });

  return results;
};

const updateBicycleRepository = async (id, body) => {
  const results = await Bicycle.findByIdAndUpdate(
    id,
    { ...body },
    { new: true }
  );
  return results;
};

const removeBicycleRepository = async (id) => {
  const results = await Bicycle.findByIdAndRemove(id);
  return results;
};

module.exports = {
  addBicycleRepository,
  listBicyclesRepository,
  updateBicycleRepository,
  removeBicycleRepository,
};
