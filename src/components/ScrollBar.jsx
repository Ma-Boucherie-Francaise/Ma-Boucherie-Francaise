import { useScroll, useTransform, motion as m } from "motion/react";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="ScrollBarContainer">
      <m.div style={{ scaleX }} className="scrollBar" />
    </div>
  );
}
