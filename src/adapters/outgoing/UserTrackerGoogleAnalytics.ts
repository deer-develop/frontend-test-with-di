import { UserTracker } from "@/domain/model/UserTracker";

export type UserTrackerGoogleAnalytics = UserTracker & {
  init(apiKey: string): void;
  setUserId(userId: string): void;
};
