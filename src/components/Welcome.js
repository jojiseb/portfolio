import React, { useEffect, useState } from 'react';

function Welcome({ onDone }) {
  const [fading, setFading] = useState(false);

  const dismiss = () => {
    setFading(true);
    setTimeout(onDone, 600);
  };

  useEffect(() => {
    const timer = setTimeout(dismiss, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-overlay${fading ? ' welcome-fade' : ''}`} onClick={dismiss}>
      <div className="welcome-inner">
        <p className="welcome-greeting">Hello there —</p>
        <h1 className="welcome-name">Joji Sebastian</h1>
        <p className="welcome-role">Backend Engineer · Product thinker</p>
      </div>
    </div>
  );
}

export default Welcome;
