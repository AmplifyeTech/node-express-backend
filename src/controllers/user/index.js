import { Account } from "../../db/schema/index.js";
async function getUser(req, res) {
    res.status(200).send({ message: 'Get Route' });
}

async function createUser(req, res) {
    res.status(200).send({ message: 'create Route' });
}

async function updateUser(req, res) {
    res.status(200).send({ message: 'update Route' });
}

async function deleteUser(req, res) {
    res.status(200).send({ message: 'Delete user Route' });
}

async function getAllUsers(req, res) {
    res.status(200).send({ message: 'Get all users Route' });
}

export { getUser, createUser, updateUser, deleteUser, getAllUsers }; // Exporting all functions