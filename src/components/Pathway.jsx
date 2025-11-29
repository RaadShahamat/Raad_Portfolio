import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PATHWAY } from "../data";

export default function Pathway() {
  const containerRef = useRef(null);

  const charX = useMotionValue(0);
  const charY = useMotionValue(0);

  const items = [...PATHWAY].reverse(); // bottom → top
  const [zones, setZones] = useState([]);
  const [activeIdx, setActiveIdx] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Set zones and container width
    useEffect(() => {
    const updateLayout = () => {
        if (!containerRef.current) return;
        const width = containerRef.current.offsetWidth;
        const height = items.length * 180;
        setContainerWidth(width);

        const baseTop = 30;
        const segment = 160;
        const computed = items.map((_, i) => {
        const yCenter = baseTop + (i + 1) * segment;
        return {
            minY: yCenter - 80,
            maxY: yCenter + 80,
            centerY: yCenter,
        };
        });
        setZones(computed);

        // starting character position dynamically
        charX.set(width * 0.80); // 85% of container width → right
        charY.set(height - 120);  // bottom
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
    }, []);


  function handleDrag() {
    const y = charY.get();
    let hit = null;

    zones.forEach((z, i) => {
      if (y >= z.minY && y <= z.maxY) hit = i;
    });

    setActiveIdx(hit);
  }

  // Generate responsive S-curve path
const getPath = () => {
  if (!containerWidth) return "";
  const totalHeight = items.length * 160 + 60; // extra bottom margin
  let d = `M${containerWidth / 4} 30`;

  items.forEach((_, i) => {
    const y = 30 + (i + 1) * 160;
    const leftSide = i % 2 === 0;

    const ctrlX1 = leftSide ? containerWidth * 0.75 : containerWidth * 0.25;
    const ctrlX2 = leftSide ? containerWidth * 0.75 : containerWidth * 0.25;

    const ctrlY1 = y - 160 * 0.6;
    const ctrlY2 = y - 160 * 0.3;

    const endX = containerWidth / 2;

    d += ` C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${y}`;
  });

  return d;
};


  return (
    <section id="pathway" className="py-16 sm:py-16 ">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">
        Learning Pathway
      </h2>

      <div
        ref={containerRef}
        className="relative mx-auto max-w-xl sm:max-w-2xl bg-white rounded-xl shadow-xl p-6 sm:p-10 overflow-hidden"
        style={{ minHeight: items.length * 180 }}
      >
        {/* S-curve */}
        <svg className="absolute top-0 left-0 w-full" height={items.length * 180}>
          <path
            d={getPath()}
            stroke="#cbd5e1"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Milestones */}
        {items.map((step, i) => {
          const y = 30 + (i + 1) * 160;
          const leftSide = i % 2 === 0;

          return (
            <div key={i} className="absolute w-full" style={{ top: y - 25 }}>
              <div
                className="absolute flex flex-col items-center"
                style={{
                  left: leftSide ? "20%" : "70%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="text-base sm:text-lg font-bold text-gray-700 mb-1">
                  {step.year}
                </div>
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-blue-600 rounded-full shadow-md"></div>
              </div>
            </div>
          );
        })}

        {/* Popup */}
        {activeIdx !== null && (
          <div
            className="absolute bg-white border rounded-xl shadow-xl p-4 w-64 sm:w-72 transition-all duration-200"
            style={{
              top: zones[activeIdx].centerY - 60,
              left: activeIdx % 2 === 0 ? "5%" : "calc(100% - 270px)",
            }}
          >
            <p className="text-xs text-gray-500">{items[activeIdx].year}</p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {items[activeIdx].title}
            </h3>
            <p className="text-sm text-gray-700 mt-1">{items[activeIdx].details}</p>
          </div>
        )}

        {/* Draggable character */}
        <motion.div
          drag
          dragConstraints={containerRef}
          onDrag={handleDrag}
          style={{
            position: "absolute",
            x: charX ,
            y: charY ,
            zIndex: 20,
          }}
          className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full shadow-lg flex items-center justify-center text-2xl sm:text-3xl cursor-pointer"
        >
          🧑‍🚀
        </motion.div>
      </div>
    </section>
  );
}
