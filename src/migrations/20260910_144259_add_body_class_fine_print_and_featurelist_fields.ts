import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_feature_list_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_label_style" AS ENUM('heading', 'meta');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_label_style" AS ENUM('heading', 'meta');
  ALTER TYPE "public"."enum_pages_blocks_rich_text_body_variant" ADD VALUE 'fine-print';
  ALTER TYPE "public"."enum__pages_v_blocks_rich_text_body_variant" ADD VALUE 'fine-print';
  ALTER TABLE "pages_blocks_feature_list" ADD COLUMN "align" "enum_pages_blocks_feature_list_align" DEFAULT 'left';
  ALTER TABLE "pages_blocks_feature_list" ADD COLUMN "label_style" "enum_pages_blocks_feature_list_label_style" DEFAULT 'heading';
  ALTER TABLE "pages" ADD COLUMN "body_class" varchar;
  ALTER TABLE "_pages_v_blocks_feature_list" ADD COLUMN "align" "enum__pages_v_blocks_feature_list_align" DEFAULT 'left';
  ALTER TABLE "_pages_v_blocks_feature_list" ADD COLUMN "label_style" "enum__pages_v_blocks_feature_list_label_style" DEFAULT 'heading';
  ALTER TABLE "_pages_v" ADD COLUMN "version_body_class" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_rich_text" ALTER COLUMN "body_variant" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_rich_text" ALTER COLUMN "body_variant" SET DEFAULT ''::text;
  DROP TYPE "public"."enum_pages_blocks_rich_text_body_variant";
  CREATE TYPE "public"."enum_pages_blocks_rich_text_body_variant" AS ENUM('', 'schedule');
  ALTER TABLE "pages_blocks_rich_text" ALTER COLUMN "body_variant" SET DEFAULT ''::"public"."enum_pages_blocks_rich_text_body_variant";
  ALTER TABLE "pages_blocks_rich_text" ALTER COLUMN "body_variant" SET DATA TYPE "public"."enum_pages_blocks_rich_text_body_variant" USING "body_variant"::"public"."enum_pages_blocks_rich_text_body_variant";
  ALTER TABLE "_pages_v_blocks_rich_text" ALTER COLUMN "body_variant" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_rich_text" ALTER COLUMN "body_variant" SET DEFAULT ''::text;
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_body_variant";
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_body_variant" AS ENUM('', 'schedule');
  ALTER TABLE "_pages_v_blocks_rich_text" ALTER COLUMN "body_variant" SET DEFAULT ''::"public"."enum__pages_v_blocks_rich_text_body_variant";
  ALTER TABLE "_pages_v_blocks_rich_text" ALTER COLUMN "body_variant" SET DATA TYPE "public"."enum__pages_v_blocks_rich_text_body_variant" USING "body_variant"::"public"."enum__pages_v_blocks_rich_text_body_variant";
  ALTER TABLE "pages_blocks_feature_list" DROP COLUMN "align";
  ALTER TABLE "pages_blocks_feature_list" DROP COLUMN "label_style";
  ALTER TABLE "pages" DROP COLUMN "body_class";
  ALTER TABLE "_pages_v_blocks_feature_list" DROP COLUMN "align";
  ALTER TABLE "_pages_v_blocks_feature_list" DROP COLUMN "label_style";
  ALTER TABLE "_pages_v" DROP COLUMN "version_body_class";
  DROP TYPE "public"."enum_pages_blocks_feature_list_align";
  DROP TYPE "public"."enum_pages_blocks_feature_list_label_style";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_align";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_label_style";`)
}
