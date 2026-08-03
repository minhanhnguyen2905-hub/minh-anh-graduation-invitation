'use client'

import { QRCodeSVG } from 'qrcode.react'

export function QRCodeComponent() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-4 bg-warm-white rounded-lg">
        <QRCodeSVG
          value="https://minh-anh-graduation-invitation.vercel.app/"
          size={200}
          level="H"
          includeMargin={true}
          fgColor="var(--primary)"
          bgColor="var(--warm-white)"
        />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">
        Quét mã QR để mở thiệp
      </p>
    </div>
  )
}
