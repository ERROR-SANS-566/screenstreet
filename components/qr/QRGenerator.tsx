'use client';
import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
interface QRGeneratorProps {
  url: string;
  placeName: string;
}
export function QRGenerator({ url, placeName }: QRGeneratorProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `screenstreet-qr-${placeName.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  return (
    <div className="space-y-4">
      <div ref={qrRef} className="flex justify-center p-4 bg-white rounded-lg">
        <QRCodeCanvas
          value={url}
          size={200}
          level="H"
          includeMargin={true}
        />
      </div>
      <Button
        variant="outline"
        className="w-full gap-2"
        onClick={downloadQR}
      >
        <Download className="h-4 w-4" />
        Download QR Code
      </Button>
      <p className="text-xs text-text-muted text-center">
        Scan this QR code to open this place
      </p>
    </div>
  );
}


