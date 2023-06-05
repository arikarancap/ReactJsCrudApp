const Task = require("../models/TaskModels")

module.exports.getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.send(tasks)
    // res.send("Hiiii")
}

// Saving Data to the database
module.exports.saveTasks = async (req, res) => {
    const { task } = req.body
    Task.create({ task })
        .then((data) => {
            console.log("Saved Successfully", data);
            res.status(201).send(data);
        }).catch((err) => {
            res.send({ error: err, msg: "something Went Wrong..." })
        })


}
// Updating the DataBase 
module.exports.updateTasks = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body
    Task.findByIdAndUpdate(id, { task })
        .then(() => res.send("updateSuccessfully..."))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something Went Wrong..." })
        })
}

module.exports.deleteTasks = async (req, res) => {
    const { id } = req.params;
    Task.findByIdAndDelete(id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something Went Wrong..." })
        })
}

// module.exports.deleteTasks = async (req, res) => {
//     const { id } = req.params;
//     Task.deleteOne({ _id: id })
//         .then(() => res.send("Deleted Successfully..."))
//         .catch((err) => {
//             console.log(err);
//             res.send({ error: err, msg: "something Went Wrong..." })
//         })
// }