const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./database/db');
const authqueries = require('./queries/authqueries');
const userqueries 
