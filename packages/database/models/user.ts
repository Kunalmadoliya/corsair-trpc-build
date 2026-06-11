import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  
    name: varchar("user_name").notNull(),
  
    email: varchar("email" ).notNull().unique(),
  
    password: varchar("password"),
  
    salt: varchar("salt"), 
  
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
  
    createdAt: timestamp("created_at").defaultNow().notNull(),
  
    deletedAt: timestamp("deleted_at"),
  });