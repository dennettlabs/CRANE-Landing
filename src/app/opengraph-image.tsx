import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'CRANE by Dennett Labs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const logoUrl = new URL('../../public/dennettlabslogo.png', import.meta.url);
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer());
  const logoBase64 = Buffer.from(logoData).toString('base64');
  const src = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
          src={src} 
          alt="Dennett Labs Logo"
          width={400}
          height={400}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
