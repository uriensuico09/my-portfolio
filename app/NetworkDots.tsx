"use client";

import React, { useEffect, useRef } from "react";

const NetworkDots = ({ isDarkMode = true }: { isDarkMode?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "#f97316"; // Tailwind orange-500
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
        
        // Mouse interaction (repel)
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Apply repulsive force away from mouse
            const angle = Math.atan2(dy, dx);
            const strength = (1 - distance / mouse.radius) * 2;
            this.x += Math.cos(angle) * strength;
            this.y += Math.sin(angle) * strength;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      // Adjust the divisor to change particle density (higher number = fewer particles)
      const numberOfParticles = (canvas.width * canvas.height) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size * 2;
        const y = Math.random() * (canvas.height - size * 2) + size * 2;
        const directionX = Math.random() * 1 - 0.5;
        const directionY = Math.random() * 1 - 0.5;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance =
            (particlesArray[a].x - particlesArray[b].x) ** 2 +
            (particlesArray[a].y - particlesArray[b].y) ** 2;

          // Connect particles if they are close enough
          if (distance < 10000) {
            const opacityValue = 1 - distance / 10000;
            if (!ctx) return;
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = particlesArray[a].x - mouse.x;
          const dy = particlesArray[a].y - mouse.y;
          const distance = dx * dx + dy * dy;

          if (distance < 20000) {
            const opacityValue = 1 - distance / 20000;
            if (!ctx) return;
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-60 pointer-events-none transition-colors duration-500 ${isDarkMode ? 'bg-blue-950' : 'bg-slate-100'}`}
    />
  );
};

export default NetworkDots;