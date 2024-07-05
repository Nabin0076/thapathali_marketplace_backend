const addUser = 'INSERT INTO Users(username, email, password, gender) VALUES ($1, $2, $3, $4)';
const checkPassword = 'SELECT password FROM Users where email=$1';

module.exports = {
    addUser,
    checkPassword,
}