import { UserEvent } from "@/domain/model/UserEvent";
import { UserTrackerGoogleAnalytics } from "@/adapters/outgoing/UserTrackerGoogleAnalytics";

export const UserTrackerGoogleAnalyticsImpl =
  (): UserTrackerGoogleAnalytics => ({
    init: (apiKey: string) => {
      console.log(`UserTrackerGoogleAnalytics.init(${apiKey})`);
    },
    setUserId: (userId: string) => {
      console.log(`UserTrackerGoogleAnalytics.setUserId(${userId})`);
    },
    track: (event: UserEvent, properties?: Record<string, unknown>) => {
      console.log(
        "UserTrackerGoogleAnalytics.track(event, properties)",
        event,
        properties
      );
    },
  });
