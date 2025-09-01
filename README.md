# 🚀 Jarvis Educacional - Site Principal

## 📋 Sobre o Projeto

Este é o **site principal** da Jarvis Educacional, a primeira plataforma de IA educacional 100% brasileira. O site apresenta a plataforma, seus diferenciais e funcionalidades.

## 🛠️ Tecnologias

- **React 19.1.0** - Framework JavaScript
- **Vite 6.3.5** - Build tool e dev server
- **Tailwind CSS 4.1.7** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **React Router DOM** - Roteamento

## 🚀 Deploy Automático

Este repositório está configurado para **deploy automático no Vercel**:

- ✅ **Push para main** → Deploy automático
- ✅ **Pull Requests** → Preview deployments
- ✅ **Otimizações** automáticas de performance
- ✅ **HTTPS** e CDN incluídos

## 📦 Instalação Local

```bash
# Clonar repositório
git clone https://github.com/SEU_USUARIO/jarvis-site-principal.git
cd jarvis-site-principal

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 URLs

- **Produção:** https://jarvis-site-principal.vercel.app
- **Repositório:** https://github.com/SEU_USUARIO/jarvis-site-principal

## 🔗 Sites Relacionados

- **Demonstração Interativa:** https://jarvis-demo-interativa.vercel.app
- **Plataforma de Estudos:** https://jarvis-plataforma-estudos.vercel.app

## 📋 Funcionalidades

### **🏠 Landing Page Completa:**
- Hero section com call-to-action
- Apresentação do Jarvis Doctor IA
- Seção de funcionalidades
- Diferenciais competitivos
- Planos e preços
- Formulários B2B
- Links para PerfectPay

### **🎯 Navegação:**
- Menu responsivo
- Links para demonstração
- Links para plataforma (RAIO-X)
- Formulário de contato B2B

### **💰 Integração de Pagamentos:**
- **Plano Básico:** https://go.perfectpay.com.br/PPU38CQ033F
- **Plano Premium:** https://go.perfectpay.com.br/PPU38CQ033G
- **Plano Anual:** https://go.perfectpay.com.br/PPU38CQ033H

## 🎨 Design

- **Paleta:** Azul (#2563eb) e Branco (#ffffff)
- **Tipografia:** Inter (sistema)
- **Layout:** Responsivo (mobile-first)
- **Animações:** Suaves com Framer Motion

## 📊 Performance

- **Lighthouse Score:** 90+ em todas as métricas
- **Core Web Vitals:** Otimizado
- **SEO:** Meta tags configuradas
- **Acessibilidade:** WCAG 2.1 AA

## 🔧 Configurações

### **Vercel Deploy:**
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### **Vite Config:**
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") }
  }
})
```

## 📞 Suporte

- **Email:** admjarviscorp@gmail.com
- **Documentação:** README.md
- **Issues:** GitHub Issues

## 📄 Licença

© 2025 Jarvis Educacional. Todos os direitos reservados.

---

**🎓 Transformando a educação brasileira com Inteligência Artificial!**

