import { describe, it, vi, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Home from "@/components/templates/Home";
import { UserTracker } from "@/domain/model/UserTracker";

describe("Home", () => {
  let trackStub: {
    track: UserTracker["track"];
    event?: Parameters<UserTracker["track"]>[0];
  };

  beforeEach(() => {
    trackStub = {
      track: (event) => {
        trackStub.event = event;
      },
    };
  });

  it("should call track function with 'home:product-tour-button:click' argument when '무료 체험 시작하' button is clicked.", () => {
    // given
    const rendered = render(<Home track={trackStub.track} />);

    // when
    rendered.getByText("무료 체험 시작하기").click();

    //then
    expect(trackStub.event).toBe("home:product-tour-button:click");
  });
});
