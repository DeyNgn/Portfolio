'use client';
import { useState, useRef } from "react";

interface CipherWheelProps {
  rotation: number;
  setRotation: (rotation: number) => void;
  plaintext: string;
  ciphertext: string;
  isDecoded: boolean;
}

const CipherWheel: React.FC<CipherWheelProps> = ({
  rotation,
  setRotation,
  plaintext,
  ciphertext,
  isDecoded,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const wheelRef = useRef<SVGSVGElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  }

  const handleMouseMove = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (isDragging && wheelRef.current) {
      const rect = wheelRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle =
        Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      setRotation(angle);
    }
  };
  
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
    if (isDragging && wheelRef.current) {
      const rect = wheelRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const touch = e.touches[0];
      const angle =
        Math.atan2(touch.clientY - centerY, touch.clientX - centerX) *
        (180 / Math.PI);
      setRotation(angle);
    }
  };

  const innerRotationAngle = rotation + 90;
  const imageRotation = isDecoded ? 0 : innerRotationAngle;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        ref={wheelRef}
        width="300"
        height="300"
        viewBox="0 0 300 300"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        className="cursor-pointer select-none"
      >
        <circle cx="150" cy="150" r="140" fill="#282c34" stroke="white" strokeWidth="2" />
        <circle cx="150" cy="150" r="100" fill="#282c34" stroke="white" strokeWidth="2" />

        {Array.from({ length: 26 }, (_, i) => {
          const angle = (i * 360) / 26 - 90;
          const x = 150 + 120 * Math.cos(angle * (Math.PI / 180));
          const y = 150 + 120 * Math.sin(angle * (Math.PI / 180));
          return (
            <text
              key={`outer-${i}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="16"
              style={{ pointerEvents: 'none' }}
            >
              {String.fromCharCode(65 + i)}
            </text>
          );
        })}

        <g transform={`rotate(${innerRotationAngle}, 150, 150)`}>
          {Array.from({ length: 26 }, (_, i) => {
            const angle = (i * 360) / 26 - 90;
            const x = 150 + 80 * Math.cos(angle * (Math.PI / 180));
            const y = 150 + 80 * Math.sin(angle * (Math.PI / 180));
            return (
              <text
                key={`inner-${i}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="16"
                style={{ pointerEvents: 'none' }}
              >
                {String.fromCharCode(65 + i)}
              </text>
            );
          })}
        </g>
        <g transform={`rotate(${imageRotation}, 150, 150)`}>
          <image
            x="53"
            y="53"
            width="194"
            height="194"
            href="/images/laughing-man.png"
          />
        </g>
      </svg>
      <div
        className="mt-4 text-center"
        style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          maxWidth: '66.66%',
          margin: '0 auto',
        }}
      >
        <h2 className="text-2xl">Ciphertext:</h2>
        <p className="text-lg" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          {ciphertext}
        </p>
        <h2 className="text-2xl">Decoded:</h2>
        <p className="text-lg" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          {plaintext}
        </p>
      </div>
    </div>
  );
};

export default CipherWheel;
