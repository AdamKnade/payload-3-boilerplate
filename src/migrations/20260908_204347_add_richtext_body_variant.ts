import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_rich_text_body_variant" AS ENUM('', 'schedule');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_body_variant" AS ENUM('', 'schedule');
  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN "body_variant" "enum_pages_blocks_rich_text_body_variant" DEFAULT '';
  ALTER TABLE "_pages_v_blocks_rich_text" ADD COLUMN "body_variant" "enum__pages_v_blocks_rich_text_body_variant" DEFAULT '';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_rich_text" DROP COLUMN "body_variant";
  ALTER TABLE "_pages_v_blocks_rich_text" DROP COLUMN "body_variant";
  DROP TYPE "public"."enum_pages_blocks_rich_text_body_variant";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_body_variant";`)
}
