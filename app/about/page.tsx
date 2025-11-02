'use client';

export default function About() {
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
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-lg">A brief company history, mission, and vision for Dey Engineering. Present yourself as the Founder/Principal Architect.</p>
      <p className="mt-4 text-lg">Your Personal CV/Resume & Bio: A professional headshot, a detailed bio, your career history, and a downloadable PDF of your resume. Highlight skills and certifications relevant to a hiring manager.</p>
    </main>
  );
}
