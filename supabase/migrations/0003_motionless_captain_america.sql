CREATE TABLE "clubs" (
	"club_id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"iconUrl" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"event_id" serial PRIMARY KEY NOT NULL,
	"club_id" integer NOT NULL,
	"name" varchar NOT NULL,
	"description" text NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL,
	"location" varchar NOT NULL,
	"link" text NOT NULL,
	"requirements" text NOT NULL,
	"imageUrl" text
);
--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_club_id_clubs_club_id_fk" FOREIGN KEY ("club_id") REFERENCES "public"."clubs"("club_id") ON DELETE no action ON UPDATE no action;