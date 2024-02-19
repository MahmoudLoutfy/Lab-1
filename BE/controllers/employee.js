const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  employee.splice(employee.findIndex(employee => employee.id === req.params), 1);
};

// TODO
exports.createEmployee = async (req, res, next) => {
};
