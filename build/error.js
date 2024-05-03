"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, res) => {
    console.error(err);
    res.status(500).send({ message: "failure" });
};
exports.default = error;
//# sourceMappingURL=error.js.map