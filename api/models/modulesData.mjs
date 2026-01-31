import jsonFunctions from '../utilities/jsonFunctions.mjs'

const getAllModules = async () => {
    const allModules = await jsonFunctions.readJSON('../data/userData.json');
    return allModules;
}

const getUserModules = async () => {
    const user = await jsonFunctions.readJSON('../data/userData.json');
    const modulesData = await jsonFunctions.readJSON('../data/moduleData.json');

    const userModulesData = {}

    user?.modules?.forEach((moduleId)=>{
        userModulesData[Number(moduleId)] = {
            ...modulesData[moduleId]
        }
    })

    return userModulesData;
}

const addModules = async (moduleIds) => {
    const user = await jsonFunctions.readJSON('../data/userData.json');
    const userModules = user.modules
    console.log('moduleIds are: ', moduleIds)

    userModules.forEach((module)=>{
        console.log("type of user module id is: ", typeof module)
    })

    // check if the module id from the body exists, and add if not
    moduleIds.forEach((moduleId)=>{
        console.log("type of module id is: ", typeof moduleId)
        if (!userModules.includes(moduleId)) {
            userModules.push(moduleId)
        }
    })    

    // update userData
    const updatedUserData = {...user}
    updatedUserData.modules = userModules

   await jsonFunctions.saveJSON('../data/userData.json', updatedUserData)
   return updatedUserData

}

const deleteModules = async (moduleIds) => {

    const user = await jsonFunctions.readJSON('../data/userData.json');
    const userModules = user.modules
    const updatedModuleIds = [...user.modules]

    const filteredModules = updatedModuleIds.filter((moduleId)=> !moduleIds.includes(moduleId))

    // save the moduleIds to JSON file
    const updatedUserData = {
        ...user,
        modules: filteredModules
    }

    await jsonFunctions.saveJSON('../data/userData.json', updatedUserData)
    return updatedUserData
}

export default {
    getAllModules,
    getUserModules,
    addModules,
    deleteModules
}