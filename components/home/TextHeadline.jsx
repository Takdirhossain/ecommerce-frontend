import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../magicui/scroll-based-velocity";

export default function TextHeadline() {
  return (
    <div className="bg-secondary py-4">
      <ScrollVelocityContainer className="text-4xl md:text-4xl font-bold">
        <ScrollVelocityRow  baseVelocity={10} direction={1}>
          Velocity Scroll ❤️ Lorem ipsum dolor sit amet consectetur ❤️ adipisicing elit. Quisquam, quod.
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
