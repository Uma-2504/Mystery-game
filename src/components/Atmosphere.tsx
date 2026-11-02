import type { ReactNode } from 'react';
import { Moon, Settings, Shield, Sparkles } from 'lucide-react';

export function Atmosphere({ image, children }: { image?: string; children: ReactNode }) {
  return <div className="app-shell"><div className="world-image" style={image ? { backgroundImage: `url(${image})` } : undefined} /><div className="fog" /><div className="grain" /><div className="content-layer">{children}</div></div>;
}

export function Brand({ onClick }: { onClick?: () => void }) {
  return <button className="brand-lockup" onClick={onClick} aria-label="Return to landing page"><span className="brand-mark"><span>✦</span></span><span><span className="brand-name">AI MYSTERY ROOM</span><span className="brand-sub">THE RELIQUARY OF TRUTH</span></span></button>;
}

export function SiteTopbar({ onHome, onSettings, compact = false }: { onHome: () => void; onSettings?: () => void; compact?: boolean }) {
  return <header className="shell-topbar" style={compact ? { paddingTop: 16 } : undefined}><div style={{ display: 'flex', alignItems: 'center' }}><Brand onClick={onHome} /><div className="topbar-actions"><button className="ghost-btn" onClick={onSettings}><Settings size={15} /><span>Settings</span></button><button className="icon-btn" aria-label="Moonlight mode"><Moon size={16} /></button></div></div></header>;
}

export function SectionEyebrow({ icon = <Sparkles size={13} />, children }: { icon?: ReactNode; children: ReactNode }) { return <div className="eyebrow" style={{ display:'flex', alignItems:'center', gap:7 }}>{icon}{children}</div>; }

export function SaveIndicator({ savedAt }: { savedAt?: number }) {
  const label = savedAt ? `Saved ${new Date(savedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Autosave ready';
  return <span className="pill"><Shield size={11} />{label}</span>;
}
