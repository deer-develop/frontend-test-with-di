import { UserTracker } from "@/domain/model/UserTracker";

export type UserTrackerAmplitude = UserTracker & {
  init(apiKey: string): void;
  setDeviceId(deviceId: string): void;
};
