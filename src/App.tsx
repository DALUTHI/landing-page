import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Settings, ChevronRight, Menu, X, Sun, Moon } from 'lucide-react';
import { QuoteModal } from './components/QuoteModal';

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Sites modernos, responsivos e otimizados para SEO.',
    icon: 'Monitor',
    features: ['Landing Pages', 'Sistemas Web', 'Blogs']
  },
  {
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e multiplataforma de alta performance.',
    icon: 'Smartphone',
    features: ['iOS', 'Android', 'React Native', 'Node.js']
  },
  {
    title: 'Sistemas Empresariais',
    description: 'Soluções personalizadas para sua empresa.',
    icon: 'Settings',
    features: ['ERP', 'CRM', 'Dashboards', 'Integrações']
  }
];

const portfolio = [
  {
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'App de Cardápio Online',
    description: 'Aplicativo móvel para cardápio online',
    image: 'https://images.unsplash.com/photo-1568031813264-d394c5d474b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do Projeto 4',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      {/* Header */}
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
              Daluthi
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Portfólio</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contato</a>
            <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={openQuoteModal}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-600/20"
            >
              Solicitar Orçamento
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="#services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2">Serviços</a>
              <a href="#portfolio" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2">Portfólio</a>
              <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2">Contato</a>
              <button 
                onClick={openQuoteModal}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-600/20 mt-2"
              >
                Solicitar Orçamento
              </button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent dark:from-primary-600/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="container mx-auto px-4 pt-32 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Sua ideia, conectada ao amanhã.
            </h1>
       
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Desenvolvimento Web, Aplicativos Móveis e Sistemas Personalizados para 
              <span className="text-primary-600 dark:text-primary-400"> Empresas Inovadoras</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openQuoteModal}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-primary-600/20 flex items-center justify-center gap-2"
              >
                Comece Agora
                <ChevronRight className="w-5 h-5" />
              </button>
              <a 
                href="#portfolio"
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
              >
                Ver Projetos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              Nossos Serviços
            </motion.h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Soluções completas e personalizadas para todas as suas necessidades digitais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary-600/10 dark:bg-primary-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  {service.icon === 'Monitor' && <Monitor size={32} className="text-primary-600 group-hover:text-white transition-colors" />}
                  {service.icon === 'Smartphone' && <Smartphone size={32} className="text-primary-600 group-hover:text-white transition-colors" />}
                  {service.icon === 'Settings' && <Settings size={32} className="text-primary-600 group-hover:text-white transition-colors" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              Nossos Projetos
            </motion.h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-video"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4"
              >
                Vamos Conversar?
              </motion.h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Entre em contato e descubra como podemos ajudar no seu próximo projeto
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary-600 outline-none transition-all resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-600/20 text-lg font-medium"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
                  Daluthi
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Soluções digitais inovadoras para impulsionar o seu negócio
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Desenvolvimento Web</li>
                <li className="text-gray-600 dark:text-gray-300">Aplicativos Mobile</li>
                <li className="text-gray-600 dark:text-gray-300">Sistemas Empresariais</li>
                <li className="text-gray-600 dark:text-gray-300">Consultoria</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">d4luthi@gmail.com</li>
                <li className="text-gray-600 dark:text-gray-300">(62) 99999-9999</li>
                <li className="text-gray-600 dark:text-gray-300">Goiânia, GO</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 Daluthi. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}

export default App;