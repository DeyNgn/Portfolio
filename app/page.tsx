'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CipherWheel from '../components/CipherWheel';

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [decoded, setDecoded] = useState('');
  const [isDecoded, setIsDecoded] = useState(false);
  const router = useRouter();

  const secret = 'Designing Secure Digital Foundations';
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

    if (decodedText.toLowerCase() === secret.toLowerCase()) {
      setIsDecoded(true);
      const timer = setTimeout(() => {
        router.push('/portfolio');
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsDecoded(false);
    }
  }, [rotation, ciphertext, router, secret]);

  return (
    <main
      style={{
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
      }}
    >
      <h1 className="text-4xl font-bold mb-4">Dey Engineering</h1>
      <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <div>
          <h2>Align the inner wheel to decode the message.</h2>
          <CipherWheel
            rotation={rotation}
            setRotation={setRotation}
            plaintext={decoded}
            ciphertext={ciphertext}
            isDecoded={isDecoded}
          />
        </div>
      </div>
    </main>
  );
}
