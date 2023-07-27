const express = require('express');
router = express.Router();
const db = require('../db');
const service = require('../services/employee.service');
// api/employees
router.get('/', async (req, res) => {
  const data = await service.getAllEmployees();
  res.send(data);
});
router.get('/:id', async (req, res) => {
  const data = await employeeServie.getEmployeebyId(req.params.id);
  res.send(data);
});

module.exports = router;
