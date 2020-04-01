import { Router } from 'express';
import { Request, Response } from 'express';
import * as users from "../controllers/userController";

export let userRouter = Router();

// Create a new User
userRouter.post("/", users.create);

// Retrieve all users
userRouter.get("/", users.findAll);

// Retrieve all published Users
userRouter.get("/published", users.findAllPublished);

// Retrieve a single User with id
userRouter.get("/:id", users.findOne);

// Update a User with id
userRouter.put("/:id", users.update);

// Delete a User with id
// userRouter.delete("/:id", users.delete);

// Delete all Users
userRouter.delete("/", users.deleteAll);
