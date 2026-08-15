import type { ComponentType } from 'react';
import type { SceneId } from '../../content/services';
import { WebsiteBuildScene } from './WebsiteBuildScene';
import { AppScreensScene } from './AppScreensScene';
import { EcommerceAssemblyScene } from './EcommerceAssemblyScene';
import { MobileDeviceScene } from './MobileDeviceScene';
import { ApiCloudScene } from './ApiCloudScene';

export const serviceScenes: Record<SceneId, ComponentType> = {
  website: WebsiteBuildScene,
  webapp: AppScreensScene,
  ecommerce: EcommerceAssemblyScene,
  mobile: MobileDeviceScene,
  custom: ApiCloudScene,
};
