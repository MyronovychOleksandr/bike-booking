const { HttpCode } = require("../helpers/constants");
const {
  addBicycle,
  listBicycles,
  updateBicycle,
  removeBicycle,
} = require("../services/bicycleServices");

const getAllBicyclesControler = async (req, res, next) => {
  try {
    const contacts = await listBicycles();
    res.json({
      status: "success",
      code: HttpCode.OK,
      contacts,
    });
  } catch (error) {
    next(error);
  }
};

const createBicycleControler = async (req, res, next) => {
  try {
    const bicycle = await addBicycle(req.body);
    res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      bicycle,
    });
  } catch (error) {
    next(error);
  }
};

const updateBicycleControler = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const contact = await updateBicycle(req.params.id, req.body);
    if (contact) {
      return res.json({
        status: "success",
        code: HttpCode.OK,
        contact,
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: "Not found bicycle",
        data: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const removeBicycleControler = async (req, res, next) => {
  try {
    const data = await removeBicycle(req.params.id);
    if (data) {
      return res.json({
        status: HttpCode.OK,
        message: "bicycle deleted",
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: "Not found bicycle",
        data: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBicycleControler,
  getAllBicyclesControler,
  removeBicycleControler,
  updateBicycleControler,
};
