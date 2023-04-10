import { UserEvent } from "@/domain/model/UserEvent";

export type UserTracker = {
  track(event: UserEvent, properties?: Record<string, unknown>): void;
};
