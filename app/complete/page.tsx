'use client';

import html2canvas from 'html2canvas';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { Certificate } from '@/components/Certificate';

export default function CompletionPage() {
  const [name, setName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const generateCertificate = () => {
    if (name.trim()) {
      setShowCertificate(true);
    }
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `css-grid-certificate-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Failed to generate certificate:', error);
    }
    setIsGenerating(false);
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(
      `I'm now a CSS Grid Pro! Completed the interactive tutorial at CSSGrid.pro #CSS #WebDev #CSSGrid`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const shareToLinkedIn = () => {
    const text = encodeURIComponent(
      `I just completed the CSS Grid Pro interactive tutorial and earned my certificate!`
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=https://cssgrid.pro&summary=${text}`,
      '_blank'
    );
  };

  const skills = [
    'display: grid',
    'grid-template-columns',
    'grid-template-rows',
    'fr units',
    'gap property',
    'grid-column',
    'grid-row',
    'grid-template-areas',
    'grid-area',
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
      {!showCertificate ? (
        <div className="text-center max-w-xl animate-fade-in">
          <div className="text-7xl mb-8">🎓</div>
          <h1 className="text-4xl font-bold mb-5 text-gray-900">Congratulations!</h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed">
            You've completed the CSS Grid tutorial! You now have the skills to create powerful,
            flexible layouts for your web projects.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5"
              >
                <span>✓</span>
                {skill}
              </div>
            ))}
          </div>

          {/* Certificate generation form */}
          <div className="bg-white rounded-2xl p-8 mb-10 border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Get Your Certificate</h2>
            <p className="text-gray-500 text-sm mb-5">
              Enter your name to generate a shareable certificate
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-center text-lg mb-5 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
              onKeyDown={(e) => e.key === 'Enter' && generateCertificate()}
            />
            <Button onClick={generateCertificate} disabled={!name.trim()}>
              Generate Certificate
            </Button>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/learn/0">
              <Button variant="ghost">Start Over</Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Back to Home</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Your Certificate</h2>

          {/* Certificate preview */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg inline-block border border-gray-200">
            <Certificate ref={certificateRef} name={name} date={today} />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button onClick={downloadCertificate} disabled={isGenerating}>
              {isGenerating ? 'Generating...' : 'Download PNG'}
            </Button>
            <Button variant="secondary" onClick={shareToTwitter}>
              Share on X
            </Button>
            <Button variant="secondary" onClick={shareToLinkedIn}>
              Share on LinkedIn
            </Button>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Button variant="ghost" onClick={() => setShowCertificate(false)}>
              ← Edit Name
            </Button>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
