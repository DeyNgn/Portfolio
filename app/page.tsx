'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CipherWheel from '../components/CipherWheel';

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [decoded, setDecoded] = useState('');
  const [input, setInput] = useState('');
  const router = useRouter();

  const secret = 'do or do not there is no try';
  const shift = 13; // A fixed shift for the puzzle

  const caesarShift = (text: string, shift: number) => {
    return text
      .split('')
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const isUpperCase = char === char.toUpperCase();
          // JavaScript's % operator can be negative, so we add 26 and take modulo again.
          const positiveShift = (shift % 26 + 26) % 26;
          const shiftedCode =
            isUpperCase
              ? ((code - 65 + positiveShift) % 26) + 65
              : ((code - 97 + positiveShift) % 26) + 97;
          return String.fromCharCode(shiftedCode);
        }
        return char;
      })
      .join('');
  };

  const ciphertext = caesarShift(secret, shift);

  useEffect(() => {
    const visualRotation = rotation + 90;
    const currentShift = Math.round(visualRotation / (360 / 26));
    const decodedText = caesarShift(ciphertext, -currentShift);
    setDecoded(decodedText);
  }, [rotation, ciphertext]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === secret) {
      router.push('/portfolio');
    }
  };

  return (
    <main
      style={{
        backgroundColor: '#282c34',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Cyber Portfolio</h1>
      <div style={{ textAlign: 'center', border: '2px solid white', padding: '2rem', display: 'flex', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem' }}>
            {input.toLowerCase() === secret ? '🔓' : '🔒'}
          </h1>
          <p>Align the inner wheel to decode the message.</p>
          <CipherWheel
            rotation={rotation}
            setRotation={setRotation}
            plaintext={decoded}
            ciphertext={ciphertext}
          />
          <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter decoded password"
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                backgroundColor: '#333',
                color: 'white',
                border: '1px solid white',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                backgroundColor: '#333',
                color: 'white',
                border: '1px solid white',
                marginLeft: '0.5rem',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
