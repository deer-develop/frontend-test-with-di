import { describe, it, vi, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Home from "@/components/templates/Home";
import { UserTracker } from "@/domain/model/UserTracker";
import LinkStub from "@/domain/model/LinkStub";

type Spy<F extends (...args: any) => any> = {
  f: F;
  args?: Parameters<F>;
};

const spy = <F extends (...args: any) => any>(): Spy<F> => {
  const s: Spy<F> = {
    f: ((...args: any): any => {
      s.args = args;
    }) as F,
  };

  return s;
};

describe("Home", () => {
  let trackSpy: Spy<UserTracker["track"]>;

  beforeEach(() => {
    trackSpy = spy();
  });

  it("should call track function with 'home:product-tour-button:click' argument when '무료 체험 시작하기' button is clicked.", () => {
    // given
    const rendered = render(<Home Link={LinkStub} track={trackSpy.f} />);

    // when
    rendered.getByText("무료 체험 시작하기").click();

    //then
    expect(trackSpy.args?.[0]).toBe("home:product-tour-button:click");
  });

  it("should call track function with 'home:apply-button:click' argument when '사용 신청하기' button is clicked.", () => {
    // given
    const track = vi.fn();
    const rendered = render(<Home Link={LinkStub} track={track} />);

    // when
    rendered.getByText("사용 신청하기").click();

    //then
    expect(track).toHaveBeenNthCalledWith(1, "home:apply-button:click");
  });

  it("should call track function with 'home:signup:click' argument when '회원 가입하기' button is clicked.", () => {
    // given
    const track = vi.fn();
    const rendered = render(<Home Link={LinkStub} track={track} />);

    // when
    rendered.getByText("회원 가입하기").click();

    //then
    expect(track).toHaveBeenNthCalledWith(1, "home:signup:click");
  });
});
