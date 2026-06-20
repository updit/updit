'use client';

import { useState } from 'react';
import type { ContactForm } from '@/types';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const labelStyle: React.CSSProperties = {
    textAlign: 'right',
    minWidth: '280px',
    fontSize: 'clamp(18px, 2.5vw, 28px)',
    fontWeight: 700,
    color: '#fefefe',
    flexShrink: 0,
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid rgba(255,255,255,0.4)',
    color: '#fefefe',
    fontSize: 'clamp(16px, 2vw, 22px)',
    padding: '8px 0',
    outline: 'none',
  };

  return (
    <div
      style={{
        background: '#3a3a3c',
        color: '#fefefe',
        minHeight: '100vh',
        position: 'relative',
        padding: '48px 32px 80px',
        overflow: 'hidden',
      }}
    >
      {/* form area */}
      <div style={{ maxWidth: '600px' }}>
        <h1
          className="font-extrabold mb-12"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          Get in touch
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-10">
            <label className="hidden md:block" style={labelStyle} htmlFor="name">What should I call you?</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="your name"
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-10">
            <label className="hidden md:block" style={labelStyle} htmlFor="email">Where can I reach you?</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your email"
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-10">
            <label className="hidden md:block" style={labelStyle} htmlFor="message">What's on your mind?</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              autoComplete="off"
              value={form.message}
              onChange={handleChange}
              placeholder="a question, a request, or just hello — all welcome."
              style={inputStyle}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                backgroundColor: '#c9ef52',
                color: '#000000',
                padding: '12px 32px',
                fontWeight: 700,
                borderRadius: 0,
                border: 'none',
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send →'}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <p className="font-mono text-sm mt-6" style={{ color: '#c9ef52' }}>
            Thank you! I'll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="font-mono text-sm mt-6" style={{ color: '#ff8080' }}>
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-xs mt-4 mb-8 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Usually replies within 48 hours.
          <br />
          Based overseas — email is our main channel.
        </p>
      </div>

      {/* illustration: always fixed bottom-right */}
      <img
        src="/hello.png"
        alt="illustration"
        className="w-[80px] md:w-[220px]"
        style={{
          position: 'absolute',
          bottom: 0,
          right: '32px',
          height: 'auto',
        }}
      />
    </div>
  );
}
