import { db, Users, Tasks, Rewards } from 'astro:db';

export default async function seed() {
	await db.insert(Users).values([
		{ id: 'mayte', name: 'Mamá', role: 'admin', score: 0, avatar: '👑', password: 'contraseña123' },
		{ id: 'csantillanj', name: 'Papá', role: 'admin', score: 0, avatar: '👨‍💼', password: 'Adminpass.123' },
		{ id: 'fer', name: 'Fer', role: 'child', score: 0, avatar: '🚀', password: '123' },
		{ id: 'mateo', name: 'Mateo', role: 'child', score: 0, avatar: '🚀', password: '456' },
	]);

	await db.insert(Tasks).values([
		{ id: 1, title: 'Limpiar la mesa', description: 'Guardar cosas, limpiar con trapo', assigneeId: 'mateo', status: 'pending', points: 30, dueDate: new Date(), assignedDate: new Date() },
		{ id: 2, title: 'Lavar los trastes', description: 'Incluye sartenes', assigneeId: 'fer', status: 'pending', points: 20, dueDate: new Date(), assignedDate: new Date() },
		{ id: 3, title: 'Barrer y trapear', description: 'Sala, cocina y comedor', assigneeId: 'mateo', status: 'pending', points: 30, dueDate: new Date(), assignedDate: new Date() },
		{ id: 4, title: 'Recoger la sala', description: 'Quitar todo de los sillones', assigneeId: 'mateo', status: 'pending', points: 30, dueDate: new Date(), assignedDate: new Date() },
	]);

	await db.insert(Rewards).values([
		{ id: 1, title: 'Helado', cost: 100, icon: '🍦' },
		{ id: 2, title: 'Tiempo de TV (1h)', cost: 50, icon: '📺' },
		{ id: 3, title: 'Robux', cost: 500, icon: '💰' },
	]);
}
