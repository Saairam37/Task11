const user = require("../module/user");
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
const { JWT_SECRET } = require("../utils/config");

const authController = {
    register: async(req, res) => {
        try{ 
            const { name, email, password } = req.body;

            const existingUser = await user.find({ email });
            if(existingUser > 0){
                return res.status(400).json({ message: 'an user already exists with this email.'});
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new user({
                name,
                email,
                password: hashedPassword
            });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully', user: newUser });
        }catch(error){
            res.status(500).json({ message: 'Registeration failed', error: error.message });
        }
    },

    login: async(req, res) => {
        try{
            const { email, password } = req.body;

            const users = await user.find({ email });
            if(users.length === 0){
                return res.status(400).json({ message: 'User not found' });
            }

            const isPasswordValid = await bcrypt.compare(password, users[0].password);
            if(!isPasswordValid){
                return res.status(400).json({ message: 'Invalid password' });
            }

            const token = jwt.sign({ id: users[0]._id }, JWT_SECRET, { expiresIn: '1hr' });

            res.status(200).json({ message: 'Login successfully', token: token });
        }catch(error){
            res.status(500).json({ message: 'Login failed', error: error.message });
        }
    },

    me: async(req, res) => {
        try{
            const userId = req.userId;

            const users = await user.findById(userId);
            if(!users){
                return res.status(404).json({ message: 'User not found' })
            }

            res.status(200).json({ user: {
                id: users._id,
                name: users.name,
                email: users.email
            } })
        }catch(error){
            res.status(500).json({ message: 'Error fetching user data', error: error.message })
        }
    }
}

module.exports = authController;