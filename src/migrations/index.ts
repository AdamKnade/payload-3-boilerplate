import * as migration_20241125_222020_initial from './20241125_222020_initial';
import * as migration_20241214_124128 from './20241214_124128';
import * as migration_20260222_003500_payload_3_77_compat from './20260222_003500_payload_3_77_compat';
import * as migration_20260728_181752_add_logo_cloud_grid_block from './20260728_181752_add_logo_cloud_grid_block';
import * as migration_20260903_200128_add_topdog_blocks from './20260903_200128_add_topdog_blocks';
import * as migration_20260903_201241_add_header_footer_fields from './20260903_201241_add_header_footer_fields';
import * as migration_20260903_205717_add_footer_business_info from './20260903_205717_add_footer_business_info';
import * as migration_20260903_212109_add_login_href_and_embed_block from './20260903_212109_add_login_href_and_embed_block';

export const migrations = [
  {
    up: migration_20241125_222020_initial.up,
    down: migration_20241125_222020_initial.down,
    name: '20241125_222020_initial',
  },
  {
    up: migration_20241214_124128.up,
    down: migration_20241214_124128.down,
    name: '20241214_124128',
  },
  {
    up: migration_20260222_003500_payload_3_77_compat.up,
    down: migration_20260222_003500_payload_3_77_compat.down,
    name: '20260222_003500_payload_3_77_compat',
  },
  {
    up: migration_20260728_181752_add_logo_cloud_grid_block.up,
    down: migration_20260728_181752_add_logo_cloud_grid_block.down,
    name: '20260728_181752_add_logo_cloud_grid_block',
  },
  {
    up: migration_20260903_200128_add_topdog_blocks.up,
    down: migration_20260903_200128_add_topdog_blocks.down,
    name: '20260903_200128_add_topdog_blocks',
  },
  {
    up: migration_20260903_201241_add_header_footer_fields.up,
    down: migration_20260903_201241_add_header_footer_fields.down,
    name: '20260903_201241_add_header_footer_fields',
  },
  {
    up: migration_20260903_205717_add_footer_business_info.up,
    down: migration_20260903_205717_add_footer_business_info.down,
    name: '20260903_205717_add_footer_business_info',
  },
  {
    up: migration_20260903_212109_add_login_href_and_embed_block.up,
    down: migration_20260903_212109_add_login_href_and_embed_block.down,
    name: '20260903_212109_add_login_href_and_embed_block'
  },
];
