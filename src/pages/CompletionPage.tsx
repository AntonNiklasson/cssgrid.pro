import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { Button } from '../components/Button';
import { Certificate } from '../components/Certificate';

export function CompletionPage() {
  const navigate = useNavigate();
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
      `I just became a Certified Grid Guru! 🏆 Completed the CSS Grid tutorial at CSSGrid.pro #CSS #WebDev #CSSGrid`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const shareToLinkedIn = () => {
    const text = encodeURIComponent(
      `I just completed the CSS Grid interactive tutorial and earned my "Certified Grid Guru" certificate! 🏆`
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
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {!showCertificate ? (
        <div className="text-center max-w-xl animate-fade-in">
          <div className="text-7xl mb-6">🎓</div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
            Congratulations!
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            You've completed the CSS Grid tutorial! You now have the skills to create
            powerful, flexible layouts for your web projects.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 text-[var(--color-success)] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5"
              >
                <span>✓</span>
                {skill}
              </div>
            ))}
          </div>

          {/* Certificate generation form */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700">
            <h2 className="text-lg font-semibold mb-4">Get Your Certificate</h2>
            <p className="text-gray-400 text-sm mb-4">
              Enter your name to generate a shareable certificate
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white text-center text-lg mb-4 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
              onKeyDown={(e) => e.key === 'Enter' && generateCertificate()}
            />
            <Button onClick={generateCertificate} disabled={!name.trim()}>
              Generate Certificate
            </Button>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Button variant="ghost" onClick={() => navigate('/learn/0')}>
              Start Over
            </Button>
            <Button variant="secondary" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-white">Your Certificate</h2>

          {/* Certificate preview */}
          <div className="mb-6 rounded-lg overflow-hidden shadow-2xl inline-block">
            <Certificate ref={certificateRef} name={name} date={today} />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={downloadCertificate} disabled={isGenerating}>
              {isGenerating ? 'Generating...' : '📥 Download PNG'}
            </Button>
            <Button variant="secondary" onClick={shareToTwitter}>
              🐦 Share on X
            </Button>
            <Button variant="secondary" onClick={shareToLinkedIn}>
              💼 Share on LinkedIn
            </Button>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Button variant="ghost" onClick={() => setShowCertificate(false)}>
              ← Edit Name
            </Button>
            <Button variant="ghost" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
