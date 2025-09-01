import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Brain, 
  Users, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Award,
  Target,
  TrendingUp,
  Clock,
  BookOpen,
  Calendar,
  Settings,
  Palette,
  Globe
} from 'lucide-react'
import './App.css'

// Importar imagens melhoradas
import heroImage from './assets/01_enhanced.png'
import dashboardImage from './assets/02_enhanced.png'
import simuladosImage from './assets/03_enhanced.png'
import jarvisDoctorImage from './assets/04_enhanced.png'
import agendaImage from './assets/05_enhanced.png'
import estatisticasImage from './assets/06_enhanced.png'
import adminImage from './assets/07_enhanced.png'
import personalizacaoImage from './assets/08_enhanced.png'

function App() {
  // Função para scroll suave para seções
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Função para abrir modal de contato/formulário
  const openContactModal = () => {
    alert("Para acesso de teste como aluno, por favor, entre em contato conosco através do email: contato@jarviseducacional.com.br. As credenciais serão fornecidas mediante solicitação.");
  };

  // Função para redirecionar para plataforma
  const redirectToPlatform = () => {
    window.open('https://e5h6i7cv0zx1.manus.space', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Jarvis Educacional</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('funcionalidades')} className="text-gray-600 hover:text-blue-600 transition-colors">Funcionalidades</button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-gray-600 hover:text-blue-600 transition-colors">Diferenciais</button>
            <button onClick={() => scrollToSection('planos')} className="text-gray-600 hover:text-blue-600 transition-colors">Planos</button>
            <button onClick={() => window.open('https://jarvis-nectar-style-branch-2.manus.space/', '_blank')} className="text-gray-600 hover:text-blue-600 transition-colors">Demonstração</button>
            <button onClick={() => window.open('https://jarvis-xkg35g.manus.space/', '_blank')} className="text-gray-600 hover:text-blue-600 transition-colors">RAIO-X</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-600 hover:text-blue-600 transition-colors">Contato</button>
          </nav>
          <Button onClick={() => scrollToSection('planos')} className="bg-blue-600 hover:bg-blue-700">
            Comece Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            🚀 A Revolução da Educação com IA
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Jarvis Educacional
            <span className="block text-blue-600">A Primeira IA Educacional do Brasil</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolucione seus estudos com a primeira plataforma educacional brasileira que combina 
            Inteligência Artificial avançada com gestão educacional completa. Personalização total, 
            resultados comprovados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => scrollToSection('planos')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Comece Agora Grátis
            </Button>
            <Button onClick={openContactModal} size="lg" variant="outline" className="text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Demonstração para Escolas
            </Button>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={heroImage} 
              alt="Plataforma Jarvis Educacional" 
              className="rounded-2xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O Problema que Resolvemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A educação brasileira enfrenta desafios únicos que impedem o potencial máximo dos estudantes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-red-200 bg-red-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-red-800">67%</CardTitle>
                <CardDescription className="text-red-600">
                  dos estudantes não conseguem se organizar para vestibulares
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-orange-200 bg-orange-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">45%</CardTitle>
                <CardDescription className="text-orange-600">
                  das escolas não possuem ferramentas digitais eficientes
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-yellow-200 bg-yellow-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">78%</CardTitle>
                <CardDescription className="text-yellow-600">
                  dos professores gastam tempo excessivo com tarefas administrativas
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">89%</CardTitle>
                <CardDescription className="text-purple-600">
                  dos pais não conseguem acompanhar o progresso real dos filhos
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Jarvis Doctor IA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                🤖 Jarvis Doctor IA
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                A Primeira IA Educacional Verdadeiramente Inteligente do Brasil
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Nossa IA proprietária revoluciona o aprendizado com diagnóstico personalizado, 
                recomendações inteligentes e evolução adaptativa única no mercado.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span className="text-lg">Diagnóstico Personalizado com 94% de precisão</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span className="text-lg">+40% melhoria no desempenho dos estudantes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span className="text-lg">-60% tempo gasto em planejamento de estudos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span className="text-lg">+85% engajamento dos alunos na plataforma</span>
                </div>
              </div>
              <Button onClick={redirectToPlatform} size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Brain className="mr-2 h-5 w-5" />
                Experimente a IA Agora
              </Button>
            </div>
            <div className="relative">
              <img 
                src={jarvisDoctorImage} 
                alt="Jarvis Doctor IA" 
                className="rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Funcionalidades Completas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma plataforma completa que atende todas as necessidades educacionais
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Dashboard Inteligente</CardTitle>
                <CardDescription>
                  Estatísticas em tempo real, gráficos interativos e métricas detalhadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={dashboardImage} alt="Dashboard" className="rounded-lg w-full" />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Simulados Inteligentes</CardTitle>
                <CardDescription>
                  Sistema completo com timer, correção automática e histórico de resultados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={simuladosImage} alt="Simulados" className="rounded-lg w-full" />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Agenda Inteligente</CardTitle>
                <CardDescription>
                  Calendário de vestibulares 2025/2026 com contagem regressiva automática
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={agendaImage} alt="Agenda" className="rounded-lg w-full" />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Estatísticas Avançadas</CardTitle>
                <CardDescription>
                  Análise por matéria, evolução temporal e comparativos detalhados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={estatisticasImage} alt="Estatísticas" className="rounded-lg w-full" />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Área Administrativa</CardTitle>
                <CardDescription>
                  Gerenciamento completo de usuários, simulados e configurações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={adminImage} alt="Administração" className="rounded-lg w-full" />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Personalização Total</CardTitle>
                <CardDescription>
                  White-label completo, cores personalizáveis e marca própria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={personalizacaoImage} alt="Personalização" className="rounded-lg w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Diferenciais Únicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Por que a Jarvis Educacional é a escolha certa para revolucionar sua educação
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">IA Proprietária</CardTitle>
                <CardDescription className="text-blue-600">
                  Única IA educacional verdadeiramente inteligente do Brasil
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-green-200 bg-green-50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">100% Responsivo</CardTitle>
                <CardDescription className="text-green-600">
                  Funciona perfeitamente em qualquer dispositivo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Personalização Total</CardTitle>
                <CardDescription className="text-purple-600">
                  White-label completo com sua marca e identidade
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-orange-200 bg-orange-50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Performance Superior</CardTitle>
                <CardDescription className="text-orange-600">
                  Carregamento em menos de 2 segundos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-red-200 bg-red-50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Segurança Avançada</CardTitle>
                <CardDescription className="text-red-600">
                  99.9% uptime garantido com backup automático
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-yellow-200 bg-yellow-50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Preço Competitivo</CardTitle>
                <CardDescription className="text-yellow-600">
                  50% mais barato que principais concorrentes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O que Nossos Usuários Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reais de quem já transformou seus estudos com a Jarvis Educacional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ana Silva</CardTitle>
                    <CardDescription>Estudante, 17 anos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "A IA do Jarvis identificou exatamente onde eu tinha dificuldade em Matemática. 
                  Em 2 meses, minha nota subiu de 6 para 9!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Prof. Maria Santos</CardTitle>
                    <CardDescription>Coordenadora Pedagógica</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Como coordenadora, consigo acompanhar o progresso de 300 alunos em tempo real. 
                  Revolucionou nossa gestão!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">João Oliveira</CardTitle>
                    <CardDescription>Diretor de Cursinho</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Implementamos o Jarvis e nossa captação de alunos aumentou 40%. 
                  Os pais ficam impressionados com a tecnologia!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Planos e Preços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para suas necessidades. Preços acessíveis para democratizar a educação com IA.
            </p>
          </div>
          
          {/* Planos B2C */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Para Alunos</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Básico</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    R$ 9,99
                    <span className="text-lg text-gray-500 font-normal">/mês</span>
                  </div>
                  <CardDescription>Perfeito para começar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dashboard básico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Simulados ilimitados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Agenda de vestibulares</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte por email</span>
                  </div>
                  <Button onClick={() => window.open('https://go.perfectpay.com.br/PPU38CQ033C', '_blank')} className="w-full mt-6">Escolher Plano</Button>
                </CardContent>
              </Card>

              <Card className="relative hover:shadow-lg transition-shadow border-blue-500 border-2">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Mais Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    R$ 19,99
                    <span className="text-lg text-gray-500 font-normal">/mês</span>
                  </div>
                  <CardDescription>Recomendado para estudantes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Tudo do Básico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Jarvis Doctor IA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Estatísticas avançadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte prioritário</span>
                  </div>
                  <Button onClick={() => window.open("https://go.perfectpay.com.br/PPU38CQ033G", "_blank")} className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Escolher Plano</Button>
                </CardContent>
              </Card>

              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Anual</CardTitle>
                  <div className="text-4xl font-bold text-green-600 mt-4">
                    R$ 199,00
                    <span className="text-lg text-gray-500 font-normal">/ano</span>
                  </div>
                  <CardDescription>Economize 2 meses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Tudo do Premium</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>2 meses grátis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Relatórios exclusivos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Acesso antecipado</span>
                  </div>
                  <Button onClick={() => window.open("https://go.perfectpay.com.br/PPU38CQ033H", "_blank")} className="w-full mt-6 bg-green-600 hover:bg-green-700">Escolher Plano</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Planos B2B */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Para Instituições</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Escolar</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mt-4">
                    R$ 99,90
                    <span className="text-lg text-gray-500 font-normal">/mês</span>
                  </div>
                  <CardDescription>Até 50 alunos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Área administrativa básica</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Relatórios gerenciais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte técnico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Integração básica</span>
                  </div>
                  <Button onClick={openContactModal} className="w-full mt-6">Solicitar Demonstração</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Empresarial</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mt-4">
                    R$ 299,90
                    <span className="text-lg text-gray-500 font-normal">/mês</span>
                  </div>
                  <CardDescription>Até 200 alunos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Tudo do Escolar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Personalização básica</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>API integração</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte telefônico</span>
                  </div>
                  <Button onClick={openContactModal} className="w-full mt-6">Solicitar Demonstração</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-purple-500 border-2">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                  Enterprise
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mt-4">
                    R$ 599,90
                    <span className="text-lg text-gray-500 font-normal">/mês</span>
                  </div>
                  <CardDescription>Usuários ilimitados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Tudo do Empresarial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>White-label completo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Domínio próprio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte dedicado</span>
                  </div>
                  <Button onClick={openContactModal} className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Falar com Consultor</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Revolucionar sua Educação?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Junte-se a milhares de estudantes e instituições que já transformaram 
            seus resultados com a Jarvis Educacional. Comece hoje mesmo!
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollToSection('planos')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Comece Agora Grátis
          </Button>
          <Button onClick={openContactModal} size="lg" variant="outline" className="text-lg px-8 py-4">
            Agendar Demonstração
          </Button>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Jarvis Educacional</span>
              </div>
              <p className="text-gray-400 mb-4">
                A primeira plataforma educacional do Brasil com Inteligência Artificial avançada.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jarvis Educacional. Todos os direitos reservados.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a> • 
              <a href="#" className="hover:text-white transition-colors ml-2">Termos de Uso</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

