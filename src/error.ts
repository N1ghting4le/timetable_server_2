import { Errback, Response } from "express";

const error = (err: Errback, res: Response) => {
    console.error(err);
    res.status(500).send({ message: "failure" });
}

export default error;