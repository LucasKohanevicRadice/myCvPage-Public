import { executeQuery } from "../database/database.js" 

const findUserWithEmail = async (email) => {
    return await executeQuery(
        "SELECT * FROM cvproject WHERE email = $1",
        email
    )
}

const addUser = async (email, passwordHash, company, phone) => {
    await executeQuery(
        "INSERT INTO cvproject (email, password, company, phone) VALUES ($1, $2)",
        email,
        passwordHash,
        company,
        phone
    )
}

export {
    findUserWithEmail,
    addUser
}