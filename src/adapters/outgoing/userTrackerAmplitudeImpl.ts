import { UserEvent } from "@/domain/model/UserEvent";
import { UserTrackerAmplitude } from "@/adapters/outgoing/UserTrackerAmplitude";

export const UserTrackerAmplitudeImpl = (): UserTrackerAmplitude => ({
  init: (apiKey: string) => {
    console.log(`UserTrackerAmplitude.init(${apiKey})`);
  },
  setDeviceId: (deviceId: string) => {
    console.log(`UserTrackerAmplitude.setDeviceId(${deviceId})`);
  },
  track: (event: UserEvent, properties?: Record<string, unknown>) => {
    console.log(
      "UserTrackerAmplitude.track(event, properties)",
      event,
      properties
    );
  },
});
