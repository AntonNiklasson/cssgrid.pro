import { forwardRef } from 'react';

interface CertificateProps {
  name: string;
  date: string;
}

export const Certificate = forwardRef<HTMLDivElement, CertificateProps>(({ name, date }, ref) => {
  return (
    <div
      ref={ref}
      className="w-[800px] h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 relative overflow-hidden"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
                linear-gradient(var(--color-primary) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
              `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Border frame */}
      <div className="absolute inset-4 border-2 border-[var(--color-primary)] rounded-lg opacity-50" />
      <div className="absolute inset-6 border border-[var(--color-primary-light)] rounded-lg opacity-30" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white z-10">
        {/* Top badge */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="text-4xl">🏆</div>
        </div>

        {/* Certificate text */}
        <div className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">
          Certificate of Completion
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
          CSS Grid Pro
        </h1>

        <div className="text-gray-400 mb-2">This is to certify that</div>

        <div className="text-3xl font-semibold text-white mb-4 min-h-[44px]">
          {name || 'Your Name'}
        </div>

        <div className="text-gray-400 mb-8 max-w-md leading-relaxed">
          has successfully completed the CSS Grid interactive tutorial and demonstrated proficiency
          in modern CSS Grid layout techniques
        </div>

        {/* Skills badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 max-w-lg">
          {['grid-template', 'fr units', 'gap', 'grid-area', 'spanning'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] border border-[var(--color-primary)]/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between px-12 text-sm text-gray-500">
          <div>
            <div className="text-[var(--color-primary)]">CSSGrid.pro</div>
          </div>
          <div className="text-right">
            <div>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

Certificate.displayName = 'Certificate';
