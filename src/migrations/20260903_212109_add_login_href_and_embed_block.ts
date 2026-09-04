import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_embed_code_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_embed_code_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_embed_code_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_embed_code_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TABLE "pages_blocks_embed_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"script_src" varchar,
  	"embed_html" varchar,
  	"width" "enum_pages_blocks_embed_code_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_embed_code_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_embed_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"script_src" varchar,
  	"embed_html" varchar,
  	"width" "enum__pages_v_blocks_embed_code_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_embed_code_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "header" ADD COLUMN "login_href" varchar;
  ALTER TABLE "pages_blocks_embed_code" ADD CONSTRAINT "pages_blocks_embed_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_embed_code" ADD CONSTRAINT "_pages_v_blocks_embed_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_embed_code_order_idx" ON "pages_blocks_embed_code" USING btree ("_order");
  CREATE INDEX "pages_blocks_embed_code_parent_id_idx" ON "pages_blocks_embed_code" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_embed_code_path_idx" ON "pages_blocks_embed_code" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_embed_code_order_idx" ON "_pages_v_blocks_embed_code" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_embed_code_parent_id_idx" ON "_pages_v_blocks_embed_code" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_embed_code_path_idx" ON "_pages_v_blocks_embed_code" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_embed_code" CASCADE;
  DROP TABLE "_pages_v_blocks_embed_code" CASCADE;
  ALTER TABLE "header" DROP COLUMN "login_href";
  DROP TYPE "public"."enum_pages_blocks_embed_code_width";
  DROP TYPE "public"."enum_pages_blocks_embed_code_tone";
  DROP TYPE "public"."enum__pages_v_blocks_embed_code_width";
  DROP TYPE "public"."enum__pages_v_blocks_embed_code_tone";`)
}
