
import { useEffect, useRef } from 'react';

const ThreeDSolarPanel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation variables
    let angle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const panelWidth = Math.min(canvas.width, canvas.height) * 0.6;
    const panelHeight = panelWidth * 0.6;
    
    // Solar panel colors
    const frameColor = '#333';
    const panelColor = '#0a2463';
    const highlightColor = '#0EA5E9';
    const reflectionColor = 'rgba(255, 255, 255, 0.1)';
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update angle
      angle += 0.005;
      
      // Calculate projection dimensions based on angle
      const projectionWidth = panelWidth * Math.abs(Math.cos(angle));
      const projectionHeight = panelHeight;
      
      // Draw solar panel
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Panel frame
      ctx.fillStyle = frameColor;
      ctx.fillRect(-projectionWidth/2 - 10, -projectionHeight/2 - 10, projectionWidth + 20, projectionHeight + 20);
      
      // Panel surface
      ctx.fillStyle = panelColor;
      ctx.fillRect(-projectionWidth/2, -projectionHeight/2, projectionWidth, projectionHeight);
      
      // Grid lines
      const cellSizeX = projectionWidth / 4;
      const cellSizeY = projectionHeight / 6;
      
      ctx.strokeStyle = highlightColor;
      ctx.lineWidth = 1;
      
      // Vertical grid lines
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(-projectionWidth/2 + i * cellSizeX, -projectionHeight/2);
        ctx.lineTo(-projectionWidth/2 + i * cellSizeX, projectionHeight/2);
        ctx.stroke();
      }
      
      // Horizontal grid lines
      for (let i = 1; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(-projectionWidth/2, -projectionHeight/2 + i * cellSizeY);
        ctx.lineTo(projectionWidth/2, -projectionHeight/2 + i * cellSizeY);
        ctx.stroke();
      }
      
      // Highlight effect
      const grd = ctx.createLinearGradient(
        -projectionWidth/2, -projectionHeight/2, 
        projectionWidth/2, projectionHeight/2
      );
      grd.addColorStop(0, 'rgba(255, 255, 255, 0)');
      grd.addColorStop(0.5, reflectionColor);
      grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = grd;
      ctx.fillRect(-projectionWidth/2, -projectionHeight/2, projectionWidth, projectionHeight);
      
      // Sun rays effect
      if (Math.sin(angle) > 0) {
        const rayIntensity = Math.sin(angle) * 0.4;
        ctx.fillStyle = `rgba(245, 158, 11, ${rayIntensity})`;
        
        // Draw a few rays
        for (let i = 0; i < 3; i++) {
          const rayAngle = angle + i * (Math.PI / 6);
          const rayX = Math.cos(rayAngle) * panelWidth * 0.8;
          const rayY = Math.sin(rayAngle) * panelWidth * 0.8;
          
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(rayX, rayY);
          ctx.lineWidth = 5;
          ctx.strokeStyle = `rgba(245, 158, 11, ${rayIntensity})`;
          ctx.stroke();
        }
      }
      
      ctx.restore();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};

export default ThreeDSolarPanel;
