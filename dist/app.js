"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/moduels/student/student.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//api/v1/students/create-student
//application routs
app.use('/api/v1/students', student_route_1.StudentRouts);
app.get('/', (req, res) => {
    let a = 22;
    res.send(a);
});
console.log(process.cwd());
exports.default = app;
