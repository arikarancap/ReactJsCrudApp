const {Router}= require("express")
const router =Router()
const {getTasks ,saveTasks,updateTasks,deleteTasks} =require("../controllers/TaskControllers")
router.get("/get",getTasks);
router.post("/save",saveTasks);
router.put("/update/:id",updateTasks)
router.delete("/delete/:id",deleteTasks)

module.exports =router;
