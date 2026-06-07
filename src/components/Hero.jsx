import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-spark">✨</span> Smart & Fast ordering
          </div>
          
          <h1 className="hero-title">
            Order Drinks in <span className="title-gradient">Seconds</span>
          </h1>
          
          <div className="hero-steps">
            <div className="step-item">
              <span className="step-icon">📱</span>
              <span className="step-text">Scan QR</span>
            </div>
            <span className="step-arrow">→</span>
            <div className="step-item">
              <span className="step-icon">☕</span>
              <span className="step-text">Order</span>
            </div>
            <span className="step-arrow">→</span>
            <div className="step-item">
              <span className="step-icon">🛍️</span>
              <span className="step-text">Pickup</span>
            </div>
          </div>
          
          <p className="hero-subheading">
            Skip the queue entirely. Scan the QR code at your table, customize your premium brew, and pick it up when it's fresh and piping hot.
          </p>
          
          <div className="hero-actions">
            <button className="hero-btn-primary">
              Explore Menu
              <span className="btn-glow"></span>
            </button>
          </div>
        </div>

        {/* Right Side: Visual Placeholder Card */}
        <div className="hero-visual">
          <div className="visual-card">
            <div className="card-ambient-glow"></div>
            
            <div className="card-content">
              {/* Spinning/floating 3D wireframe outline using pure CSS elements */}
              <div className="coffee-cup-canvas">
                <div className="scene">
                  <div className="cup-3d-model">
                    <div className="steam-container">
                      <div className="steam-line steam-1"></div>
                      <div className="steam-line steam-2"></div>
                      <div className="steam-line steam-3"></div>
                    </div>
                    <div className="cup-rim"></div>
                    <div className="cup-body-mesh"></div>
                    <div className="cup-handle-mesh"></div>
                  </div>
                </div>
              </div>

              <div className="card-info">
                <div className="card-badge">INTERACTIVE</div>
                <h3 className="card-heading">3D Coffee Cup</h3>
                <p className="card-status-text">Coming Soon</p>
                <div className="card-progress">
                  <div className="progress-track">
                    <div className="progress-fill"></div>
                  </div>
                  <span className="progress-label">Rendering Engine Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
