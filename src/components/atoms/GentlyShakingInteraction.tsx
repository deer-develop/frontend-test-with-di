import React, { PropsWithChildren, useEffect } from "react";
import { gsap } from "gsap";

type Props = {
  rotation?: number;
} & React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren;

const GentlyShakingInteraction = ({ rotation = 4, ...props }: Props) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        repeat: -1,
      });

      tl.fromTo(
        divRef.current,
        { rotation: -rotation },
        {
          rotation: rotation,
          duration: 0.2, // Duration of a single shake (in seconds)
          repeat: 6, // Number of times to repeat the shake
          yoyo: true, // Make the animation reverse back to the start position after each shake
          ease: "none", // No easing for a more realistic shake effect
        }
      )
        .to(divRef.current, { rotation: 0, duration: 0.2 })
        .to({}, { duration: 3 });
    }, 0);
  }, [rotation]);

  return <div ref={divRef} {...props} />;
};

export default GentlyShakingInteraction;
