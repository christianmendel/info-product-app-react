import { useRef, useState } from "react";
import "./carrossel.component.css";

interface CarrosselProps {
  children: React.ReactNode[];
}

export const Carrossel: React.FC<CarrosselProps> = ({ children }) => {
  const [currentStart, setCurrentStart] = useState<number>(0);
  const step = 1;

  const carrosselRef = useRef(null);
  let startPos = 0;

  const nextSlide = () => {
    if (currentStart + step < children.length) {
      setCurrentStart(currentStart + step);
    } else {
      setCurrentStart(0);
    }
  };

  const prevSlide = () => {
    if (currentStart - step >= 0) {
      setCurrentStart(currentStart - step);
    } else {
      setCurrentStart(children.length - step);
    }
  };

  const handleTouchStart = (e: any) => {
    startPos = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: any) => {
    const endPos = e.changedTouches[0].clientX;
    if (startPos - endPos > 50) {
      nextSlide();
    } else if (endPos - startPos > 50) {
      prevSlide();
    }
  };

  return (
    <div
      className="carrossel"
      ref={carrosselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slides">
        {children.map((child, index) => (
          <div
            key={index}
            className={
              index >= currentStart && index < currentStart + step
                ? "slide active"
                : "slide"
            }
          >
            {child}
          </div>
        ))}
      </div>
      <div className="dots">
        {Array(Math.ceil(children.length / step))
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className={currentStart === index * step ? "dot active" : "dot"}
              onClick={() => setCurrentStart(index * step)}
            />
          ))}
      </div>
    </div>
  );
};
