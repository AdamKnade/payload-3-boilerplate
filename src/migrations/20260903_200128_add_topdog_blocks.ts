import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_hero_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_cards_cards_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_cards_variant" AS ENUM('value', 'pricing', 'package', 'suite');
  CREATE TYPE "public"."enum_pages_blocks_cards_columns" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_cards_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_cards_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_cards_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_cta_block_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_cta_block_text_width" AS ENUM('600', '800', '1000', '1200');
  CREATE TYPE "public"."enum_pages_blocks_cta_block_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_cta_block_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_cta_block_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_cta_block_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_callout_layout" AS ENUM('centered', 'split', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_callout_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_callout_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_columns_columns_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_columns_display" AS ENUM('plain', 'separated', 'cards');
  CREATE TYPE "public"."enum_pages_blocks_columns_column_count" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_columns_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_columns_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_columns_padding" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_text_width" AS ENUM('600', '800', '1000');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_floating_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_data_table_variant" AS ENUM('standard', 'pricing', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_data_table_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_data_table_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_data_table_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_faq_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_faq_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_columns" AS ENUM('1', '2');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_image_block_loading" AS ENUM('eager', 'lazy');
  CREATE TYPE "public"."enum_pages_blocks_image_block_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_image_block_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_media_content_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_media_content_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_media_content_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_offer_list_variant" AS ENUM('detailed', 'compact', 'menu');
  CREATE TYPE "public"."enum_pages_blocks_offer_list_columns" AS ENUM('1', '2');
  CREATE TYPE "public"."enum_pages_blocks_offer_list_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_offer_list_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_service_navigation_behavior" AS ENUM('switch', 'navigate');
  CREATE TYPE "public"."enum_pages_blocks_service_navigation_active_service" AS ENUM('daycare', 'overnight', 'enrichment', 'spa');
  CREATE TYPE "public"."enum_pages_blocks_service_navigation_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum_pages_blocks_service_navigation_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_cards_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_variant" AS ENUM('value', 'pricing', 'package', 'suite');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_columns" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_block_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_block_text_width" AS ENUM('600', '800', '1000', '1200');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_block_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_block_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_block_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_block_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_callout_layout" AS ENUM('centered', 'split', 'compact');
  CREATE TYPE "public"."enum__pages_v_blocks_callout_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_callout_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_columns_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_display" AS ENUM('plain', 'separated', 'cards');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_column_count" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_padding" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_text_width" AS ENUM('600', '800', '1000');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_padding_top" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_padding_bottom" AS ENUM('none', 'compact', 'standard', 'roomy');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_floating_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_variant" AS ENUM('standard', 'pricing', 'compact');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_columns" AS ENUM('1', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_image_block_loading" AS ENUM('eager', 'lazy');
  CREATE TYPE "public"."enum__pages_v_blocks_image_block_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_image_block_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_offer_list_variant" AS ENUM('detailed', 'compact', 'menu');
  CREATE TYPE "public"."enum__pages_v_blocks_offer_list_columns" AS ENUM('1', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_offer_list_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_offer_list_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_service_navigation_behavior" AS ENUM('switch', 'navigate');
  CREATE TYPE "public"."enum__pages_v_blocks_service_navigation_active_service" AS ENUM('daycare', 'overnight', 'enrichment', 'spa');
  CREATE TYPE "public"."enum__pages_v_blocks_service_navigation_width" AS ENUM('full', '1000', '1200', '1400');
  CREATE TYPE "public"."enum__pages_v_blocks_service_navigation_tone" AS ENUM('white', 'beige', 'sage', 'green', 'dark');
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"heading" varchar,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"width" "enum_pages_blocks_hero_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_hero_tone" DEFAULT 'dark',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_pages_blocks_cards_cards_tone" DEFAULT 'white',
  	"icon" varchar,
  	"image_id" integer,
  	"eyebrow" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"value" varchar,
  	"body_html" jsonb,
  	"cta_label" varchar,
  	"cta_href" varchar
  );
  
  CREATE TABLE "pages_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"variant" "enum_pages_blocks_cards_variant" DEFAULT 'value',
  	"columns" "enum_pages_blocks_cards_columns" DEFAULT '3',
  	"align" "enum_pages_blocks_cards_align" DEFAULT 'left',
  	"width" "enum_pages_blocks_cards_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_cards_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_block_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"body_html" jsonb,
  	"align" "enum_pages_blocks_cta_block_align" DEFAULT 'center',
  	"text_width" "enum_pages_blocks_cta_block_text_width" DEFAULT '1200',
  	"width" "enum_pages_blocks_cta_block_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_cta_block_tone" DEFAULT 'white',
  	"padding_top" "enum_pages_blocks_cta_block_padding_top" DEFAULT 'standard',
  	"padding_bottom" "enum_pages_blocks_cta_block_padding_bottom" DEFAULT 'standard',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_callout_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"value" varchar,
  	"body_html" jsonb,
  	"image_id" integer,
  	"layout" "enum_pages_blocks_callout_layout" DEFAULT 'centered',
  	"width" "enum_pages_blocks_callout_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_callout_tone" DEFAULT 'beige',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_columns_columns_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"body_html" jsonb,
  	"tone" "enum_pages_blocks_columns_columns_tone" DEFAULT 'white'
  );
  
  CREATE TABLE "pages_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"display" "enum_pages_blocks_columns_display" DEFAULT 'plain',
  	"column_count" "enum_pages_blocks_columns_column_count" DEFAULT '2',
  	"footer_html" jsonb,
  	"divider" boolean DEFAULT false,
  	"width" "enum_pages_blocks_columns_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_columns_tone" DEFAULT 'white',
  	"padding" "enum_pages_blocks_columns_padding" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body_html" jsonb,
  	"align" "enum_pages_blocks_rich_text_align" DEFAULT 'left',
  	"text_width" "enum_pages_blocks_rich_text_text_width" DEFAULT '800',
  	"width" "enum_pages_blocks_rich_text_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_rich_text_tone" DEFAULT 'white',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"padding_top" "enum_pages_blocks_rich_text_padding_top" DEFAULT 'standard',
  	"padding_bottom" "enum_pages_blocks_rich_text_padding_bottom" DEFAULT 'standard',
  	"floating_media_image_id" integer,
  	"floating_media_caption" varchar,
  	"floating_media_sub_caption" varchar,
  	"floating_media_position" "enum_pages_blocks_rich_text_floating_media_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_data_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" jsonb
  );
  
  CREATE TABLE "pages_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" jsonb
  );
  
  CREATE TABLE "pages_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"variant" "enum_pages_blocks_data_table_variant" DEFAULT 'standard',
  	"align" "enum_pages_blocks_data_table_align" DEFAULT 'left',
  	"highlighted_row" numeric,
  	"footnotes_html" jsonb,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"width" "enum_pages_blocks_data_table_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_data_table_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer_html" jsonb
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"heading" varchar DEFAULT 'FAQs',
  	"intro_html" jsonb,
  	"width" "enum_pages_blocks_faq_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_faq_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"body_html" jsonb
  );
  
  CREATE TABLE "pages_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"columns" "enum_pages_blocks_feature_list_columns" DEFAULT '2',
  	"numbered" boolean DEFAULT false,
  	"width" "enum_pages_blocks_feature_list_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_feature_list_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"aspect_ratio" varchar DEFAULT '16 / 9',
  	"mobile_aspect_ratio" varchar,
  	"object_position" varchar DEFAULT 'center',
  	"loading" "enum_pages_blocks_image_block_loading" DEFAULT 'lazy',
  	"width" "enum_pages_blocks_image_block_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_image_block_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_content_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_media_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body_html" jsonb,
  	"media_position" "enum_pages_blocks_media_content_media_position" DEFAULT 'left',
  	"width" "enum_pages_blocks_media_content_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_media_content_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_offer_list_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body_html" jsonb,
  	"value" varchar,
  	"badge" varchar,
  	"icon" varchar
  );
  
  CREATE TABLE "pages_blocks_offer_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"variant" "enum_pages_blocks_offer_list_variant" DEFAULT 'detailed',
  	"columns" "enum_pages_blocks_offer_list_columns" DEFAULT '1',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"width" "enum_pages_blocks_offer_list_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_offer_list_tone" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_service_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"behavior" "enum_pages_blocks_service_navigation_behavior" DEFAULT 'switch',
  	"active_service" "enum_pages_blocks_service_navigation_active_service" DEFAULT 'overnight',
  	"width" "enum_pages_blocks_service_navigation_width" DEFAULT 'full',
  	"tone" "enum_pages_blocks_service_navigation_tone" DEFAULT 'beige',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"heading" varchar,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"width" "enum__pages_v_blocks_hero_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_hero_tone" DEFAULT 'dark',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__pages_v_blocks_cards_cards_tone" DEFAULT 'white',
  	"icon" varchar,
  	"image_id" integer,
  	"eyebrow" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"value" varchar,
  	"body_html" jsonb,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"variant" "enum__pages_v_blocks_cards_variant" DEFAULT 'value',
  	"columns" "enum__pages_v_blocks_cards_columns" DEFAULT '3',
  	"align" "enum__pages_v_blocks_cards_align" DEFAULT 'left',
  	"width" "enum__pages_v_blocks_cards_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_cards_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_block_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"body_html" jsonb,
  	"align" "enum__pages_v_blocks_cta_block_align" DEFAULT 'center',
  	"text_width" "enum__pages_v_blocks_cta_block_text_width" DEFAULT '1200',
  	"width" "enum__pages_v_blocks_cta_block_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_cta_block_tone" DEFAULT 'white',
  	"padding_top" "enum__pages_v_blocks_cta_block_padding_top" DEFAULT 'standard',
  	"padding_bottom" "enum__pages_v_blocks_cta_block_padding_bottom" DEFAULT 'standard',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_callout_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"value" varchar,
  	"body_html" jsonb,
  	"image_id" integer,
  	"layout" "enum__pages_v_blocks_callout_layout" DEFAULT 'centered',
  	"width" "enum__pages_v_blocks_callout_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_callout_tone" DEFAULT 'beige',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns_columns_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"body_html" jsonb,
  	"tone" "enum__pages_v_blocks_columns_columns_tone" DEFAULT 'white',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"display" "enum__pages_v_blocks_columns_display" DEFAULT 'plain',
  	"column_count" "enum__pages_v_blocks_columns_column_count" DEFAULT '2',
  	"footer_html" jsonb,
  	"divider" boolean DEFAULT false,
  	"width" "enum__pages_v_blocks_columns_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_columns_tone" DEFAULT 'white',
  	"padding" "enum__pages_v_blocks_columns_padding" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body_html" jsonb,
  	"align" "enum__pages_v_blocks_rich_text_align" DEFAULT 'left',
  	"text_width" "enum__pages_v_blocks_rich_text_text_width" DEFAULT '800',
  	"width" "enum__pages_v_blocks_rich_text_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_rich_text_tone" DEFAULT 'white',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"padding_top" "enum__pages_v_blocks_rich_text_padding_top" DEFAULT 'standard',
  	"padding_bottom" "enum__pages_v_blocks_rich_text_padding_bottom" DEFAULT 'standard',
  	"floating_media_image_id" integer,
  	"floating_media_caption" varchar,
  	"floating_media_sub_caption" varchar,
  	"floating_media_position" "enum__pages_v_blocks_rich_text_floating_media_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"variant" "enum__pages_v_blocks_data_table_variant" DEFAULT 'standard',
  	"align" "enum__pages_v_blocks_data_table_align" DEFAULT 'left',
  	"highlighted_row" numeric,
  	"footnotes_html" jsonb,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"width" "enum__pages_v_blocks_data_table_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_data_table_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer_html" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"heading" varchar DEFAULT 'FAQs',
  	"intro_html" jsonb,
  	"width" "enum__pages_v_blocks_faq_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_faq_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"body_html" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_id" varchar,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"columns" "enum__pages_v_blocks_feature_list_columns" DEFAULT '2',
  	"numbered" boolean DEFAULT false,
  	"width" "enum__pages_v_blocks_feature_list_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_feature_list_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"aspect_ratio" varchar DEFAULT '16 / 9',
  	"mobile_aspect_ratio" varchar,
  	"object_position" varchar DEFAULT 'center',
  	"loading" "enum__pages_v_blocks_image_block_loading" DEFAULT 'lazy',
  	"width" "enum__pages_v_blocks_image_block_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_image_block_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_content_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body_html" jsonb,
  	"media_position" "enum__pages_v_blocks_media_content_media_position" DEFAULT 'left',
  	"width" "enum__pages_v_blocks_media_content_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_media_content_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_offer_list_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body_html" jsonb,
  	"value" varchar,
  	"badge" varchar,
  	"icon" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_offer_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro_html" jsonb,
  	"variant" "enum__pages_v_blocks_offer_list_variant" DEFAULT 'detailed',
  	"columns" "enum__pages_v_blocks_offer_list_columns" DEFAULT '1',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"width" "enum__pages_v_blocks_offer_list_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_offer_list_tone" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"behavior" "enum__pages_v_blocks_service_navigation_behavior" DEFAULT 'switch',
  	"active_service" "enum__pages_v_blocks_service_navigation_active_service" DEFAULT 'overnight',
  	"width" "enum__pages_v_blocks_service_navigation_width" DEFAULT 'full',
  	"tone" "enum__pages_v_blocks_service_navigation_tone" DEFAULT 'beige',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_cards" ADD CONSTRAINT "pages_blocks_cards_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_cards" ADD CONSTRAINT "pages_blocks_cards_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards" ADD CONSTRAINT "pages_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_block_ctas" ADD CONSTRAINT "pages_blocks_cta_block_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_block" ADD CONSTRAINT "pages_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_callout_ctas" ADD CONSTRAINT "pages_blocks_callout_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_callout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_callout" ADD CONSTRAINT "pages_blocks_callout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_callout" ADD CONSTRAINT "pages_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns_columns_ctas" ADD CONSTRAINT "pages_blocks_columns_columns_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns_columns" ADD CONSTRAINT "pages_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns" ADD CONSTRAINT "pages_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_floating_media_image_id_media_id_fk" FOREIGN KEY ("floating_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_headers" ADD CONSTRAINT "pages_blocks_data_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_rows_cells" ADD CONSTRAINT "pages_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_rows" ADD CONSTRAINT "pages_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table" ADD CONSTRAINT "pages_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list_items" ADD CONSTRAINT "pages_blocks_feature_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list" ADD CONSTRAINT "pages_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_block" ADD CONSTRAINT "pages_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_block" ADD CONSTRAINT "pages_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content_ctas" ADD CONSTRAINT "pages_blocks_media_content_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content" ADD CONSTRAINT "pages_blocks_media_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content" ADD CONSTRAINT "pages_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offer_list_offers" ADD CONSTRAINT "pages_blocks_offer_list_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offer_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offer_list" ADD CONSTRAINT "pages_blocks_offer_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_navigation" ADD CONSTRAINT "pages_blocks_service_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_cards" ADD CONSTRAINT "_pages_v_blocks_cards_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_cards" ADD CONSTRAINT "_pages_v_blocks_cards_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards" ADD CONSTRAINT "_pages_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_block_ctas" ADD CONSTRAINT "_pages_v_blocks_cta_block_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_block" ADD CONSTRAINT "_pages_v_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_callout_ctas" ADD CONSTRAINT "_pages_v_blocks_callout_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_callout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_callout" ADD CONSTRAINT "_pages_v_blocks_callout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_callout" ADD CONSTRAINT "_pages_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_columns_ctas" ADD CONSTRAINT "_pages_v_blocks_columns_columns_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD CONSTRAINT "_pages_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns" ADD CONSTRAINT "_pages_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_floating_media_image_id_media_id_fk" FOREIGN KEY ("floating_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_headers" ADD CONSTRAINT "_pages_v_blocks_data_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_rows_cells" ADD CONSTRAINT "_pages_v_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_rows" ADD CONSTRAINT "_pages_v_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table" ADD CONSTRAINT "_pages_v_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_list_items" ADD CONSTRAINT "_pages_v_blocks_feature_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_list" ADD CONSTRAINT "_pages_v_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_block" ADD CONSTRAINT "_pages_v_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_block" ADD CONSTRAINT "_pages_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content_ctas" ADD CONSTRAINT "_pages_v_blocks_media_content_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content" ADD CONSTRAINT "_pages_v_blocks_media_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content" ADD CONSTRAINT "_pages_v_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offer_list_offers" ADD CONSTRAINT "_pages_v_blocks_offer_list_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offer_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offer_list" ADD CONSTRAINT "_pages_v_blocks_offer_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_navigation" ADD CONSTRAINT "_pages_v_blocks_service_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cards_cards_order_idx" ON "pages_blocks_cards_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_cards_parent_id_idx" ON "pages_blocks_cards_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_cards_image_idx" ON "pages_blocks_cards_cards" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cards_order_idx" ON "pages_blocks_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_parent_id_idx" ON "pages_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_path_idx" ON "pages_blocks_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_block_ctas_order_idx" ON "pages_blocks_cta_block_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_block_ctas_parent_id_idx" ON "pages_blocks_cta_block_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_block_order_idx" ON "pages_blocks_cta_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_block_parent_id_idx" ON "pages_blocks_cta_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_block_path_idx" ON "pages_blocks_cta_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_callout_ctas_order_idx" ON "pages_blocks_callout_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_callout_ctas_parent_id_idx" ON "pages_blocks_callout_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_callout_order_idx" ON "pages_blocks_callout" USING btree ("_order");
  CREATE INDEX "pages_blocks_callout_parent_id_idx" ON "pages_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_callout_path_idx" ON "pages_blocks_callout" USING btree ("_path");
  CREATE INDEX "pages_blocks_callout_image_idx" ON "pages_blocks_callout" USING btree ("image_id");
  CREATE INDEX "pages_blocks_columns_columns_ctas_order_idx" ON "pages_blocks_columns_columns_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_columns_ctas_parent_id_idx" ON "pages_blocks_columns_columns_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_columns_order_idx" ON "pages_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_columns_parent_id_idx" ON "pages_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_order_idx" ON "pages_blocks_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_parent_id_idx" ON "pages_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_path_idx" ON "pages_blocks_columns" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_floating_media_floating_media_ima_idx" ON "pages_blocks_rich_text" USING btree ("floating_media_image_id");
  CREATE INDEX "pages_blocks_data_table_headers_order_idx" ON "pages_blocks_data_table_headers" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_headers_parent_id_idx" ON "pages_blocks_data_table_headers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_table_rows_cells_order_idx" ON "pages_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_rows_cells_parent_id_idx" ON "pages_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_table_rows_order_idx" ON "pages_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_rows_parent_id_idx" ON "pages_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_table_order_idx" ON "pages_blocks_data_table" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_parent_id_idx" ON "pages_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_table_path_idx" ON "pages_blocks_data_table" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_list_items_order_idx" ON "pages_blocks_feature_list_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_list_items_parent_id_idx" ON "pages_blocks_feature_list_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_list_order_idx" ON "pages_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_list_parent_id_idx" ON "pages_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_list_path_idx" ON "pages_blocks_feature_list" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_block_order_idx" ON "pages_blocks_image_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_block_parent_id_idx" ON "pages_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_block_path_idx" ON "pages_blocks_image_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_block_image_idx" ON "pages_blocks_image_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_media_content_ctas_order_idx" ON "pages_blocks_media_content_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_content_ctas_parent_id_idx" ON "pages_blocks_media_content_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_content_order_idx" ON "pages_blocks_media_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_content_parent_id_idx" ON "pages_blocks_media_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_content_path_idx" ON "pages_blocks_media_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_content_image_idx" ON "pages_blocks_media_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_offer_list_offers_order_idx" ON "pages_blocks_offer_list_offers" USING btree ("_order");
  CREATE INDEX "pages_blocks_offer_list_offers_parent_id_idx" ON "pages_blocks_offer_list_offers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_offer_list_order_idx" ON "pages_blocks_offer_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_offer_list_parent_id_idx" ON "pages_blocks_offer_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_offer_list_path_idx" ON "pages_blocks_offer_list" USING btree ("_path");
  CREATE INDEX "pages_blocks_service_navigation_order_idx" ON "pages_blocks_service_navigation" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_navigation_parent_id_idx" ON "pages_blocks_service_navigation" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_navigation_path_idx" ON "pages_blocks_service_navigation" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cards_cards_order_idx" ON "_pages_v_blocks_cards_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_cards_parent_id_idx" ON "_pages_v_blocks_cards_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_cards_image_idx" ON "_pages_v_blocks_cards_cards" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cards_order_idx" ON "_pages_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_parent_id_idx" ON "_pages_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_path_idx" ON "_pages_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_block_ctas_order_idx" ON "_pages_v_blocks_cta_block_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_block_ctas_parent_id_idx" ON "_pages_v_blocks_cta_block_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_block_order_idx" ON "_pages_v_blocks_cta_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_block_parent_id_idx" ON "_pages_v_blocks_cta_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_block_path_idx" ON "_pages_v_blocks_cta_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_callout_ctas_order_idx" ON "_pages_v_blocks_callout_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_callout_ctas_parent_id_idx" ON "_pages_v_blocks_callout_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_callout_order_idx" ON "_pages_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_callout_parent_id_idx" ON "_pages_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_callout_path_idx" ON "_pages_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_callout_image_idx" ON "_pages_v_blocks_callout" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_columns_columns_ctas_order_idx" ON "_pages_v_blocks_columns_columns_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_columns_ctas_parent_id_idx" ON "_pages_v_blocks_columns_columns_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_columns_order_idx" ON "_pages_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_columns_parent_id_idx" ON "_pages_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_order_idx" ON "_pages_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_parent_id_idx" ON "_pages_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_path_idx" ON "_pages_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rich_text_floating_media_floating_media__idx" ON "_pages_v_blocks_rich_text" USING btree ("floating_media_image_id");
  CREATE INDEX "_pages_v_blocks_data_table_headers_order_idx" ON "_pages_v_blocks_data_table_headers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_headers_parent_id_idx" ON "_pages_v_blocks_data_table_headers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_rows_cells_order_idx" ON "_pages_v_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_rows_cells_parent_id_idx" ON "_pages_v_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_rows_order_idx" ON "_pages_v_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_rows_parent_id_idx" ON "_pages_v_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_order_idx" ON "_pages_v_blocks_data_table" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_parent_id_idx" ON "_pages_v_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_path_idx" ON "_pages_v_blocks_data_table" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_items_order_idx" ON "_pages_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature_list_items_order_idx" ON "_pages_v_blocks_feature_list_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_list_items_parent_id_idx" ON "_pages_v_blocks_feature_list_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_list_order_idx" ON "_pages_v_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_list_parent_id_idx" ON "_pages_v_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_list_path_idx" ON "_pages_v_blocks_feature_list" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_block_order_idx" ON "_pages_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_block_parent_id_idx" ON "_pages_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_block_path_idx" ON "_pages_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_block_image_idx" ON "_pages_v_blocks_image_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_media_content_ctas_order_idx" ON "_pages_v_blocks_media_content_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_content_ctas_parent_id_idx" ON "_pages_v_blocks_media_content_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_content_order_idx" ON "_pages_v_blocks_media_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_content_parent_id_idx" ON "_pages_v_blocks_media_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_content_path_idx" ON "_pages_v_blocks_media_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_content_image_idx" ON "_pages_v_blocks_media_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_offer_list_offers_order_idx" ON "_pages_v_blocks_offer_list_offers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_offer_list_offers_parent_id_idx" ON "_pages_v_blocks_offer_list_offers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_offer_list_order_idx" ON "_pages_v_blocks_offer_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_offer_list_parent_id_idx" ON "_pages_v_blocks_offer_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_offer_list_path_idx" ON "_pages_v_blocks_offer_list" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_service_navigation_order_idx" ON "_pages_v_blocks_service_navigation" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_navigation_parent_id_idx" ON "_pages_v_blocks_service_navigation" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_navigation_path_idx" ON "_pages_v_blocks_service_navigation" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_cards_cards" CASCADE;
  DROP TABLE "pages_blocks_cards" CASCADE;
  DROP TABLE "pages_blocks_cta_block_ctas" CASCADE;
  DROP TABLE "pages_blocks_cta_block" CASCADE;
  DROP TABLE "pages_blocks_callout_ctas" CASCADE;
  DROP TABLE "pages_blocks_callout" CASCADE;
  DROP TABLE "pages_blocks_columns_columns_ctas" CASCADE;
  DROP TABLE "pages_blocks_columns_columns" CASCADE;
  DROP TABLE "pages_blocks_columns" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_data_table_headers" CASCADE;
  DROP TABLE "pages_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "pages_blocks_data_table_rows" CASCADE;
  DROP TABLE "pages_blocks_data_table" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_feature_list_items" CASCADE;
  DROP TABLE "pages_blocks_feature_list" CASCADE;
  DROP TABLE "pages_blocks_image_block" CASCADE;
  DROP TABLE "pages_blocks_media_content_ctas" CASCADE;
  DROP TABLE "pages_blocks_media_content" CASCADE;
  DROP TABLE "pages_blocks_offer_list_offers" CASCADE;
  DROP TABLE "pages_blocks_offer_list" CASCADE;
  DROP TABLE "pages_blocks_service_navigation" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_block_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_block" CASCADE;
  DROP TABLE "_pages_v_blocks_callout_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_callout" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_columns_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_headers" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_list" CASCADE;
  DROP TABLE "_pages_v_blocks_image_block" CASCADE;
  DROP TABLE "_pages_v_blocks_media_content_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_media_content" CASCADE;
  DROP TABLE "_pages_v_blocks_offer_list_offers" CASCADE;
  DROP TABLE "_pages_v_blocks_offer_list" CASCADE;
  DROP TABLE "_pages_v_blocks_service_navigation" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_hero_width";
  DROP TYPE "public"."enum_pages_blocks_hero_tone";
  DROP TYPE "public"."enum_pages_blocks_cards_cards_tone";
  DROP TYPE "public"."enum_pages_blocks_cards_variant";
  DROP TYPE "public"."enum_pages_blocks_cards_columns";
  DROP TYPE "public"."enum_pages_blocks_cards_align";
  DROP TYPE "public"."enum_pages_blocks_cards_width";
  DROP TYPE "public"."enum_pages_blocks_cards_tone";
  DROP TYPE "public"."enum_pages_blocks_cta_block_align";
  DROP TYPE "public"."enum_pages_blocks_cta_block_text_width";
  DROP TYPE "public"."enum_pages_blocks_cta_block_width";
  DROP TYPE "public"."enum_pages_blocks_cta_block_tone";
  DROP TYPE "public"."enum_pages_blocks_cta_block_padding_top";
  DROP TYPE "public"."enum_pages_blocks_cta_block_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_callout_layout";
  DROP TYPE "public"."enum_pages_blocks_callout_width";
  DROP TYPE "public"."enum_pages_blocks_callout_tone";
  DROP TYPE "public"."enum_pages_blocks_columns_columns_tone";
  DROP TYPE "public"."enum_pages_blocks_columns_display";
  DROP TYPE "public"."enum_pages_blocks_columns_column_count";
  DROP TYPE "public"."enum_pages_blocks_columns_width";
  DROP TYPE "public"."enum_pages_blocks_columns_tone";
  DROP TYPE "public"."enum_pages_blocks_columns_padding";
  DROP TYPE "public"."enum_pages_blocks_rich_text_align";
  DROP TYPE "public"."enum_pages_blocks_rich_text_text_width";
  DROP TYPE "public"."enum_pages_blocks_rich_text_width";
  DROP TYPE "public"."enum_pages_blocks_rich_text_tone";
  DROP TYPE "public"."enum_pages_blocks_rich_text_padding_top";
  DROP TYPE "public"."enum_pages_blocks_rich_text_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_rich_text_floating_media_position";
  DROP TYPE "public"."enum_pages_blocks_data_table_variant";
  DROP TYPE "public"."enum_pages_blocks_data_table_align";
  DROP TYPE "public"."enum_pages_blocks_data_table_width";
  DROP TYPE "public"."enum_pages_blocks_data_table_tone";
  DROP TYPE "public"."enum_pages_blocks_faq_width";
  DROP TYPE "public"."enum_pages_blocks_faq_tone";
  DROP TYPE "public"."enum_pages_blocks_feature_list_columns";
  DROP TYPE "public"."enum_pages_blocks_feature_list_width";
  DROP TYPE "public"."enum_pages_blocks_feature_list_tone";
  DROP TYPE "public"."enum_pages_blocks_image_block_loading";
  DROP TYPE "public"."enum_pages_blocks_image_block_width";
  DROP TYPE "public"."enum_pages_blocks_image_block_tone";
  DROP TYPE "public"."enum_pages_blocks_media_content_media_position";
  DROP TYPE "public"."enum_pages_blocks_media_content_width";
  DROP TYPE "public"."enum_pages_blocks_media_content_tone";
  DROP TYPE "public"."enum_pages_blocks_offer_list_variant";
  DROP TYPE "public"."enum_pages_blocks_offer_list_columns";
  DROP TYPE "public"."enum_pages_blocks_offer_list_width";
  DROP TYPE "public"."enum_pages_blocks_offer_list_tone";
  DROP TYPE "public"."enum_pages_blocks_service_navigation_behavior";
  DROP TYPE "public"."enum_pages_blocks_service_navigation_active_service";
  DROP TYPE "public"."enum_pages_blocks_service_navigation_width";
  DROP TYPE "public"."enum_pages_blocks_service_navigation_tone";
  DROP TYPE "public"."enum__pages_v_blocks_hero_width";
  DROP TYPE "public"."enum__pages_v_blocks_hero_tone";
  DROP TYPE "public"."enum__pages_v_blocks_cards_cards_tone";
  DROP TYPE "public"."enum__pages_v_blocks_cards_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cards_columns";
  DROP TYPE "public"."enum__pages_v_blocks_cards_align";
  DROP TYPE "public"."enum__pages_v_blocks_cards_width";
  DROP TYPE "public"."enum__pages_v_blocks_cards_tone";
  DROP TYPE "public"."enum__pages_v_blocks_cta_block_align";
  DROP TYPE "public"."enum__pages_v_blocks_cta_block_text_width";
  DROP TYPE "public"."enum__pages_v_blocks_cta_block_width";
  DROP TYPE "public"."enum__pages_v_blocks_cta_block_tone";
  DROP TYPE "public"."enum__pages_v_blocks_cta_block_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_cta_block_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_callout_layout";
  DROP TYPE "public"."enum__pages_v_blocks_callout_width";
  DROP TYPE "public"."enum__pages_v_blocks_callout_tone";
  DROP TYPE "public"."enum__pages_v_blocks_columns_columns_tone";
  DROP TYPE "public"."enum__pages_v_blocks_columns_display";
  DROP TYPE "public"."enum__pages_v_blocks_columns_column_count";
  DROP TYPE "public"."enum__pages_v_blocks_columns_width";
  DROP TYPE "public"."enum__pages_v_blocks_columns_tone";
  DROP TYPE "public"."enum__pages_v_blocks_columns_padding";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_align";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_text_width";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_tone";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_floating_media_position";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_variant";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_align";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_width";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_tone";
  DROP TYPE "public"."enum__pages_v_blocks_faq_width";
  DROP TYPE "public"."enum__pages_v_blocks_faq_tone";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_columns";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_width";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_tone";
  DROP TYPE "public"."enum__pages_v_blocks_image_block_loading";
  DROP TYPE "public"."enum__pages_v_blocks_image_block_width";
  DROP TYPE "public"."enum__pages_v_blocks_image_block_tone";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_media_position";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_width";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_tone";
  DROP TYPE "public"."enum__pages_v_blocks_offer_list_variant";
  DROP TYPE "public"."enum__pages_v_blocks_offer_list_columns";
  DROP TYPE "public"."enum__pages_v_blocks_offer_list_width";
  DROP TYPE "public"."enum__pages_v_blocks_offer_list_tone";
  DROP TYPE "public"."enum__pages_v_blocks_service_navigation_behavior";
  DROP TYPE "public"."enum__pages_v_blocks_service_navigation_active_service";
  DROP TYPE "public"."enum__pages_v_blocks_service_navigation_width";
  DROP TYPE "public"."enum__pages_v_blocks_service_navigation_tone";`)
}
