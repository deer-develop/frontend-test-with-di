import React from "react";
import Home from "@/components/templates/Home";
import { UserTrackerAmplitudeImpl } from "@/adapters/outgoing/userTrackerAmplitudeImpl";
import { UserTracker } from "@/domain/model/UserTracker";

export default function HomeContainer() {
  const [userTracker] = React.useState<UserTracker>(UserTrackerAmplitudeImpl);

  return <Home track={userTracker.track} />;
}
