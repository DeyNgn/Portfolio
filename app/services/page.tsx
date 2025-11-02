'use client';

export default function Services() {
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
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="mt-4 text-lg">Company Offerings: Detailed breakdown of services: Consulting, Security Architecture Design, Penetration Testing, Managed Security, etc. Use case studies/project summaries (anonymized if needed).</p>
    </main>
  );
}
