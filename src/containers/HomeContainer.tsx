import React from "react";
import Home from "@/components/templates/Home";
import { UserTrackerAmplitudeImpl } from "@/adapters/outgoing/userTrackerAmplitudeImpl";
import { UserTracker } from "@/domain/model/UserTracker";
import NextLink from "next/link";
import { Link } from "@/domain/model/Link";

const withLinkWithAlert: (
  createAlertMessage: (href: string) => string
) => Link = (createAlertMessage) =>
  function LinkWithAlert({ href, onClick, ...props }) {
    return (
      <NextLink
        href={href}
        onClick={(...args) => {
          href && alert(createAlertMessage(href.toString()));
          onClick && onClick(...args);
        }}
        {...props}
      />
    );
  };

export default function HomeContainer() {
  const [userTracker] = React.useState<UserTracker>(UserTrackerAmplitudeImpl);
  const LinkWithAlert = React.useMemo(
    () => withLinkWithAlert((href) => `'${href}'로 이동합니다.`),
    []
  );

  return <Home Link={LinkWithAlert} track={userTracker.track} />;
}
