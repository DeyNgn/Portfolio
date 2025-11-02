'use client';

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Dey Engineering</h1>
      <p className="mt-4 text-lg">Designing secure digital foundations.</p>
      <p className="mt-2 text-lg">Founder/Principal Architect with expertise in cybersecurity.</p>
      <div className="mt-8 flex space-x-4">
        <a href="/services" className="text-lg underline">Services</a>
        <a href="/about" className="text-lg underline">About/Hiring</a>
      </div>
    </>
  );
}
