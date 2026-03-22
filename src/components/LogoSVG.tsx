"use client";

import { useId } from "react";

interface LogoSVGProps {
  theme: "dark" | "light";
  height?: number;
}

export default function LogoSVG({ theme, height = 44 }: LogoSVGProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `gearGrad${uid}`;
  const textGradId = `textGrad${uid}`;
  const glowId = `glow${uid}`;

  const textGradStart = theme === "dark" ? "#EDF2F7" : "#0C1024";
  const textGradEnd   = theme === "dark" ? "#3B82F6" : "#2563EB";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 295 80"
      style={{ height, width: "auto", display: "block" }}
      aria-label="studiocode.com.ua"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5BC4EC" />
          <stop offset="100%" stopColor="#1B65B3" />
        </linearGradient>
        <linearGradient id={textGradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={textGradStart} />
          <stop offset="100%" stopColor={textGradEnd} />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Outer orbit ring (dashed) ── */}
      <circle
        cx="40" cy="40" r="37"
        fill="none"
        stroke="url(#gradId)"
        strokeWidth="0.8"
        strokeDasharray="3 4"
        opacity="0.45"
        style={{ stroke: `url(#${gradId})` }}
      />

      {/* ── Cardinal tick marks ── */}
      <line x1="40" y1="1"  x2="40" y2="6"  stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="74" x2="40" y2="79" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1"  y1="40" x2="6"  y2="40" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="74" y1="40" x2="79" y2="40" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Corner accent dots (45° diagonal) ── */}
      <circle cx="14" cy="14" r="2"   fill={`url(#${gradId})`} opacity="0.6" />
      <circle cx="66" cy="14" r="2"   fill={`url(#${gradId})`} opacity="0.6" />
      <circle cx="14" cy="66" r="2"   fill={`url(#${gradId})`} opacity="0.6" />
      <circle cx="66" cy="66" r="2"   fill={`url(#${gradId})`} opacity="0.6" />

      {/* ── Diagonal connector lines to corner dots ── */}
      <line x1="16" y1="16" x2="22" y2="22" stroke={`url(#${gradId})`} strokeWidth="0.8" opacity="0.4" />
      <line x1="64" y1="16" x2="58" y2="22" stroke={`url(#${gradId})`} strokeWidth="0.8" opacity="0.4" />
      <line x1="16" y1="64" x2="22" y2="58" stroke={`url(#${gradId})`} strokeWidth="0.8" opacity="0.4" />
      <line x1="64" y1="64" x2="58" y2="58" stroke={`url(#${gradId})`} strokeWidth="0.8" opacity="0.4" />

      {/* ── Gear body (8 teeth + center hole) ── */}
      <path
        fill={`url(#${gradId})`}
        fillRule="evenodd"
        filter={`url(#${glowId})`}
        d="M 30,16 L 34,8 L 46,8 L 50,16
           L 58,13 L 67,22 L 64,30
           L 72,34 L 72,46 L 64,50
           L 67,58 L 58,67 L 50,64
           L 46,72 L 34,72 L 30,64
           L 22,67 L 13,58 L 16,50
           L 8,46 L 8,34 L 16,30
           L 13,22 L 22,13 Z
           M 55,40 A 15,15 0 0,1 25,40 A 15,15 0 0,1 55,40 Z"
      />

      {/* ── Inner ring inside hole ── */}
      <circle
        cx="40" cy="40" r="11"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
      />

      {/* ── S letter centered in gear ── */}
      <text
        x="40"
        y="40"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Arial Black', Impact, Arial, sans-serif"
        fontSize="17"
        fontWeight="900"
        fill="white"
      >
        S
      </text>

      {/* ── Brand wordmark ── */}
      <text
        x="88"
        y="40"
        dominantBaseline="central"
        fontFamily="Geist, 'Helvetica Neue', Arial, sans-serif"
        fontSize="25"
        fontWeight="700"
        fill={`url(#${textGradId})`}
        letterSpacing="1.5"
      >
        STUDIOCODE
      </text>
    </svg>
  );
}
