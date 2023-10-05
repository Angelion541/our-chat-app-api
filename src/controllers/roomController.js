import { Rooms } from '../models/rooms.js';

async function getRooms(req, res) {
	let rooms = await Rooms.find();

	rooms = rooms
			.map(({ name, title, image, description }) => (
				{ name, title, image, description }
			));

	return res.status(201).json({
		code: 201,
		rooms,
	})
}

async function addNewRoom(req, res) {
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

export const roomsController = { getRooms, addNewRoom };