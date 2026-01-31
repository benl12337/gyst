import modulesData from "../models/modulesData.mjs";

const getAllModules = async (req, res) => {
    const allModules = await modulesData.getAllModules()
    res.status(200).json(allModules)
}

const getUserModules = async (req, res) => {

    const userModules = await modulesData.getUserModules()

    res.status(200).json(userModules);      
}

const addModules = async (req, res) => {
   
    // logic to save user modules would go here
    const modulesToAdd = req.body.moduleIds;
    console.log('Adding modules...', modulesToAdd)
    // expects a body with an array of module ideas
    await modulesData.addModules(modulesToAdd)
    res.status(200).json({added: modulesToAdd})
}

const deleteModules = async (req, res) => {

    const modulesToDelete = req.body.moduleIds;

    await modulesData.deleteModules(modulesToDelete)

    res.status(200).json({delete: modulesToDelete})
}

export default {
    getAllModules,
    getUserModules,
    addModules,
    deleteModules
}