import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users, Target, Rocket, Award, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Projetos Entregues', value: '150+' },
  { label: 'Clientes Satisfeitos', value: '100+' },
  { label: 'Anos no Mercado', value: '8+' },
  { label: 'Profissionais', value: '25+' }
];

const values = [
  {
    icon: Code2,
    title: 'Excelência Técnica',
    description: 'Comprometimento com as melhores práticas e tecnologias mais recentes do mercado.'
  },
  {
    icon: Users,
    title: 'Foco no Cliente',
    description: 'Parceria próxima e comunicação transparente em todas as etapas do projeto.'
  },
  {
    icon: Target,
    title: 'Resultados Mensuráveis',
    description: 'Soluções que geram valor real e impacto positivo nos negócios dos nossos clientes.'
  }
];

const achievements = [
  {
    icon: Rocket,
    title: 'Inovação Constante',
    description: 'Pioneiros em adotar e implementar novas tecnologias e metodologias.'
  },
  {
    icon: Award,
    title: 'Reconhecimento',
    description: 'Premiados como uma das empresas mais inovadoras do setor em 2023.'
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Sustentável',
    description: 'Expansão consistente mantendo a qualidade e excelência em cada projeto.'
  }
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sua ideia, conectada ao amanhã.
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Somos uma empresa de tecnologia dedicada a criar soluções digitais inovadoras 
              que impulsionam o sucesso dos nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Desenvolver soluções digitais inovadoras que transformem positivamente 
                a maneira como as empresas operam e se conectam com seus clientes, 
                sempre priorizando a excelência técnica e a satisfação do cliente.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nossa Visão</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Ser reconhecida como referência em desenvolvimento de soluções digitais 
                no Brasil, liderando a transformação digital das empresas através de 
                tecnologia de ponta e resultados excepcionais.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Conquistas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12">Nossa Equipe</h2>
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe Daluthi"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto">
            Nossa equipe é formada por profissionais apaixonados por tecnologia e 
            inovação, sempre em busca das melhores soluções para nossos clientes.
          </p>
        </div>
      </section>
    </div>
  );
}