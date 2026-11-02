import type { ReactNode } from 'react';
import { Check, ChevronRight, CircleAlert, X } from 'lucide-react';

export function Button({ children, variant = 'ghost', onClick, disabled, type = 'button', className = '', form }: { children: ReactNode; variant?: 'ghost'|'gold'|'danger'; onClick?: () => void; disabled?: boolean; type?: 'button'|'submit'; className?: string; form?: string }) {
  return <button type={type} form={form} className={`${variant === 'gold' ? 'gold-btn' : variant === 'danger' ? 'danger-btn' : 'ghost-btn'} ${className}`} onClick={onClick} disabled={disabled}>{children}</button>;
}

export function Pill({ children, gold = false }: { children: ReactNode; gold?: boolean }) { return <span className={`pill ${gold ? 'gold-pill' : ''}`}>{children}</span>; }

export function TabBar<T extends string>({ items, active, onChange }: { items: { id: T; label: string; icon?: ReactNode }[]; active: T; onChange: (id: T) => void }) {
  return <div className="glass-panel subtle tab-bar">{items.map(item => <button key={item.id} className={`tab ${active === item.id ? 'active' : ''}`} onClick={() => onChange(item.id)}>{item.icon}{item.label}</button>)}</div>;
}

export function StatCard({ label, value, detail, icon }: { label: string; value: string|number; detail?: string; icon?: ReactNode }) { return <div className="glass-panel subtle stat-card"><div style={{ color:'var(--gold)', display:'flex', justifyContent:'space-between' }}>{icon}{detail && <small>{detail}</small>}</div><span className="stat-value">{value}</span><small>{label}</small></div>; }

export function Modal({ title, eyebrow, children, onClose, actions }: { title: string; eyebrow?: string; children: ReactNode; onClose: () => void; actions?: ReactNode }) {
  return <div className="modal-backdrop" role="dialog" aria-modal="true"><div className="glass-panel raised modal-card"><div className="modal-header"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2></div><button className="icon-btn" onClick={onClose} aria-label="Close"><X size={17} /></button></div>{children}<div className="modal-actions">{actions || <Button onClick={onClose}>Close</Button>}</div></div></div>;
}

export function EmptyState({ title, body, icon = <CircleAlert size={22} /> }: { title: string; body: string; icon?: ReactNode }) { return <div className="empty-state">{icon}<h3>{title}</h3><p>{body}</p></div>; }

export function SavedMark() { return <span style={{ display:'inline-flex', alignItems:'center', gap:5, color:'var(--green)', fontSize:11 }}><Check size={13} /> Saved</span>; }

export function LinkArrow() { return <ChevronRight size={15} />; }
