* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: hsl(30, 15%, 88%);
  color: hsl(30, 10%, 20%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

h2, h3 {
  font-family: 'Playfair Display', serif;
}

.font-script {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
}

/* ── Card ── */
.card {
  width: 100%;
  max-width: 480px;
  background: hsl(30, 20%, 98%);
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  border: 1px solid hsla(36, 45%, 70%, 0.4);
  overflow: hidden;
}

/* ── Header ── */
.card-header {
  padding: 2rem 2rem 1rem;
  text-align: center;
}

.icon-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: hsl(30, 15%, 90%);
  margin-bottom: 1rem;
}

.icon-circle svg {
  width: 1.75rem;
  height: 1.75rem;
  color: hsl(36, 55%, 45%);
}

.card-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.card-header p {
  font-size: 1.125rem;
  color: hsl(30, 8%, 50%);
}

/* ── Divider ── */
.divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: hsl(30, 15%, 85%);
}

.divider svg {
  width: 1rem;
  height: 1rem;
  color: hsl(36, 55%, 45%);
}

/* ── Options ── */
.options {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option {
  border-radius: 0.75rem;
  border: 1px solid hsla(36, 45%, 70%, 0.4);
  background: hsl(30, 20%, 98%);
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.option:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: hsl(36, 45%, 70%);
}

.option-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: hsl(30, 15%, 90%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.option:hover .option-icon {
  background: hsla(36, 55%, 45%, 0.1);
}

.option-icon svg {
  width: 1.25rem;
  height: 1.25rem;
  color: hsl(36, 55%, 45%);
}

.option-content {
  flex: 1;
  min-width: 0;
}

.option-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.option-content p {
  font-size: 0.875rem;
  color: hsl(30, 8%, 50%);
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* ── Gold Button ── */
.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, hsl(36, 45%, 70%), hsl(36, 55%, 45%), hsl(36, 60%, 30%));
  color: hsl(30, 25%, 96%);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-gold:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}

.btn-gold svg {
  width: 1rem;
  height: 1rem;
}

/* ── Footer ── */
.card-footer {
  padding: 0 2rem 1.5rem;
  text-align: center;
}

.card-footer p {
  font-size: 0.875rem;
  color: hsl(30, 8%, 50%);
}
