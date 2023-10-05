import User from '../models/user.js';

export async function signup(req, res) {
	const { userName, userMood } = req.body
	console.log(userName, userMood)

	const newUser = await User.create({
		userName,
		userMood,
	})

	return res.status(201).json({
		code: 201,
		newUser,
	})
}
