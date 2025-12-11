import { db, Users, Tasks, Rewards } from 'astro:db';

export default async function seed() {
	await db.insert(Users).values([
		{ id: 'admin', name: 'Papá/Mamá', role: 'admin', score: 0, avatar: '👑', password: 'password123' },
		{ id: 'csantillanj', name: 'Papá', role: 'admin', score: 0, avatar: '👨‍💼', password: 'Adminpass.123' },
		{ id: 'child1', name: 'Fer', role: 'child', score: 120, avatar: '🚀', password: '123' },
		{ id: 'child2', name: 'Mateo', role: 'child', score: 85, avatar: '🚀', password: '123' },
	]);

	await db.insert(Tasks).values([
		{ id: 1, title: 'Hacer la cama', description: 'Dejarla bien estirada', assigneeId: 'child1', status: 'pending', points: 10, dueDate: new Date() },
		{ id: 2, title: 'Lavar los platos', description: 'Después de comer', assigneeId: 'child1', status: 'completed', points: 20, dueDate: new Date() },
		{ id: 3, title: 'Hacer tarea de Mate', description: 'Páginas 20-22', assigneeId: 'child2', status: 'pending', points: 30, dueDate: new Date() },
	]);

	await db.insert(Rewards).values([
		{ id: 1, title: 'Helado', cost: 100, icon: '🍦' },
		{ id: 2, title: 'Tiempo de TV (1h)', cost: 50, icon: '📺' },
		{ id: 3, title: 'Robux', cost: 500, icon: '💰' },
	]);
}
