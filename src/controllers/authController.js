import { User } from '../models/user.js';

async function signup(req, res) {
	const { userName, userMood } = req.body;

	const newUser = await User.create({
		userName,
		userMood,
	})

	return res.status(201).json({
		code: 201,
		newUser,
	})
}

export const authController = { signup };