'use client';

export default function Portfolio() {
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
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <p className="mt-4 text-lg">Company Projects: Professional write-ups of completed projects, focusing on the challenge, the Dey Engineering solution, and the measurable results (e.g., "$X saved," "compliance achieved").</p>
      <p className="mt-4 text-lg">Personal Projects/Labs: Showcase personal projects, GitHub repos, CTF (Capture The Flag) write-ups, home lab setups, and detailed technical deep-dives into vulnerabilities or security research. This demonstrates your hands-on skills.</p>
    </main>
  );
}
