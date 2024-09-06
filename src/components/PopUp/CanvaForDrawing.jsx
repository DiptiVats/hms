import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  const clearCanvas = () => {
    if (ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);
    // Set initial styles for the canvas
    context.lineCap = "round";
    context.lineWidth = 2;
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    ctx.closePath();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        width={950} // 60rem (assuming 16px = 1rem, 60rem = 960px)
        height={420} // 30rem (same calculation, 30rem = 480px)
        style={{
          display: "block",
          borderRadius: "3px",
          margin: "0 auto",
          backgroundColor: "white",
        }}
      />
      <button
        onClick={clearCanvas}
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "7rem",
          backgroundColor: "blue",
        }}
      >
        clear
      </button>
    </>
  );
};

export default Canvas;
