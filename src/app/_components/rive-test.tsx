"use client";

import { useRive } from "@rive-app/react-canvas";

export default function RiveTest() {
  const { rive, RiveComponent } = useRive({
    src: "/assets/rive/runimo-test.riv",
    stateMachines: "Basic",
    autoplay: true,
  });

  return (
    <RiveComponent
    // onMouseEnter={() => rive && rive.play()}
    // onMouseLeave={() => rive && rive.pause()}
    />
  );
}
