import Scholarship from "../models/Scholarship.js";

export const getScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const applyScholarship = async (req, res) => {
  const { studentName, academicRecords, amountRequested } = req.body;

  try {
    const newApplication = new Scholarship({
      studentName,
      academicRecords,
      amountRequested,
    });
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
