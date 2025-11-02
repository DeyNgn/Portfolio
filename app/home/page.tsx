'use client'
import Navbar from '../../components/Navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/Ghost-In-The-Shell-City-Wallpaper.jpg)',
        backgroundSize: 'cover',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
      }}>
        <h1 className="text-4xl font-bold">Welcome to Dey Engineering</h1>
        <p>Your secure digital foundation starts here.</p>
      </main>
    </div>
  );
}
