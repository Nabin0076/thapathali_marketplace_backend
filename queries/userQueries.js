const checkEmailExists = 'SELECT * FROM Users where email=$1';
const getUserFromEmail = 'SELECT user_id FROM Users where email=$1';

module.exports = {
   checkEmailExists,
   getUserFromEmail,
}