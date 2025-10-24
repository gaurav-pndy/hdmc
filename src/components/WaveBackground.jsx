import { useEffect, useRef } from "react";

const WaveBackground = ({ stroke, custStyle }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const waves = [];
    const spacing = 8; // Space between wave lines
    const numWaves = Math.floor(canvas.width / spacing);

    // Create uniform wave lines
    for (let i = 0; i < numWaves; i++) {
      waves.push({
        x: i * spacing,
        amplitude: 20, // Uniform amplitude for all waves
        frequency: 0.015, // Uniform frequency
        phase: 0, // Same phase for uniform pattern
        opacity: 0.15 + (i % 3) * 0.05, // Slight opacity variation for depth
      });
    }

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = `${stroke} ${wave.opacity})`;
        ctx.lineWidth = 1;

        for (let y = 0; y < canvas.height; y += 1) {
          const x =
            wave.x + Math.sin(y * wave.frequency + wave.phase) * wave.amplitude;
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });
    };

    drawWaves();

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Recalculate waves for new width
      waves.length = 0;
      const newNumWaves = Math.floor(canvas.width / spacing);
      for (let i = 0; i < newNumWaves; i++) {
        waves.push({
          x: i * spacing,
          amplitude: 20,
          frequency: 0.015,
          phase: 0,
          opacity: 0.15 + (i % 3) * 0.05,
        });
      }

      drawWaves();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute   w-full ${custStyle} z-40  pointer-events-none  md:h-full`}
      style={{ opacity: 1 }}
    />
  );
};

export default WaveBackground;
