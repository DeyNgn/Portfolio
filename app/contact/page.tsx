'use client';

export default function Contact() {
  return (
    <main
      style={{
        backgroundImage: 'url(/images/lofi-anime-cityscape.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'monospace',
        textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
      }}
    >
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-lg">Standard business contact form for service inquiries and proposals, including a Request for Proposal (RFP) option.</p>
      <p className="mt-4 text-lg">A separate, distinct contact form for job inquiries and recruiters. A clear statement on your availability for full-time or contract roles.</p>
    </main>
  );
}
