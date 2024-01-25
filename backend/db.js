const mongoose = require("mongoose");

// mongodb+srv://aryan:HjBxNGi73DXFuWpL@cluster0.t0dcgix.mongodb.net/todos



const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}