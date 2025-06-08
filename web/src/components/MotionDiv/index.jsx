"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const MotionDiv = ({
  children,
  motion = "bottom",
  index = 0,
  className = "",
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  let motionStyle = "";
  switch (motion) {
    case "bottom":
      motionStyle = "translateY(60px)";
      break;
    case "right":
      motionStyle = "translateX(-60px)";
      break;
    case "left":
      motionStyle = "translateX(60px)";
      break;
    case "top":
      motionStyle = "translateY(-60px)";
      break;
    default:
      motionStyle = "translateY(60px)";
      break;
  }

  const delay = index * 0.2;

  return (
    <div
      ref={ref}
      className={className}
      {...rest}
      style={{
        transform: isInView ? "none" : motionStyle,
        opacity: isInView ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1), opacity 0.9s ease 0.5s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default MotionDiv;
