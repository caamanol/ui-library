import React, { useState } from 'react';

/**
 * ScreenScaffold
 * - Centers content on a neutral background.
 * - Optional screenshot overlay to aid alignment while building.
 */
export default function ScreenScaffold({ children, screenshot, width = 420, debug = false }) {
  const [showShot, setShowShot] = useState(Boolean(debug));
  const [opacity, setOpacity] = useState(0.5);

  return (
    <div className="screen-scaffold">
      <div className="screen-scaffold__container" style={{ width }}>
        {screenshot && showShot && (
          <div className="screen-scaffold__overlay" style={{ opacity }}>
            <img src={screenshot} alt="screenshot overlay" />
          </div>
        )}
        <div>
          {children}
        </div>
      </div>

      {screenshot && (
        <div className="screen-scaffold__overlay-controls">
          <label className="overlay-controls__label">
            <input type="checkbox" checked={showShot} onChange={e => setShowShot(e.target.checked)} />
            Overlay screenshot
          </label>
          <div className="overlay-controls__row">
            <span className="text-muted" style={{ fontSize: 12 }}>Opacity</span>
            <input type="range" min={0} max={1} step={0.05} value={opacity} onChange={e => setOpacity(parseFloat(e.target.value))} />
          </div>
        </div>
      )}
    </div>
  );
}
