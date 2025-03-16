import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Monitor, Smartphone, Settings, X, Upload, Check } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  services: string[];
  name: string;
  email: string;
  phone: string;
  company?: string;
  description: string;
  files?: FileList;
}

const services = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    description: 'Criação de sites institucionais, e-commerces, blogs e outras plataformas web.',
    icon: Monitor,
    basePrice: 5000
  },
  {
    id: 'app',
    title: 'Desenvolvimento de Apps',
    description: 'Desenvolvimento de aplicativos móveis para iOS e Android, com design intuitivo e funcionalidades personalizadas.',
    icon: Smartphone,
    basePrice: 8000
  },
  {
    id: 'system',
    title: 'Desenvolvimento de Sistemas',
    description: 'Sistemas personalizados para automação de processos, gestão empresarial e integração de sistemas.',
    icon: Settings,
    basePrice: 10000
  }
];

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = React.useState(1);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();

  const resetAndClose = () => {
    setStep(1);
    setSelectedServices([]);
    setIsSubmitted(false);
    onClose();
  };

  const handleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateEstimate = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', { ...data, services: selectedServices });
    setIsSubmitted(true);
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold">
                {isSubmitted ? "Solicitação Enviada!" : `Passo ${step} de 3`}
              </div>
              {!isSubmitted && (
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className={`h-2 w-8 rounded-full ${
                        i <= step ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            <button 
              onClick={resetAndClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Solicitação Enviada com Sucesso!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Entraremos em contato em breve com um orçamento detalhado. Obrigado por escolher a Daluthi!
              </p>
              <button
                onClick={resetAndClose}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-bold mb-2">Qual serviço você precisa?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Selecione um ou mais serviços que deseja contratar.
                  </p>
                  <div className="grid gap-4">
                    {services.map(service => {
                      const Icon = service.icon;
                      const isSelected = selectedServices.includes(service.id);
                      
                      return (
                        <div
                          key={service.id}
                          onClick={() => handleServiceSelection(service.id)}
                          className={`
                            p-4 rounded-lg border-2 cursor-pointer transition-all
                            ${isSelected 
                              ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' 
                              : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                            }
                          `}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`
                              p-2 rounded-lg
                              ${isSelected ? 'text-primary-600 bg-primary-100 dark:text-primary-400 dark:bg-primary-900/40' : 'text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700'}
                            `}>
                              <Icon size={24} />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{service.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-bold mb-2">Conte mais sobre o seu projeto</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Preencha os campos abaixo para que possamos entender melhor suas necessidades.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nome Completo *</label>
                      <input
                        type="text"
                        {...register('name', { required: 'Nome é obrigatório' })}
                        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">E-mail *</label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'E-mail é obrigatório',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido'
                          }
                        })}
                        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Telefone *</label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Telefone é obrigatório' })}
                        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Empresa (opcional)</label>
                      <input
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Descrição do Projeto *</label>
                      <textarea
                        {...register('description', { required: 'Descrição é obrigatória' })}
                        rows={4}
                        placeholder="Descreva o seu projeto, objetivos, prazos e qualquer informação relevante."
                        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Anexar Arquivos (opcional)</label>
                      <div className="border-2 border-dashed rounded-lg p-4 text-center">
                        <Upload className="mx-auto mb-2 text-gray-400" />
                        <input
                          type="file"
                          multiple
                          {...register('files')}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer text-primary-600 hover:text-primary-700 dark:text-primary-400"
                        >
                          Clique para fazer upload
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Máximo 10MB, formatos: PDF, JPG, PNG
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-bold mb-2">Prévia do Orçamento</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Com base nas informações fornecidas, aqui está uma estimativa inicial do valor do projeto.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                        R$ {calculateEstimate().toLocaleString('pt-BR')}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Valor estimado inicial
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Serviços Selecionados:</h4>
                        <ul className="space-y-2">
                          {selectedServices.map(serviceId => {
                            const service = services.find(s => s.id === serviceId);
                            return (
                              <li key={serviceId} className="flex items-center gap-2">
                                <Check size={16} className="text-green-500" />
                                <span>{service?.title}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Prazo Estimado:</h4>
                        <p>8 a 12 semanas</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Este valor é uma estimativa inicial. Um orçamento detalhado será enviado após a análise do seu projeto.
                  </p>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Voltar
                  </button>
                )}
                {step < 3 && selectedServices.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="ml-auto bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Próximo
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    className="ml-auto bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Solicitar Orçamento
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}