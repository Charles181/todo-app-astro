import { db, Users, Tasks, Rewards } from 'astro:db';

export default async function seed() {
	await db.insert(Users).values([
		{ id: 'admin', name: 'Papá/Mamá', role: 'admin', score: 0, avatar: '👑', password: 'password123' },
		{ id: 'csantillanj', name: 'Papá', role: 'admin', score: 0, avatar: '👨‍💼', password: 'Adminpass.123' },
		{ id: 'fer', name: 'Fer', role: 'child', score: 0, avatar: '🚀', password: '123' },
		{ id: 'mateo', name: 'Mateo', role: 'child', score: 0, avatar: '🚀', password: '123' },
	]);

	await db.insert(Tasks).values([
		{ id: 1, title: 'Tender la cama', description: 'Dejarla bien estirada', assigneeId: 'fer', status: 'pending', points: 10, dueDate: new Date(), assignedDate: new Date() },
		{ id: 2, title: 'Lavar los platos', description: 'Después de comer', assigneeId: 'fer', status: 'completed', points: 20, dueDate: new Date(), assignedDate: new Date() },
		{ id: 3, title: 'Hacer tarea de Mate', description: 'Páginas 20-22', assigneeId: 'mateo', status: 'pending', points: 30, dueDate: new Date(), assignedDate: new Date() },
	]);

	await db.insert(Rewards).values([
		{ id: 1, title: 'Helado', cost: 100, icon: '🍦' },
		{ id: 2, title: 'Tiempo de TV (1h)', cost: 50, icon: '📺' },
		{ id: 3, title: 'Robux', cost: 500, icon: '💰' },
	]);
}
