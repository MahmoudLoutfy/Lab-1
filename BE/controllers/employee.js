const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  employee.splice(employee.findIndex(employee => employee.id === id), 1);
};

// TODO
exports.createEmployee = async (req, res, next) => {
  if(employee.some(emp => emp.id === req.body.id)){
    res.status(300).json({ message:"notDone"})
  }else{
    employee.push(req.body)
    res.status(200).json({ message:"Done"})
  }
};
