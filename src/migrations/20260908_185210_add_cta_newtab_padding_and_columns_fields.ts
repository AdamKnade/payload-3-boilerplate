import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cards_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_cards_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_callout_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_callout_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_columns_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_columns_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_data_table_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_data_table_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_faq_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_faq_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_media_content_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_media_content_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_offer_list_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_offer_list_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_service_navigation_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_service_navigation_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_embed_code_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_embed_code_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_callout_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_callout_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_offer_list_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_offer_list_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_service_navigation_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_service_navigation_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_embed_code_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_embed_code_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TABLE "pages_blocks_columns_columns_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_columns_columns_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_columns_columns_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_columns_columns_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns_columns_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns_columns_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "pages_blocks_cards_cards" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "pages_blocks_cards" ADD COLUMN "block_id" varchar;
  ALTER TABLE "pages_blocks_cards" ADD COLUMN "padding_top" "enum_pages_blocks_cards_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_cards" ADD COLUMN "padding_bottom" "enum_pages_blocks_cards_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_cta_block_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "pages_blocks_callout_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "pages_blocks_callout" ADD COLUMN "padding_top" "enum_pages_blocks_callout_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_callout" ADD COLUMN "padding_bottom" "enum_pages_blocks_callout_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_columns_columns_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "pages_blocks_columns_columns" ADD COLUMN "heading" varchar;
  ALTER TABLE "pages_blocks_columns_columns" ADD COLUMN "value" varchar;
  ALTER TABLE "pages_blocks_columns_columns" ADD COLUMN "note_html" jsonb;
  ALTER TABLE "pages_blocks_columns_columns" ADD COLUMN "table_footnote_html" jsonb;
  ALTER TABLE "pages_blocks_columns_columns" ADD COLUMN "table_cta_label" varchar;
  ALTER TABLE "pages_blocks_columns_columns" ADD COLUMN "table_cta_href" varchar;
  ALTER TABLE "pages_blocks_columns_columns" ADD COLUMN "table_cta_new_tab" boolean;
  ALTER TABLE "pages_blocks_columns" ADD COLUMN "heading" varchar;
  ALTER TABLE "pages_blocks_columns" ADD COLUMN "intro_html" jsonb;
  ALTER TABLE "pages_blocks_columns" ADD COLUMN "padding_top" "enum_pages_blocks_columns_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_columns" ADD COLUMN "padding_bottom" "enum_pages_blocks_columns_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "pages_blocks_data_table" ADD COLUMN "block_id" varchar;
  ALTER TABLE "pages_blocks_data_table" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "pages_blocks_data_table" ADD COLUMN "padding_top" "enum_pages_blocks_data_table_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_data_table" ADD COLUMN "padding_bottom" "enum_pages_blocks_data_table_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_faq" ADD COLUMN "padding_top" "enum_pages_blocks_faq_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_faq" ADD COLUMN "padding_bottom" "enum_pages_blocks_faq_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_feature_list" ADD COLUMN "padding_top" "enum_pages_blocks_feature_list_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_feature_list" ADD COLUMN "padding_bottom" "enum_pages_blocks_feature_list_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_media_content_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "pages_blocks_media_content" ADD COLUMN "padding_top" "enum_pages_blocks_media_content_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_media_content" ADD COLUMN "padding_bottom" "enum_pages_blocks_media_content_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_offer_list" ADD COLUMN "block_id" varchar;
  ALTER TABLE "pages_blocks_offer_list" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "pages_blocks_offer_list" ADD COLUMN "padding_top" "enum_pages_blocks_offer_list_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_offer_list" ADD COLUMN "padding_bottom" "enum_pages_blocks_offer_list_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_service_navigation" ADD COLUMN "padding_top" "enum_pages_blocks_service_navigation_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_service_navigation" ADD COLUMN "padding_bottom" "enum_pages_blocks_service_navigation_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_embed_code" ADD COLUMN "padding_top" "enum_pages_blocks_embed_code_padding_top" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_embed_code" ADD COLUMN "padding_bottom" "enum_pages_blocks_embed_code_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_cards_cards" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_cards" ADD COLUMN "block_id" varchar;
  ALTER TABLE "_pages_v_blocks_cards" ADD COLUMN "padding_top" "enum__pages_v_blocks_cards_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_cards" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_cards_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_cta_block_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_callout_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_callout" ADD COLUMN "padding_top" "enum__pages_v_blocks_callout_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_callout" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_callout_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_columns_columns_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD COLUMN "heading" varchar;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD COLUMN "value" varchar;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD COLUMN "note_html" jsonb;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD COLUMN "table_footnote_html" jsonb;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD COLUMN "table_cta_label" varchar;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD COLUMN "table_cta_href" varchar;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD COLUMN "table_cta_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_columns" ADD COLUMN "heading" varchar;
  ALTER TABLE "_pages_v_blocks_columns" ADD COLUMN "intro_html" jsonb;
  ALTER TABLE "_pages_v_blocks_columns" ADD COLUMN "padding_top" "enum__pages_v_blocks_columns_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_columns" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_columns_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_rich_text" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_data_table" ADD COLUMN "block_id" varchar;
  ALTER TABLE "_pages_v_blocks_data_table" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_data_table" ADD COLUMN "padding_top" "enum__pages_v_blocks_data_table_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_data_table" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_data_table_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_faq" ADD COLUMN "padding_top" "enum__pages_v_blocks_faq_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_faq" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_faq_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_feature_list" ADD COLUMN "padding_top" "enum__pages_v_blocks_feature_list_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_feature_list" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_feature_list_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_media_content_ctas" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_media_content" ADD COLUMN "padding_top" "enum__pages_v_blocks_media_content_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_media_content" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_media_content_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_offer_list" ADD COLUMN "block_id" varchar;
  ALTER TABLE "_pages_v_blocks_offer_list" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_offer_list" ADD COLUMN "padding_top" "enum__pages_v_blocks_offer_list_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_offer_list" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_offer_list_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_service_navigation" ADD COLUMN "padding_top" "enum__pages_v_blocks_service_navigation_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_service_navigation" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_service_navigation_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_embed_code" ADD COLUMN "padding_top" "enum__pages_v_blocks_embed_code_padding_top" DEFAULT 'standard';
  ALTER TABLE "_pages_v_blocks_embed_code" ADD COLUMN "padding_bottom" "enum__pages_v_blocks_embed_code_padding_bottom" DEFAULT 'standard';
  ALTER TABLE "pages_blocks_columns_columns_table_headers" ADD CONSTRAINT "pages_blocks_columns_columns_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns_columns_table_rows_cells" ADD CONSTRAINT "pages_blocks_columns_columns_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_columns_columns_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns_columns_table_rows" ADD CONSTRAINT "pages_blocks_columns_columns_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_columns_table_headers" ADD CONSTRAINT "_pages_v_blocks_columns_columns_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_columns_table_rows_cells" ADD CONSTRAINT "_pages_v_blocks_columns_columns_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_columns_columns_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_columns_table_rows" ADD CONSTRAINT "_pages_v_blocks_columns_columns_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_columns_columns_table_headers_order_idx" ON "pages_blocks_columns_columns_table_headers" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_columns_table_headers_parent_id_idx" ON "pages_blocks_columns_columns_table_headers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_columns_table_rows_cells_order_idx" ON "pages_blocks_columns_columns_table_rows_cells" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_columns_table_rows_cells_parent_id_idx" ON "pages_blocks_columns_columns_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_columns_table_rows_order_idx" ON "pages_blocks_columns_columns_table_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_columns_table_rows_parent_id_idx" ON "pages_blocks_columns_columns_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_columns_table_headers_order_idx" ON "_pages_v_blocks_columns_columns_table_headers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_columns_table_headers_parent_id_idx" ON "_pages_v_blocks_columns_columns_table_headers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_columns_table_rows_cells_order_idx" ON "_pages_v_blocks_columns_columns_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_columns_table_rows_cells_parent_id_idx" ON "_pages_v_blocks_columns_columns_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_columns_table_rows_order_idx" ON "_pages_v_blocks_columns_columns_table_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_columns_table_rows_parent_id_idx" ON "_pages_v_blocks_columns_columns_table_rows" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_columns_columns_table_headers" CASCADE;
  DROP TABLE "pages_blocks_columns_columns_table_rows_cells" CASCADE;
  DROP TABLE "pages_blocks_columns_columns_table_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_columns_table_headers" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_columns_table_rows_cells" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_columns_table_rows" CASCADE;
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "cta_new_tab";
  ALTER TABLE "pages_blocks_cards_cards" DROP COLUMN "cta_new_tab";
  ALTER TABLE "pages_blocks_cards" DROP COLUMN "block_id";
  ALTER TABLE "pages_blocks_cards" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_cards" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_cta_block_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "pages_blocks_callout_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "pages_blocks_callout" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_callout" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_columns_columns_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "pages_blocks_columns_columns" DROP COLUMN "heading";
  ALTER TABLE "pages_blocks_columns_columns" DROP COLUMN "value";
  ALTER TABLE "pages_blocks_columns_columns" DROP COLUMN "note_html";
  ALTER TABLE "pages_blocks_columns_columns" DROP COLUMN "table_footnote_html";
  ALTER TABLE "pages_blocks_columns_columns" DROP COLUMN "table_cta_label";
  ALTER TABLE "pages_blocks_columns_columns" DROP COLUMN "table_cta_href";
  ALTER TABLE "pages_blocks_columns_columns" DROP COLUMN "table_cta_new_tab";
  ALTER TABLE "pages_blocks_columns" DROP COLUMN "heading";
  ALTER TABLE "pages_blocks_columns" DROP COLUMN "intro_html";
  ALTER TABLE "pages_blocks_columns" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_columns" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_rich_text" DROP COLUMN "cta_new_tab";
  ALTER TABLE "pages_blocks_data_table" DROP COLUMN "block_id";
  ALTER TABLE "pages_blocks_data_table" DROP COLUMN "cta_new_tab";
  ALTER TABLE "pages_blocks_data_table" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_data_table" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_faq" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_faq" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_feature_list" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_feature_list" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_media_content_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "pages_blocks_media_content" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_media_content" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_offer_list" DROP COLUMN "block_id";
  ALTER TABLE "pages_blocks_offer_list" DROP COLUMN "cta_new_tab";
  ALTER TABLE "pages_blocks_offer_list" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_offer_list" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_service_navigation" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_service_navigation" DROP COLUMN "padding_bottom";
  ALTER TABLE "pages_blocks_embed_code" DROP COLUMN "padding_top";
  ALTER TABLE "pages_blocks_embed_code" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN "cta_new_tab";
  ALTER TABLE "_pages_v_blocks_cards_cards" DROP COLUMN "cta_new_tab";
  ALTER TABLE "_pages_v_blocks_cards" DROP COLUMN "block_id";
  ALTER TABLE "_pages_v_blocks_cards" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_cards" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_cta_block_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "_pages_v_blocks_callout_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "_pages_v_blocks_callout" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_callout" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_columns_columns_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "_pages_v_blocks_columns_columns" DROP COLUMN "heading";
  ALTER TABLE "_pages_v_blocks_columns_columns" DROP COLUMN "value";
  ALTER TABLE "_pages_v_blocks_columns_columns" DROP COLUMN "note_html";
  ALTER TABLE "_pages_v_blocks_columns_columns" DROP COLUMN "table_footnote_html";
  ALTER TABLE "_pages_v_blocks_columns_columns" DROP COLUMN "table_cta_label";
  ALTER TABLE "_pages_v_blocks_columns_columns" DROP COLUMN "table_cta_href";
  ALTER TABLE "_pages_v_blocks_columns_columns" DROP COLUMN "table_cta_new_tab";
  ALTER TABLE "_pages_v_blocks_columns" DROP COLUMN "heading";
  ALTER TABLE "_pages_v_blocks_columns" DROP COLUMN "intro_html";
  ALTER TABLE "_pages_v_blocks_columns" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_columns" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_rich_text" DROP COLUMN "cta_new_tab";
  ALTER TABLE "_pages_v_blocks_data_table" DROP COLUMN "block_id";
  ALTER TABLE "_pages_v_blocks_data_table" DROP COLUMN "cta_new_tab";
  ALTER TABLE "_pages_v_blocks_data_table" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_data_table" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_faq" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_faq" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_feature_list" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_feature_list" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_media_content_ctas" DROP COLUMN "new_tab";
  ALTER TABLE "_pages_v_blocks_media_content" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_media_content" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_offer_list" DROP COLUMN "block_id";
  ALTER TABLE "_pages_v_blocks_offer_list" DROP COLUMN "cta_new_tab";
  ALTER TABLE "_pages_v_blocks_offer_list" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_offer_list" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_service_navigation" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_service_navigation" DROP COLUMN "padding_bottom";
  ALTER TABLE "_pages_v_blocks_embed_code" DROP COLUMN "padding_top";
  ALTER TABLE "_pages_v_blocks_embed_code" DROP COLUMN "padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_cards_padding_top";
  DROP TYPE "public"."enum_pages_blocks_cards_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_callout_padding_top";
  DROP TYPE "public"."enum_pages_blocks_callout_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_columns_padding_top";
  DROP TYPE "public"."enum_pages_blocks_columns_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_data_table_padding_top";
  DROP TYPE "public"."enum_pages_blocks_data_table_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_faq_padding_top";
  DROP TYPE "public"."enum_pages_blocks_faq_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_feature_list_padding_top";
  DROP TYPE "public"."enum_pages_blocks_feature_list_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_media_content_padding_top";
  DROP TYPE "public"."enum_pages_blocks_media_content_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_offer_list_padding_top";
  DROP TYPE "public"."enum_pages_blocks_offer_list_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_service_navigation_padding_top";
  DROP TYPE "public"."enum_pages_blocks_service_navigation_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_embed_code_padding_top";
  DROP TYPE "public"."enum_pages_blocks_embed_code_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_cards_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_cards_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_callout_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_callout_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_columns_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_columns_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_faq_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_faq_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_offer_list_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_offer_list_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_service_navigation_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_service_navigation_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_embed_code_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_embed_code_padding_bottom";`)
}
