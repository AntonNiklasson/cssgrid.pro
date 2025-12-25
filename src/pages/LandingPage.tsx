import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/Button';
import { getTotalLessons } from '../data/tutorial';

export function LandingPage() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const totalLessons = getTotalLessons();

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    background: `linear-gradient(135deg, ${colors.grayDarkest} 0%, ${colors.grayDarker} 100%)`,
    color: colors.white,
  };

  const heroStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '700px',
    marginBottom: '60px',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: '16px',
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const taglineStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: colors.grayLight,
    marginBottom: '32px',
    fontWeight: 400,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    color: colors.gray,
    lineHeight: 1.7,
    marginBottom: '40px',
  };

  const statsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '48px',
    justifyContent: 'center',
    marginBottom: '48px',
  };

  const statItemStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: colors.accent,
    marginBottom: '4px',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: colors.grayLight,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const featuresStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    maxWidth: '800px',
    width: '100%',
    marginBottom: '48px',
  };

  const featureStyle: React.CSSProperties = {
    backgroundColor: colors.grayDarker,
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
  };

  const featureIconStyle: React.CSSProperties = {
    fontSize: '2rem',
    marginBottom: '12px',
  };

  const featureTitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '8px',
    color: colors.white,
  };

  const featureDescStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: colors.grayLight,
    lineHeight: 1.5,
  };

  const footerStyle: React.CSSProperties = {
    marginTop: '60px',
    textAlign: 'center',
    color: colors.gray,
    fontSize: '0.875rem',
  };

  const startTutorial = () => {
    navigate('/learn/0');
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={logoStyle}>CSSGrid.pro</h1>
        <p style={taglineStyle}>An Interactive CSS Grid Tutorial</p>
        <p style={descriptionStyle}>
          Master CSS Grid through hands-on practice. Learn by doing, not just reading.
          Each lesson builds on the last, taking you from beginner to confident in no time.
        </p>

        <div style={statsStyle}>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>{totalLessons}</div>
            <div style={statLabelStyle}>Lessons</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>6</div>
            <div style={statLabelStyle}>Sections</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>~30</div>
            <div style={statLabelStyle}>Minutes</div>
          </div>
        </div>

        <Button size="lg" onClick={startTutorial}>
          Start Learning
        </Button>
      </div>

      <div style={featuresStyle}>
        <div style={featureStyle}>
          <div style={featureIconStyle}>📖</div>
          <h3 style={featureTitleStyle}>Learn by Doing</h3>
          <p style={featureDescStyle}>
            Interactive exercises with live previews
          </p>
        </div>
        <div style={featureStyle}>
          <div style={featureIconStyle}>🎯</div>
          <h3 style={featureTitleStyle}>Step by Step</h3>
          <p style={featureDescStyle}>
            Progressive lessons that build on each other
          </p>
        </div>
        <div style={featureStyle}>
          <div style={featureIconStyle}>💡</div>
          <h3 style={featureTitleStyle}>Hints When Stuck</h3>
          <p style={featureDescStyle}>
            Get help without spoiling the answer
          </p>
        </div>
        <div style={featureStyle}>
          <div style={featureIconStyle}>✨</div>
          <h3 style={featureTitleStyle}>Real Examples</h3>
          <p style={featureDescStyle}>
            Practical layouts you'll use in real projects
          </p>
        </div>
      </div>

      <footer style={footerStyle}>
        <p>Made with ❤️ for the web development community</p>
      </footer>
    </div>
  );
}
