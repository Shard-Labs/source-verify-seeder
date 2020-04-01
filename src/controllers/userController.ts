import { Request, Response } from "express";

import { db } from "../database/models/init";
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
export const create = (req: Request, res: Response) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save User in the database
    User.create(user)
        .then((data: any) => {
            res.send(data);
        })
        .catch((err: any) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve all Users from the database.
export const findAll = async function(req: Request, res: Response){

    try {
        let data = await User.findAll();
        res.status(200).send(data);

    } catch (err) {
        res.status(500).send({
            message:
                err.message
        });
    }

};

// Find a single User with an id
export const findOne = (req: Request, res: Response) => {
    const id = req.params.id;

    User.findByPk(id)
        .then((data: any) => {
            res.send(data);
        })
        .catch((err: any) => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};

// Update a User by the id in the request
export const update = (req: Request, res: Response) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id }
    })
        .then((num: number) => {
            if (num === 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch((err: any) => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
/* export const delete = (req: Request, res: Response) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then((num: number) => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch((err: any) => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}; */

// Delete all Users from the database.
export const deleteAll = (req: Request, res: Response) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then((nums: any) => {
            res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch((err: { message: any; }) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Users."
            });
        });
};

// find all published User
export const findAllPublished = (req: Request, res: Response) => {
    User.findAll({ where: { published: true } })
        .then((data: any) => {
            res.send(data);
        })
        .catch((err: any) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};