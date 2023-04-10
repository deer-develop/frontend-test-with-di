import { describe, it, vi, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Home from "@/components/templates/Home";
import { UserTracker } from "@/domain/model/UserTracker";

type Stub<F extends (...args: any) => any> = {
  f: F;
  args?: Parameters<F>;
};

const stub = <F extends (...args: any) => any>(): Stub<F> => {
  const s: Stub<F> = {
    f: ((...args: any): any => {
      s.args = args;
    }) as F,
  };

  return s;
};

describe("Home", () => {
  let trackStub: Stub<UserTracker["track"]>;

  beforeEach(() => {
    trackStub = stub();
  });

  it("should call track function with 'home:product-tour-button:click' argument when '무료 체험 시작하기' button is clicked.", () => {
    // given
    const rendered = render(<Home track={trackStub.f} />);

    // when
    rendered.getByText("무료 체험 시작하기").click();

    //then
    expect(trackStub.args?.[0]).toBe("home:product-tour-button:click");
  });

  it("should call track function with 'home:apply-button:click' argument when '사용 신청하기' button is clicked.", () => {
    // given
    const track = vi.fn();
    const rendered = render(<Home track={track} />);

    // when
    rendered.getByText("사용 신청하기").click();

    //then
    expect(track).toHaveBeenNthCalledWith(1, "home:apply-button:click");
  });
});
