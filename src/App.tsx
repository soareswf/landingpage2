
import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Email registrado: ${email}`)
    setEmail('')
  }

  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">Soareswf</div>
          <nav className="nav">
            <a href="#features">Recursos</a>
            <a href="#pricing">Preços</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Bem-vindo ao Soareswf</h1>
          <p className="hero-subtitle">
            A solução completa para suas necessidades de desenvolvimento web
          </p>
          <form className="hero-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Começar Agora</button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Nossos Recursos</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Rápido</h3>
              <p>Performance otimizada para melhor experiência do usuário</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Design Moderno</h3>
              <p>Interface intuitiva e responsiva em todos os dispositivos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Seguro</h3>
              <p>Proteção de dados com os melhores padrões de segurança</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsivo</h3>
              <p>Funciona perfeitamente em dispositivos móveis e desktop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Tabela de Preços</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Básico</h3>
              <p className="price">R$ 99</p>
              <p className="period">por mês</p>
              <ul className="features-list">
                <li>✓ Até 10 projetos</li>
                <li>✓ Suporte por email</li>
                <li>✓ Armazenamento 5GB</li>
              </ul>
              <button>Escolher Plano</button>
            </div>
            <div className="pricing-card featured">
              <div className="badge">Popular</div>
              <h3>Profissional</h3>
              <p className="price">R$ 299</p>
              <p className="period">por mês</p>
              <ul className="features-list">
                <li>✓ Projetos Ilimitados</li>
                <li>✓ Suporte prioritário</li>
                <li>✓ Armazenamento 100GB</li>
                <li>✓ Análises avançadas</li>
              </ul>
              <button>Escolher Plano</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="price">Customizado</p>
              <p className="period">sob demanda</p>
              <ul className="features-list">
                <li>✓ Tudo incluído</li>
                <li>✓ Suporte 24/7</li>
                <li>✓ Armazenamento Ilimitado</li>
                <li>✓ Consultor dedicado</li>
              </ul>
              <button>Contatar Vendas</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Entre em Contato</h2>
          <p>Tem dúvidas? Nosso time está pronto para ajudar!</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <p>contato@soareswf.com</p>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <p>(11) 99999-9999</p>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>São Paulo, Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Soareswf. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
