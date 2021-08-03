const express = require("express");
const router = express.Router();

const {
  createBicycleControler,
  getAllBicyclesControler,
  removeBicycleControler,
  updateBicycleControler,
} = require("../controllers/bicycleControllers");

router.post("/", createBicycleControler);
router.get("/", getAllBicyclesControler);
router.delete("/:id", removeBicycleControler);
router.patch("/:id", updateBicycleControler);

module.exports = router;
