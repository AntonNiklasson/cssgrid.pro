import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/Button';

export function CompletionPage() {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    background: `linear-gradient(135deg, ${colors.grayDarkest} 0%, ${colors.grayDarker} 100%)`,
    color: colors.white,
    textAlign: 'center',
  };

  const emojiStyle: React.CSSProperties = {
    fontSize: '5rem',
    marginBottom: '24px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '16px',
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: colors.grayLight,
    marginBottom: '48px',
    maxWidth: '500px',
    lineHeight: 1.6,
  };

  const skillsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '48px',
    maxWidth: '600px',
  };

  const skillStyle: React.CSSProperties = {
    backgroundColor: colors.grayDarker,
    color: colors.green,
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    <div style={containerStyle}>
      <div style={emojiStyle}>🎓</div>
      <h1 style={titleStyle}>Congratulations!</h1>
      <p style={subtitleStyle}>
        You've completed the CSS Grid tutorial! You now have the skills to create
        powerful, flexible layouts for your web projects.
      </p>

      <div style={skillsContainerStyle}>
        {skills.map((skill) => (
          <div key={skill} style={skillStyle}>
            <span>✓</span>
            {skill}
          </div>
        ))}
      </div>

      <div style={buttonGroupStyle}>
        <Button variant="ghost" onClick={() => navigate('/learn/0')}>
          Start Over
        </Button>
        <Button onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
