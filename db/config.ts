import { defineDb, defineTable, column } from 'astro:db';

export const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // 'parent' or 'child_name'
    name: column.text(),
    role: column.text(), // 'admin', 'child'
    score: column.number({ default: 0 }),
    avatar: column.text({ optional: true }),
    password: column.text(),
  }
});

export const Sessions = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text({ references: () => Users.columns.id }),
    expiresAt: column.number(),
  }
});

export const Tasks = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text({ optional: true }),
    assigneeId: column.text({ references: () => Users.columns.id }),
    dueDate: column.date({ optional: true }),
    status: column.text(), // 'pending', 'completed', 'verified'
    points: column.number({ default: 10 }),
    isRecurring: column.boolean({ default: false }),
  }
});

export const Rewards = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    cost: column.number(),
    icon: column.text({ optional: true }),
  }
});

export const Requests = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text({ optional: true }),
    requesterId: column.text({ references: () => Users.columns.id }),
    status: column.text(), // 'pending', 'approved', 'rejected'
    createdAt: column.date({ optional: true }),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Users, Tasks, Rewards, Sessions, Requests }
});
