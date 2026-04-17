import React, { useEffect, useState } from 'react';

function getWeatherType(code) {
  if (code === 0) return 'clear';
  if (code <= 3) return 'cloudy';
  if (code <= 48) return 'fog';
  if (code <= 67) return 'rain';
  if (code <= 77) return 'snow';
  if (code <= 82) return 'rain';
  if (code <= 86) return 'snow';
  return 'storm';
}

const sprites = {
  clear: (
    <svg viewBox="0 0 44 44" width="44" height="44" className="weather-svg weather-spin" style={{ overflow: 'visible' }}>
      <circle cx="22" cy="22" r="8" className="sun-core" />
      {[0,45,90,135,180,225,270,315].map(a => (
        <line key={a}
          x1={22 + Math.cos(a * Math.PI / 180) * 11}
          y1={22 + Math.sin(a * Math.PI / 180) * 11}
          x2={22 + Math.cos(a * Math.PI / 180) * 16}
          y2={22 + Math.sin(a * Math.PI / 180) * 16}
          className="sun-ray"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  ),
  cloudy: (
    <svg viewBox="0 0 52 36" width="52" height="36" className="weather-svg" style={{ overflow: 'visible' }}>
      <ellipse cx="28" cy="24" rx="18" ry="11" className="cloud-fill" />
      <ellipse cx="20" cy="26" rx="13" ry="9" className="cloud-fill" />
      <ellipse cx="26" cy="16" rx="11" ry="10" className="cloud-fill" />
      <ellipse cx="36" cy="18" rx="9" ry="8" className="cloud-fill" />
    </svg>
  ),
  fog: (
    <svg viewBox="0 0 52 30" width="52" height="30" className="weather-svg weather-pulse" style={{ overflow: 'visible' }}>
      {[6, 14, 22].map((y, i) => (
        <line key={y} x1={4 + i * 2} y1={y} x2={48 - i * 2} y2={y}
          className="fog-line" strokeWidth="3" strokeLinecap="round" />
      ))}
    </svg>
  ),
  rain: (
    <svg viewBox="0 0 44 48" width="44" height="48" className="weather-svg" style={{ overflow: 'visible' }}>
      <ellipse cx="22" cy="14" rx="16" ry="11" className="cloud-fill" />
      <ellipse cx="14" cy="17" rx="11" ry="8" className="cloud-fill" />
      <ellipse cx="30" cy="17" rx="10" ry="8" className="cloud-fill" />
      {[[14,28],[22,32],[30,28],[18,38],[26,38]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="2" ry="4.5"
          className="raindrop" style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
    </svg>
  ),
  snow: (
    <svg viewBox="0 0 44 44" width="44" height="44" className="weather-svg weather-spin-slow" style={{ overflow: 'visible' }}>
      {[0,60,120].map(a => (
        <line key={a}
          x1={22 + Math.cos(a * Math.PI / 180) * 18}
          y1={22 + Math.sin(a * Math.PI / 180) * 18}
          x2={22 - Math.cos(a * Math.PI / 180) * 18}
          y2={22 - Math.sin(a * Math.PI / 180) * 18}
          className="snowflake-line" strokeWidth="2.5" strokeLinecap="round"
        />
      ))}
      {[0,60,120,180,240,300].map(a => (
        <circle key={a}
          cx={22 + Math.cos(a * Math.PI / 180) * 18}
          cy={22 + Math.sin(a * Math.PI / 180) * 18}
          r="2.5" className="snowflake-dot"
        />
      ))}
      <circle cx="22" cy="22" r="3.5" className="snowflake-dot" />
    </svg>
  ),
  storm: (
    <svg viewBox="0 0 44 52" width="44" height="52" className="weather-svg weather-flicker" style={{ overflow: 'visible' }}>
      <ellipse cx="22" cy="14" rx="17" ry="11" className="cloud-dark" />
      <ellipse cx="13" cy="17" rx="11" ry="8" className="cloud-dark" />
      <ellipse cx="31" cy="17" rx="10" ry="8" className="cloud-dark" />
      <polygon points="25,26 17,40 22,40 19,52 31,34 25,34" className="lightning-bolt" />
    </svg>
  ),
};

function NatureSprite() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(({ latitude, longitude }) =>
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code`)
      )
      .then(r => r.json())
      .then(d => setWeather(getWeatherType(d.current.weather_code)))
      .catch(() => setWeather('clear'));
  }, []);

  if (!weather) return null;

  return (
    <div className="sprite-fly" aria-hidden="true">
      {sprites[weather]}
    </div>
  );
}

export default NatureSprite;
