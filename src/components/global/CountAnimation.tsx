import { useEffect, useState, useRef } from "react";

interface PageProps {
  icon: any;
  initialValue: number;
  targetValue: number;
  text: string;
}

export const CountAnimation = ({
  icon,
  initialValue,
  targetValue,
  text,
}: PageProps) => {
  const [count, setCount] = useState(initialValue);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const duration = 4000; // 4 seconds

  useEffect(() => {
    if (isVisible) {
      let startValue = initialValue;
      const interval = Math.floor(duration / (targetValue - initialValue));

      const counter = setInterval(() => {
        startValue += 1;
        setCount(startValue);
        if (startValue >= targetValue) {
          clearInterval(counter);
        }
      }, interval);

      return () => {
        clearInterval(counter);
      };
    }
  }, [isVisible, targetValue, initialValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="container p-5 flex flex-col gap-4 items-center"
      ref={containerRef}
    >
      {icon}
      <p className="text-4xl">{count}</p>

      <p className="text-xl">{text}</p>
    </div>
  );
};
