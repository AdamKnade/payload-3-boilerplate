import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer" ADD COLUMN "business_info_address" varchar;
  ALTER TABLE "footer" ADD COLUMN "business_info_phone" varchar;
  ALTER TABLE "footer" ADD COLUMN "business_info_hours_weekday" varchar;
  ALTER TABLE "footer" ADD COLUMN "business_info_hours_weekend" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer" DROP COLUMN "business_info_address";
  ALTER TABLE "footer" DROP COLUMN "business_info_phone";
  ALTER TABLE "footer" DROP COLUMN "business_info_hours_weekday";
  ALTER TABLE "footer" DROP COLUMN "business_info_hours_weekend";`)
}
