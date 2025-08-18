CREATE TABLE "booking_equipment" (
	"booking_id" integer NOT NULL,
	"equipment_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bookings" (
	"booking_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"department" varchar NOT NULL,
	"project_name" varchar NOT NULL,
	"intended_use" text NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL,
	"status" char(1) DEFAULT 'P' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"comments" text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "equipment" (
	"eq_id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"category" varchar NOT NULL,
	"description" text NOT NULL,
	"imageUrl" text,
	"status" char(1) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "booking_equipment" ADD CONSTRAINT "booking_equipment_booking_id_bookings_booking_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("booking_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "booking_equipment" ADD CONSTRAINT "booking_equipment_equipment_id_equipment_eq_id_fk" FOREIGN KEY ("equipment_id") REFERENCES "public"."equipment"("eq_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;