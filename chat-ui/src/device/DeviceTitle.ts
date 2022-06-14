import { Device as TDevice } from "../api/device/Device";

export const DEVICE_TITLE_FIELD = "appId";

export const DeviceTitle = (record: TDevice): string => {
  return record.appId || record.id;
};
