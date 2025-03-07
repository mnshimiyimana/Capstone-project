import FuelManagement from "../models/fuelManagementModel.js";

export const createFuelTransaction = async (req, res) => {
  try {
    const fuelTransaction = new FuelManagement(req.body);
    await fuelTransaction.save();
    res.status(201).json(fuelTransaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getFuelTransactions = async (req, res) => {
  try {
    const fuelTransactions = await FuelManagement.find();
    res.status(200).json(fuelTransactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFuelTransactionById = async (req, res) => {
  try {
    const fuelTransaction = await FuelManagement.findById(req.params.id);
    if (!fuelTransaction) {
      return res.status(404).json({ message: "Fuel transaction not found" });
    }
    res.status(200).json(fuelTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFuelTransaction = async (req, res) => {
  try {
    const fuelTransaction = await FuelManagement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!fuelTransaction) {
      return res.status(404).json({ message: "Fuel transaction not found" });
    }
    res.status(200).json(fuelTransaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteFuelTransaction = async (req, res) => {
  try {
    const fuelTransaction = await FuelManagement.findByIdAndDelete(
      req.params.id
    );
    if (!fuelTransaction) {
      return res.status(404).json({ message: "Fuel transaction not found" });
    }
    res.status(200).json({ message: "Fuel transaction deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
