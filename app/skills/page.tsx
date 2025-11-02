'use client';

export default function Skills() {
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
      <h1 className="text-4xl font-bold">Skills & Certifications</h1>
      <p className="mt-4 text-lg">Company-level competency, perhaps noting industry standards or frameworks Dey Engineering specializes in (e.g., NIST, ISO 27001).</p>
      <p className="mt-4 text-lg">Your Certifications (e.g., CISSP, CISM, CompTIA Sec+), Technical Skills (e.g., Cloud Security, Network Architecture, Python), and Soft Skills (e.g., Communication, Leadership).</p>
    </main>
  );
}
