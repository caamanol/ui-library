import React, { useState } from 'react';
import ScreenScaffold from '../components/ScreenScaffold.jsx';
import Card from '../components/atoms/Card.jsx';
import Input from '../components/atoms/Input.jsx';
import Button from '../components/atoms/Button.jsx';

/**
 * Login form converted from Figma screenshot.
 * Notes:
 * - Uses accessible labels and basic validation.
 * - The screenshot can be overlaid (bottom-right toggle) to align styles.
 */
export default function LoginOpenDevIATools() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!email.trim()) return 'Ingresa tu email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email inválido';
    if (!password) return 'Ingresa tu contraseña';
    return '';
  }

  async function onSubmit(e) {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);
    setError('');
    setLoading(true);
    try {
      // TODO: Integrar con API real
      await new Promise(r => setTimeout(r, 700));
      alert(`Login ok\nEmail: ${email}\nRecordarme: ${remember ? 'sí' : 'no'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScreenScaffold width={420} debug={false}>
      <form onSubmit={onSubmit} noValidate>
        <Card className="shadow-sm">
        <div className="text-center mb-16">
          <h1 className="header-title">Iniciar sesión</h1>
          <p className="mt-6 text-muted text-sm">Accedé a Chequemate</p>
        </div>

        <div className="grid gap-12">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="label">Contraseña</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-label">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
              Recordarme
            </label>
            <button type="button" onClick={() => alert('Recuperar contraseña')} className="link">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {error && (
            <div role="alert" className="alert alert--error">
              {error}
            </div>
          )}

          <Button type="submit" disabled={loading} fullWidth className={loading ? 'btn--disabled' : ''}>
            {loading ? 'Ingresando…' : 'Ingresar'}
          </Button>
        </div>
        </Card>
      </form>
    </ScreenScaffold>
  );
}
