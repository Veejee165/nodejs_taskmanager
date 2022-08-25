const express = require("express")
const router = express.Router()
const getAllTasks = require("../controllers/tasks")

router.route("/").get(getAllTasks.getAllTasks).post(getAllTasks.createTask)
router.route("/:id").get(getAllTasks.getTask).patch(getAllTasks.updateTask).delete(getAllTasks.deleteTask)

module.exports = router