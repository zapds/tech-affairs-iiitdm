import { eq } from 'drizzle-orm';
import { integer, varchar, char, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const Users = pgTable('users', {
    user_id: serial('user_id').primaryKey().notNull(),
    google_id: text('google_id').notNull(),
    name: varchar("name").notNull(),
    email: text('email').notNull(),
    picture: text('picture').notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),

});

export const Sessions = pgTable('sessions', {
    session_id: text('session_id').primaryKey().notNull(),
    user_id: integer('user_id').notNull().references(() => Users.user_id),
    expires_at: timestamp('expires_at').notNull(),

});

export const User_roles = pgTable('user_roles', {
    email: text('email').notNull().primaryKey(),
    role: char('role', { length: 1 }).notNull(), // A for admin, U for user
});

export const i2r_equipment = pgTable('equipment', {
    equipment_id: serial('eq_id').primaryKey().notNull(),
    name: varchar('name').notNull(),
    category: varchar('category').notNull(),
    description: text('description').notNull(),
    imageUrl: text('imageUrl'),
    status: char('status', { length: 1 }).notNull(), // A for available, B for booked, U for under maintenance
})

export const i2r_bookings = pgTable('bookings', {
    booking_id: serial('booking_id').primaryKey().notNull(),
    user_id: integer('user_id').notNull().references(() => Users.user_id),
    department: varchar('department').notNull(),
    project_name: varchar('project_name').notNull(),
    intended_use: text('intended_use').notNull(),

    start_time: timestamp('start_time').notNull(),
    end_time: timestamp('end_time').notNull(),

    status: char('status', { length: 1 }).notNull().default('P'), // P for pending, A for approved, R for rejected
    created_at: timestamp('created_at').defaultNow().notNull(),
    comments: text('comments').notNull().default(''),

});

export const i2r_booking_equipment = pgTable('booking_equipment', {
    booking_id: integer('booking_id').notNull().references(() => i2r_bookings.booking_id),
    equipment_id: integer('equipment_id').notNull().references(() => i2r_equipment.equipment_id),

}, (table) => [
    eq(table.booking_id, table.equipment_id)
]);

