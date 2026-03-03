CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`last_active_at` integer DEFAULT (unixepoch()) NOT NULL,
	`created_at` text DEFAULT (datetime('now', 'localtime')) NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);