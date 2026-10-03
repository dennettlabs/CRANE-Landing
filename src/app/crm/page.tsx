"use client";

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function CRMPage() {
  const [to, setTo] = useState('');
  const [senderName, setSenderName] = useState('Founders');
  const [from, setFrom] = useState('founders@mail.dennettlabs.com');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, from: `${senderName} <${from}>`, subject, body }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error?.message || 'Failed to send email');
      }

      setStatus('success');
      setSubject('');
      setBody('');
      setTo('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen page-bg flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a1d2e] mb-3">
            Outbound <span className="gradient-text">Mail</span>
          </h1>
          <p className="text-[#646b82] text-lg font-medium">Local CRM & Dispatch</p>
        </div>

        <div className="glass rounded-2xl p-8 shadow-[0_8px_32px_rgba(31,38,135,0.05)] animate-fade-up delay-100">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50/80 backdrop-blur-sm text-green-700 rounded-xl border border-green-200/50 flex items-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <p className="font-medium">Email dispatched successfully!</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50/80 backdrop-blur-sm text-red-700 rounded-xl border border-red-200/50 flex items-center gap-3 animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="font-medium">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1a1d2e] ml-1">Sender Name</label>
                <input 
                  type="text" 
                  value={senderName} 
                  onChange={e => setSenderName(e.target.value)}
                  className="input-premium"
                  placeholder="e.g. Daniel from Dennett"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1a1d2e] ml-1">From Email</label>
                <input 
                  type="text" 
                  value={from} 
                  onChange={e => setFrom(e.target.value)}
                  className="input-premium"
                  placeholder="e.g. founders@mail.dennettlabs.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1a1d2e] ml-1">Recipient</label>
                <input 
                  type="email" 
                  value={to} 
                  onChange={e => setTo(e.target.value)}
                  className="input-premium"
                  placeholder="investor@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#1a1d2e] ml-1">Subject</label>
              <input 
                type="text" 
                value={subject} 
                onChange={e => setSubject(e.target.value)}
                className="input-premium"
                placeholder="Introductions"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#1a1d2e] ml-1">Message Body</label>
              <textarea 
                value={body} 
                onChange={e => setBody(e.target.value)}
                rows={8}
                className="input-premium resize-y min-h-[150px]"
                placeholder="Write your email here..."
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="btn-premium w-full justify-center mt-4 text-lg"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Dispatch Email
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
