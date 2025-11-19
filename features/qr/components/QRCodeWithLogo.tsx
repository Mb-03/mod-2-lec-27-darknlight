"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeWithLogoProps {
  code: string;
  logoSrc?: string;
  size?: number;
}

const QRCodeWithLogo = ({ code, logoSrc, size = 160 }: QRCodeWithLogoProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !code) return;

    QRCode.toCanvas(
      canvas,
      code,
      {
        width: size,
        margin: 2,
        color: { dark: "#000", light: "#eee" },
      },
      (err) => {
        if (err) console.log(err);
        else {
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          if (!logoSrc) return;
          const logo = new Image();

          logo.src = logoSrc;
          logo.onload = () => {
            const logoSize = size * 0.25;
            const x = (size - logoSize) / 2;
            const y = (size - logoSize) / 2;

            ctx.fillStyle = "white";
            ctx.fillRect(x, y, logoSize, logoSize);

            ctx.drawImage(logo, x, y, logoSize, logoSize);
          };
        }
      }
    );
  }, [code, size, logoSrc]);

  return <canvas ref={canvasRef}></canvas>;
};

export default QRCodeWithLogo;
