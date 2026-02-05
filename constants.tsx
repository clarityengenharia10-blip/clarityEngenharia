import React from 'react';
import { Product, Service, BlogPost, Brand, Client, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'titan-500kva',
    name: 'No-break Titan 500kVA',
    category: 'ups',
    series: 'Série Clarity Pro',
    description: 'Garantindo continuidade para sistemas críticos com arquiteturas de UPS redundantes e de alta performance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'Modular',
    specs: ['Saída Trifásica', 'Suporte Interno VRLA'],
    powerRange: '500kVA',
    brand: 'Clarity Premium',
    detailedSpecs: {
      'Topologia': 'Online Dupla Conversão',
      'Potência': '500 kVA / 450 kW',
      'Tensão de Entrada': '380V Trifásico',
      'Tensão de Saída': '380V Trifásico',
      'Fator de Potência': '0.9',
      'Frequência': '50/60 Hz (Auto-sensing)',
      'Eficiência': '> 95% em modo online',
      'Dimensões (AxLxP)': '2000 x 800 x 800 mm',
      'Peso': '450 kg'
    },
    docs: [
      { name: 'Ficha Técnica', url: '#', type: 'datasheet' },
      { name: 'Manual do Usuário', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'magno-g3',
    name: 'Estabilizador Magno G3',
    category: 'stabilizers',
    series: 'Linha SteadyPower',
    description: 'Proteção superior para equipamentos contra flutuações de tensão e surtos de alta frequência.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB2yfSmS0fFuc0h8G-fmbOZTtM9tEa_Ay4hvCUdFmzC42oi1ulj9ZRWtysTxEA9VjjIc5FF4cy8zARisF5Myytrh0KZvw606RGFJClCX1jP0x6HNQFLAQ_YtV9kmVGlzG0E6fZCMvtAlicnt_rQ87h8mQZWuxBt34IPe4pdoCVXFRArCoz0gD750ep1RFHmvrENnYApe9RN3yNhGboGR0p-uCkt-2EsBpsMInqYuj1Cj7Gtrh-EM5w-NsGOdC1LBaaENjLKuKFKtPz',
    badge: 'Industrial',
    specs: ['Proteção de Alta Tensão', 'Tempo de Resposta 0.5ms'],
    brand: 'NHS',
    detailedSpecs: {
      'Potência': '3000 VA',
      'Tensão Nominal': '220V',
      'Faixa de Regulação': '± 15%',
      'Tempo de Resposta': '< 4ms',
      'Tomadas': '4 padrão NBR 14136',
      'Proteção': 'Sub/Sobretensão e surtos',
      'Peso': '15 kg',
      'Dimensões': '250 x 150 x 300 mm'
    },
    docs: [
      { name: 'Datasheet Magno G3', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'lithium-bank',
    name: 'Banco Lithium-Core',
    category: 'battery_modules',
    series: 'EnergyStore XL',
    description: 'Sistemas confiáveis de armazenamento de energia e monitoramento de longevidade para missões críticas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdmQRD2-KZmNRWYE5uT1T1WB701KztyJxsIG4OqyNL7WFdJQqLA-pt-M4UcxqDdUA6nzd9UMLw2GMQtk1TF-Zf-UK47BbGLKcvxyITStbTvW6tpLF7Ndqqun8KfY-FCKnjvMxcNJpcL1AoB1dQlyNpV_qocfexfX8ALYnygx0LU2BQsz-3aU5dyIPRoNOC1LrD6i7kflWOdb5MiwogaaI5jkrtXfmPNHQMOqnoy0j_r-7qBhD-wVlggpcqRXUsgY8pCTdQDhAdW8ra',
    badge: 'Armazenamento',
    specs: ['Tecnologia LiFePO4', 'Vida Útil de 10 Anos'],
    brand: 'Vertiv',
    detailedSpecs: {
      'Tecnologia': 'Lítio Ferro Fosfato (LiFePO4)',
      'Capacidade Nominal': '100Ah',
      'Tensão Nominal': '48V',
      'Ciclos de Vida': '> 4000 a 80% DoD',
      'Comunicação': 'RS485 / CAN',
      'Peso': '42 kg',
      'Dimensões': '442 x 130 x 400 mm (Rack 3U)'
    },
    docs: [
      { name: 'Especificações Técnicas', url: '#', type: 'datasheet' },
      { name: 'Guia de Instalação', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'netpower-30kva',
    name: 'NetPower 30kVA',
    category: 'ups',
    series: 'DataCenter Core',
    description: 'Unidade UPS compacta para rack, ideal para ambientes de edge computing de alta densidade.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ',
    badge: 'Rack Mount',
    specs: ['Monitoramento Cloud', 'Formato 2U'],
    brand: 'Delta',
    detailedSpecs: {
      'Potência': '30 kVA',
      'Formato': 'Rack Mount 19"',
      'Topologia': 'Online Dupla Conversão',
      'Eficiência': 'Até 96%',
      'Tensão de Bateria': '240V DC',
      'Interface': 'LCD Touchscreen',
      'Peso': '35 kg'
    },
    docs: [
      { name: 'Brochura NetPower', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'isolation-trans',
    name: 'Transformador Isolador',
    category: 'stabilizers',
    series: 'Grid Armor',
    description: 'Transformador robusto para isolação galvânica e supressão de harmônicas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA85nsNiZVeSThODCrHSp1t1E9NdWJOdkEF9WOKJUB6_fQfP6hictZAHGeDhSB8elS0SWTW3xXQ7UywbYi1v9p8GRBSNX3YUmeyOomFpMoZusr0HrKc_e3Oy3LukAfolthtur92xkEkR3CnC_ivcXVDkUk_Ns0-Aqdx1j0k7BXAPYV1KDX4gWZFft6r2Pr2F6irq4Cv_t1YUION6d_gBNTQh5Sp_Df_F_HbKLIN-csMx9WkXKOapt6VDwvrSedNoyA7eOIncUFfwVbV',
    specs: ['Supressão de Harmônicas', 'Certificação NEMA 3R'],
    brand: 'Clarity',
    detailedSpecs: {
      'Potência': '10 kVA a 300 kVA',
      'Classe de Isolação': '1.2 kV / 60 Hz',
      'Grau de Proteção': 'IP21 ou IP54',
      'Refrigeração': 'Ar natural ou forçada',
      'Material do Enrolamento': 'Cobre ou Alumínio',
      'Fator K': 'K1, K4, K13, K20'
    },
    docs: [
      { name: 'Catálogo de Transformadores', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'bms-hub',
    name: 'Hub de Gestão BMS',
    category: 'monitoring',
    series: 'SmartMonitor',
    description: 'Sistema técnico de monitoramento de baterias com telemetria em tempo real.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacXG_l_OIIhxcMFwFnCfXYE6B3wI4IH2PJ_xVQPB7JorCFjdwDjo8D8NPbHaQeMtu5HCTSbfwYVIjbsVVAAKppmUzrqYGi_eCYUBSxstIKrPxI3jgv1vlCrjf3zxMw1ASpDXtvpmvj-KGCOaCZ8ngyjm2vVHzU5ZDl95ZqCMb-ZLHsvdKJ6rubRmAoFs2UmJrDLvcbj5knP8ugs2UrbSArK8PcjjyrtwnwN6DwWsxwakoPIC1QFMksoNaZIfS6m7PV8k-6b2e6ARC',
    badge: 'Novo',
    specs: ['Manutenção Preditiva', 'Telemetria em Tempo Real'],
    brand: 'Clarity',
    detailedSpecs: {
      'Monitoramento': 'Tensão, Corrente, Temperatura e Impedância',
      'Comunicação': 'Ethernet TCP/IP, Modbus',
      'Sensores': 'Até 256 células por string',
      'Armazenamento': 'Logs locais e nuvem',
      'Alimentação': '12V DC ou PoE',
      'Compatibilidade': 'VRLA, Ventilada, NiCd, Lítio'
    },
    docs: [
      { name: 'Manual de Operação', url: '#', type: 'manual' },
      { name: 'Overview do Sistema', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'card-ap9635',
    name: 'Cartão AP9635 de Gerenciamento',
    category: 'accessories',
    series: 'APC Accessories',
    description: 'Cartão de gerenciamento de rede 2 AP9635 (NMC2) para monitoramento remoto seguro e eficiente.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'Rede',
    specs: ['Monitoramento Remoto', 'Compatível com NMC2'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Protocolos': 'HTTP, HTTPS, SNMP, SMTP, Telnet, SSH',
      'Portas': '1x RJ45 10/100',
      'Sensores Suportados': 'Temperatura, Umidade (AP9335T)',
      'Compatibilidade': 'Smart-UPS, Symmetra',
      'Dimensões': '38 x 121 x 114 mm',
      'Peso': '0.08 kg'
    },
    docs: [
      { name: 'Manual de Instalação (EN)', url: '#', type: 'manual' },
      { name: 'Compatibilidade de Firmware', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'card-ap9630',
    name: 'Cartão AP9630 de Gerenciamento',
    category: 'accessories',
    series: 'APC Accessories',
    description: 'Cartão de Gerenciamento de rede APC AP9630 para no-breaks UPS com suporte a protocolos padrão.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['Protocolos SNMP', 'Fácil Integração'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Protocolos': 'SNMP v1/v3, HTTP',
      'Conector': 'SmartSlot',
      'Segurança': 'Criptografia MD5/SHA',
      'Acesso Remoto': 'Sim, via Web UI',
      'Peso': '0.09 kg'
    },
    docs: [
      { name: 'Guia Rápido', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'acc-ap9810',
    name: 'Acessório de E/S AP9810',
    category: 'accessories',
    series: 'APC Accessories',
    description: 'Acessório de E/S de contato seco APC AP9810 para monitoramento ambiental preciso.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['Contato Seco', 'Monitoramento Ambiental'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Entradas': '2x Contato Seco',
      'Saídas': '1x Relé de Saída (12V/24V)',
      'Compatibilidade': 'Cartões AP9631, AP9635',
      'Aplicação': 'Monitoramento de temperatura, porta, fumaça',
      'Peso': '0.15 kg'
    },
    docs: [
      { name: 'Manual de Instalação e Configuração', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'ats-ap4423',
    name: 'Sistema ATS para Rack AP4423',
    category: 'accessories',
    series: 'APC Transfer Switch',
    description: 'Sistema ATS para rack APC AP4423 230 V, 16 A, com entrada C20 para redundância de energia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ',
    badge: 'ATS',
    specs: ['230V 16A', 'Entrada C20'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Tensão Nominal': '230V',
      'Corrente Máxima': '16A',
      'Conexões de Entrada': '2x IEC-320 C20',
      'Conexões de Saída': '8x IEC-320 C13, 1x IEC-320 C19',
      'Tempo de Transferência': '< 10ms',
      'Formato': 'Rack 1U',
      'Peso': '3.9 kg'
    },
    docs: [
      { name: 'Manual do Usuário ATS', url: '#', type: 'manual' },
      { name: 'Desenho Técnico (CAD)', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'ats-ap4450',
    name: 'Sistema ATS para Rack AP4450',
    category: 'accessories',
    series: 'APC Transfer Switch',
    description: 'Sistema ATS para rack APC AP4450, 100/120 V, 15 A, ideal para aplicações críticas de baixa tensão.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ',
    specs: ['100/120V 15A', 'Entrada 5-15P'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Tensão Nominal': '100V / 120V',
      'Corrente Máxima': '15A',
      'Conexões de Entrada': '2x NEMA 5-15P',
      'Conexões de Saída': '10x NEMA 5-15R',
      'Tempo de Transferência': '< 10ms',
      'Formato': 'Rack 1U',
      'Peso': '4.2 kg'
    },
    docs: [
      { name: 'Manual ATS AP4450', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'rack-ar3100',
    name: 'Rack NetShelter SX AR3100',
    category: 'accessories',
    series: 'NetShelter SX',
    description: 'Gabinete para servidores APC NetShelter SX AR3100 42 U, 600mm x 1070mm, otimizado para refrigeração.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ',
    badge: 'Rack 42U',
    specs: ['42U Altura', '600mm Largura'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Altura': '42U (1991mm)',
      'Largura': '600 mm',
      'Profundidade': '1070 mm',
      'Carga Estática': '1360 kg',
      'Carga Dinâmica': '1022 kg',
      'Peso': '125 kg',
      'Cor': 'Preto',
      'Padrão': 'EIA-310-D'
    },
    docs: [
      { name: 'Guia de Montagem', url: '#', type: 'manual' },
      { name: 'Especificações NetShelter', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'csb-gp1272',
    name: 'Bateria VRLA CSB 7Ah',
    category: 'batteries',
    series: 'CSB GP Series',
    description: 'Bateria selada VRLA CSB 12V 7Ah GP1272, ideal para no-breaks e sistemas de segurança.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'VRLA',
    specs: ['12V 7Ah', 'Vida Útil estendida'],
    brand: 'Eaton',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade (20h)': '7.2 Ah',
      'Tecnologia': 'VRLA AGM',
      'Terminal': 'F1 / F2 (Faston)',
      'Vida Útil (Float)': '3 a 5 anos',
      'Dimensões (AxLxP)': '94 x 151 x 65 mm',
      'Peso Aproximado': '2.4 kg'
    },
    docs: [
      { name: 'Datasheet CSB GP1272', url: '#', type: 'datasheet' },
      { name: 'Manual de Segurança', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'csb-gp12170',
    name: 'Bateria VRLA CSB 17Ah',
    category: 'batteries',
    series: 'CSB GP Series',
    description: 'Bateria VRLA CSB 17Ah 12V GP12170 para aplicações de alta descarga.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 17Ah', 'Alta Confiabilidade'],
    brand: 'Eaton',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade (20h)': '17 Ah',
      'Tecnologia': 'VRLA AGM',
      'Corrente Máx. Descarga': '230A (5seg)',
      'Terminal': 'Parafuso M5',
      'Dimensões (AxLxP)': '167 x 181 x 77 mm',
      'Peso Aproximado': '5.5 kg'
    },
    docs: [
      { name: 'Datasheet CSB GP12170', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'freedom-df500',
    name: 'Bateria Estacionária Freedom DF500',
    category: 'batteries',
    series: 'Freedom Estacionária',
    description: 'Bateria estacionária FREEDOM DF500 36Ah/40Ah para energia solar e backup.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'Estacionária',
    specs: ['36Ah/40Ah', 'Livre de Manutenção'],
    brand: 'SMS Legrand',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade C10': '36 Ah',
      'Capacidade C20': '40 Ah',
      'Capacidade C100': '45 Ah',
      'Dimensões': '175 x 175 x 210 mm',
      'Peso': '9.8 kg',
      'Aplicações': 'Nobreak, PABX, Alarmes, Solar'
    },
    docs: [
      { name: 'Ficha Técnica Freedom', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'freedom-df1000',
    name: 'Bateria Estacionária Freedom DF1000',
    category: 'batteries',
    series: 'Freedom Estacionária',
    description: 'Bateria estacionária FREEDOM DF1000 60Ah/70Ah, robustez para sistemas críticos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['60Ah/70Ah', 'Tecnologia PowerFrame'],
    brand: 'SMS Legrand',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade C10': '60 Ah',
      'Capacidade C20': '70 Ah',
      'Capacidade C100': '76 Ah',
      'Dimensões': '175 x 175 x 244 mm',
      'Peso': '17.5 kg',
      'Tecnologia': 'Grade PowerFrame'
    },
    docs: [
      { name: 'Ficha Técnica DF1000', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'freedom-df2000',
    name: 'Bateria Estacionária Freedom DF2000',
    category: 'batteries',
    series: 'Freedom Estacionária',
    description: 'Bateria estacionária de alta capacidade FREEDOM DF2000 para longos períodos de autonomia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['105Ah/115Ah', 'Alta Durabilidade'],
    brand: 'SMS Legrand',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade C10': '105 Ah',
      'Capacidade C20': '115 Ah',
      'Capacidade C100': '124 Ah',
      'Dimensões': '240 x 175 x 330 mm',
      'Peso': '28.5 kg',
      'Vida Útil Projetada': '4 anos'
    },
    docs: [
      { name: 'Datasheet Global Freedom', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'moura-12v-7ah',
    name: 'Bateria VRLA Moura 7Ah',
    category: 'batteries',
    series: 'Moura VRLA',
    description: 'Bateria Moura 12V 7Ah para alarmes e no-breaks residenciais.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 7Ah', 'Qualidade Moura'],
    brand: 'Intelbras',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade': '7 Ah',
      'Carga em Flutuação': '13.5V ~ 13.8V',
      'Carga Cíclica': '14.4V ~ 14.8V',
      'Peso': '2.3 kg',
      'Dimensões': '94 x 151 x 65 mm'
    },
    docs: [
      { name: 'Folder Moura VRLA', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'moura-12v-18ah',
    name: 'Bateria VRLA Moura 18Ah',
    category: 'batteries',
    series: 'Moura VRLA',
    description: 'Bateria Moura 12V 18Ah para sistemas de UPS de médio porte.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 18Ah', 'Máxima Segurança'],
    brand: 'Intelbras',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade': '18 Ah',
      'Tecnologia': 'VRLA AGM',
      'Conexão': 'Terminal Parafuso',
      'Peso': '5.5 kg',
      'Dimensões': '167 x 181 x 77 mm'
    },
    docs: [
      { name: 'Datasheet Moura 18Ah', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'duracell-12te60',
    name: 'Bateria Estacionária Duracell 12TE60',
    category: 'batteries',
    series: 'Duracell Estacionária',
    description: 'Bateria estacionária Duracell 12TE60 12V/60Ah, energia premium para seu negócio.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'Premium',
    specs: ['60Ah', 'Garantia Estendida'],
    brand: 'Sirius',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade Nominal': '60 Ah',
      'CCA': '480 A',
      'Reserva de Capacidade': '100 min',
      'Peso': '14.8 kg',
      'Dimensões': '244 x 175 x 175 mm'
    },
    docs: [
      { name: 'Especificações Técnicas', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'getpower-gpk12-7',
    name: 'Bateria VRLA GetPower 7Ah',
    category: 'batteries',
    series: 'GetPower VRLA',
    description: 'Bateria VRLA GetPower 07Ah 12V Selada, custo-benefício para proteção básica.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 7Ah', 'Custo-Benfício'],
    brand: 'Sirius',
    detailedSpecs: {
      'Tensão Nominal': '12V',
      'Capacidade': '7 Ah',
      'Tipo': 'Selada VRLA',
      'Peso': '2.1 kg',
      'Dimensões': '151 x 65 x 95 mm'
    },
    docs: [
      { name: 'Ficha Técnica GetPower', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'stab-cubic-300',
    name: 'Estabilizador 300 W',
    category: 'stabilizers',
    series: 'APC Microsol CUBIC',
    description: 'Estabilizador 300 W APC Microsol CUBIC300-BR 115V para proteção de eletrônicos domésticos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: '115V',
    specs: ['300W', '4 Tomadas'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência Nominal': '300W',
      'Tensão Entrada': '115V',
      'Tensão Saída': '115V',
      'Tomadas': '4 Tomadas NBR 14136',
      'Proteção': 'Fusível',
      'Peso': '1.8 kg'
    },
    docs: [
      { name: 'Manual Microsol CUBIC', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'stab-cubic-300bi',
    name: 'Estabilizador 300 W Bivolt',
    category: 'stabilizers',
    series: 'APC Microsol CUBIC',
    description: 'Estabilizador 300 W APC Microsol CUBIC300BI-BR Bivolt/115 automatico.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Bivolt',
    specs: ['300W', 'Entrada Bivolt'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência Nominal': '300W',
      'Tensão Entrada': '115V / 220V',
      'Tensão Saída': '115V',
      'Tomadas': '4 Tomadas',
      'Peso': '2.1 kg'
    },
    docs: [
      { name: 'Manual CUBIC Bivolt', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'stab-cubic-500',
    name: 'Estabilizador 500 W',
    category: 'stabilizers',
    series: 'APC Microsol CUBIC',
    description: 'Estabilizador 500 W APC Microsol CUBIC500-BR 115V para maior capacidade.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['500W', 'Design Compacto'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência Nominal': '500W',
      'Tensão Entrada': '115V',
      'Tensão Saída': '115V',
      'Tomadas': '4 Tomadas',
      'Proteção': 'Disjuntor rearmável',
      'Peso': '2.4 kg'
    },
    docs: [
      { name: 'Manual CUBIC 500', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'stab-hexus-500',
    name: 'Estabilizador 500 W Hexus',
    category: 'stabilizers',
    series: 'APC Microsol HEXUS',
    description: 'Estabilizador 500 W APC Microsol HEXUS500BI, proteção ideal para computadores.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Hexus',
    specs: ['500W', 'Microprocessado'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '500W / 500VA',
      'Tecnologia': 'Microprocessado RISC',
      'Tensão Entrada': 'Bivolt Automático',
      'Tensão Saída': '115V',
      'Tomadas': '6 Tomadas',
      'Proteção': 'Linha telefônica / Internet',
      'Peso': '3.2 kg'
    },
    docs: [
      { name: 'Ficha Técnica HEXUS', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'stab-sol-1000',
    name: 'Estabilizador 1000 W',
    category: 'stabilizers',
    series: 'APC Sol',
    description: 'Estabilizador 1000 W APC Sol SOL1000G4BI-BR Bivolt/115 para escritórios.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['1000W', '8 Tomadas'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '1000W',
      'Entrada': 'Bivolt',
      'Saída': '115V',
      'Tomadas': '8 Tomadas NBR 14136',
      'Proteção': 'Filtro de Linha integrado',
      'Peso': '5.6 kg'
    },
    docs: [
      { name: 'Manual do Usuário SOL', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'stab-sol-1500',
    name: 'Estabilizador 1500 W',
    category: 'stabilizers',
    series: 'APC Sol',
    description: 'Estabilizador 1500 W APC Microsol SOL1500BI para equipamentos de alto consumo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: '1500W',
    specs: ['1500W', 'Proteção Fax/Modem'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '1500W',
      'Tensão Entrada': 'Bivolt',
      'Tensão Saída': '115V',
      'Sinalização': 'LEDs indicativos',
      'Peso': '6.8 kg',
      'Dimensões': '180 x 140 x 300 mm'
    },
    docs: [
      { name: 'Especificações SOL 1500', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'stab-sol-2000',
    name: 'Estabilizador 2000 W',
    category: 'stabilizers',
    series: 'APC Sol',
    description: 'Estabilizador 2000 W APC Microsol SOL2000BI, potência elevada para servidores.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['2000W', 'Gerenciamento Inteligente'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '2000W',
      'Entrada': 'Bivolt Automático',
      'Saída': '115V',
      'Cabo': '2.5mm² com plugue 20A',
      'Tomadas': '8 Tomadas',
      'Peso': '7.5 kg'
    },
    docs: [
      { name: 'Manual SOL 2000', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'stab-fridge-2000',
    name: 'Estabilizador 2000 W Geladeira',
    category: 'stabilizers',
    series: 'APC Fridge Plus',
    description: 'Estabilizador 2000 W APC Fridge Plus FR2000PI-BR ideal para eletrodomésticos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Eletro',
    specs: ['2000W', 'Delay de Partida'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Aplicação': 'Geladeiras, Freezers, Lavadoras',
      'Potência': '2000W (pico motor)',
      'Recurso': 'Timer de Segurança (Delay)',
      'Tensão Entrada': 'Bivolt',
      'Tensão Saída': '115V',
      'Peso': '4.5 kg'
    },
    docs: [
      { name: 'Guia Fridge Plus', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'schneider-5kva',
    name: 'Estabilizador 5 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 5 KVA SCHNEIDER Tempo, robustez industrial.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Industrial',
    specs: ['5 KVA', 'Alta Precisão'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '5 kVA',
      'Fases': 'Monofásico',
      'Regulação Estática': '± 1%',
      'Frequência': '60 Hz',
      'Display': 'Digital Microprocessado',
      'Peso': '35 kg'
    },
    docs: [
      { name: 'Catálogo Industrial', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'schneider-7.5kva',
    name: 'Estabilizador 7.5 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 7.5 KVA SCHNEIDER Tempo para cargas críticas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['7.5 KVA', 'Isolação Opcional'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '7.5 kVA',
      'Entrada': '220V',
      'Saída': '220V / 110V',
      'Transformador': 'Isolador (Opcional)',
      'Peso': '45 kg',
      'Dimensões': '400 x 300 x 500 mm'
    },
    docs: [
      { name: 'Manual Técnico 7.5kVA', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'schneider-10kva',
    name: 'Estabilizador 10 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 10 KVA SCHNEIDER Tempo, proteção máxima para grandes sistemas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['10 KVA', 'Monitoramento Digital'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '10 kVA',
      'Tecnologia': 'Tap-Switching (Tiristorizado)',
      'Distorção Harmônica': '< 3%',
      'Eficiência': '> 97%',
      'Peso': '65 kg'
    },
    docs: [
      { name: 'Datasheet Estabilizador 10kVA', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'schneider-15kva',
    name: 'Estabilizador 15 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 15 KVA SCHNEIDER Tempo para infraestrutura corporativa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['15 KVA', 'Trifásico'],
    brand: 'APC Schneider',
    detailedSpecs: {
      'Potência': '15 kVA',
      'Entrada': '380V / 220V (Trifásico)',
      'Regulação': 'Independente por fase',
      'Proteção': 'Disjuntor Geral Tripolar e Bypass',
      'Peso': '90 kg',
      'Dimensões': '800 x 600 x 600 mm'
    },
    docs: [
      { name: 'Manual de Serviço 15kVA', url: '#', type: 'manual' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'manutencao-preventiva',
    title: 'Manutenção Preventiva de Nobreaks',
    icon: 'health_and_safety',
    description: 'Garanta a confiabilidade do seu sistema de energia com inspeções periódicas, limpeza e testes preventivos.',
    details: [
      'Inspeção visual e limpeza técnica',
      'Testes de baterias e capacitores',
      'Verificação de conexões e torque',
      'Relatório técnico detalhado',
      'Minimização de riscos de paradas inesperadas'
    ]
  },
  {
    id: 'manutencao-corretiva',
    title: 'Manutenção Corretiva de Nobreaks',
    icon: 'build_circle',
    description: 'Atendimento emergencial e reparo especializado para restabelecer o funcionamento do seu nobreak rapidamente.',
    details: [
      'Diagnóstico preciso de falhas',
      'Substituição de componentes danificados',
      'Testes de carga e funcionamento',
      'Atendimento ágil para minimizar downtime',
      'Garantia nos serviços realizados'
    ]
  },
  {
    id: 'locacao-nobreak',
    title: 'Locação de Nobreak',
    icon: 'inventory_2',
    description: 'Soluções flexíveis de locação de nobreaks para demandas temporárias, eventos ou backup de emergência.',
    details: [
      'Equipamentos de diversas potências',
      'Instalação e desinstalação inclusas',
      'Manutenção total durante o período',
      'Substituição imediata em caso de falha',
      'Contratos diários, mensais ou anuais'
    ]
  },
  {
    id: 'contrato-manutencao',
    title: 'Contrato de Manutenção de Nobreak',
    icon: 'assignment_turned_in',
    description: 'Tenha tranquilidade total com nossos contratos de manutenção que garantem prioridade e SLA definido.',
    details: [
      'Atendimento prioritário 24/7',
      'Visitas preventivas programadas',
      'Descontos em peças de reposição',
      'Back-up de equipamentos (opcional)',
      'Gestão completa do ciclo de vida do ativo'
    ]
  },
  {
    id: 'ativacao-startup',
    title: 'Ativação (Startup) de Nobreaks',
    icon: 'power_settings_new',
    description: 'Partida técnica certificada para garantir que seu equipamento novo seja instalado conforme as normas do fabricante.',
    details: [
      'Verificação da infraestrutura elétrica',
      'Configuração de parâmetros operacionais',
      'Treinamento operacional básico',
      'Validação da garantia do fabricante',
      'Emissão de relatório de start-up'
    ]
  },
  {
    id: 'calibracao-parametrizacao',
    title: 'Calibração e Parametrização',
    icon: 'tune',
    description: 'Ajuste fino dos parâmetros do seu nobreak para operar com máxima eficiência e compatibilidade com sua rede.',
    details: [
      'Ajuste de tensões de carga e flutuação',
      'Configuração de limites de transferência',
      'Atualização de firmware',
      'Calibração de sensores de medição',
      'Otimização para bancos de baterias específicos'
    ]
  },
  {
    id: 'troca-baterias',
    title: 'Troca de Baterias de Nobreak',
    icon: 'battery_charging_full',
    description: 'Substituição profissional de bancos de baterias com descarte ecológico e certificação.',
    details: [
      'Fornecimento de baterias homologadas',
      'Instalação com segurança e técnica',
      'Equalização do banco de baterias',
      'Teste de autonomia real',
      'Certificado de destinação ambiental (Logística Reversa)'
    ]
  },
  {
    id: 'consultoria-tecnica',
    title: 'Consultoria Técnica Especializada',
    icon: 'engineering',
    description: 'Análise aprofundada da sua infraestrutura elétrica para propor as melhores soluções de proteção de energia.',
    details: [
      'Estudo de qualidade de energia',
      'Dimensionamento de carga atual e futura',
      'Projetos de infraestrutura elétrica para TI',
      'Análise de viabilidade técnica e econômica',
      'Especificação técnica de equipamentos'
    ]
  }
];

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI9tvjTyxE2P2tJ5hvscew6yRYq4HIk6Wuej_SvSJcHLToj5oz-Sp0VLVgyG2XiedCB-sR62lmcR-EKUGKUJ9sN3NNKWhJDOCyJTnC_jCb-XRFE9SNUzWROmKig6lyD5LCoY2wtJLUZbG5M6ecMkewivnaL4ku0JPFK3TpBxPOO6TvwbdbZG6IUz-k7FlzsftBsFrxpEL6vd2suBQ78rb_UZ9V4wT3ZkEr3F5CVzUftUdCKlv6gkbRVp--uvkqayFOCYRFMyEttdOD',
  engineer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrrAN7_WtsqifEHjYNd1cpkyA2nAMvGjR7ZHxhqB_b7VygngJRPGhVcz6qLUpcPoxq_d9G-4Gqce6sS8j5KnOxcPr_05hfCyMIe0p3ppTSot21bobodwbRLWM3BvLLL3J9fYW0DL-T5cjI7DwNTYKvnd9c-Tj6kui--6JFqVDVF6VdPRmfnkPrIah4w9lqkGpmFXEGqh9y__Qrkrqs4SQOS588Ls6aDQxmW_xjy9bzKo4YJCuhXUOZ8qqixyCPXrOgrAqU0rqObZO3',
  substation: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB14pl16jH11L_zRMO8B3XdWAlMWvO-ARh2bTbEJ83kHy4fWfPoXIWnMJ3Lv9q0wch48g3U8EmbaN4zzEQc-ryJGyR_XvaoAyrT0_ZNYBGxssPgemToCCQo-MuIpuHObO01uZk76MzduJhTthZj70Oq2TExkAvibKQv1L18ksnMkPohsM6E1X5nDxDRtthBmVgbC53LqtGpn3ZiVQuj5IQ-dB-BBGYamXfV0DS64RB81mTI6kV2JElU5-oLS_566bo7wgB8ZtSWcJsf',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH'
};

export const BRANDS: Brand[] = [
  { name: 'Sirius', logo: '/brands/sirius.png' },
  { name: 'APC Schneider', logo: '/brands/apc.png' },
  { name: 'Eaton', logo: '/brands/eaton.png' },
  { name: 'Vertiv', logo: '/brands/vertiv.png' },
  { name: 'SMS Legrand', logo: '/brands/sms.png' },
  { name: 'Delta', logo: '/brands/delta.png' },
  { name: 'Intelbras', logo: '/brands/intelbras.png' },
  { name: 'NHS', logo: '/brands/nhs.png' }
];

export const CLIENTS: Client[] = [
  { name: 'Caloi', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Caloi_brand_logo.png' },
  { name: 'Cinemas Uniplex', logo: 'https://cinemasuniplex.com.br/img/logo.png' },
  { name: 'Banco BMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Logo_Banco_BMG.svg/2560px-Logo_Banco_BMG.svg.png' },
  { name: 'Dexco', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Dexco_logo.png' },
  { name: 'Unimed', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Unimed_Logo.svg/2560px-Unimed_Logo.svg.png' },
  { name: 'Alibra', logo: 'https://www.alibra.com.br/wp-content/themes/alibra/assets/images/logo.png' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Wilma Leite',
    text: 'A empresa é extremamente competente, com ótimos profissionais, super recomendo!',
    rating: 5,
    avatar: 'W'
  },
  {
    name: 'Manoel Lucas',
    text: 'Atendimento muito rápido e eficiente. Resolveram meu problema com agilidade.',
    rating: 5,
    avatar: 'M'
  },
  {
    name: 'Paula Zau',
    text: 'Excelentes profissionais, entrega rápida e ótimo custo benefício. Recomendo!',
    rating: 5,
    avatar: 'P'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'importancia-manutencao-preventiva',
    title: 'A Importância da Manutenção Preventiva em Nobreaks',
    excerpt: 'Descubra como evitar paradas inesperadas e garantir a longevidade dos seus equipamentos com rotinas adequadas.',
    content: `
      <h2>Por que a manutenção preventiva é crucial?</h2>
      <p>Nobreaks são a última linha de defesa contra falhas de energia. Quando a energia da concessionária falha, seu nobreak deve entrar em ação instantaneamente. Se ele falhar, o prejuízo pode ser incalculável.</p>
      <p>A manutenção preventiva permite identificar componentes desgastados, como baterias e capacitores, antes que eles causem uma falha crítica. Estudos mostram que mais de 50% das falhas em nobreaks são causadas por baterias em mau estado.</p>
      <h3>Benefícios principais:</h3>
      <ul>
        <li>Aumento da vida útil do equipamento</li>
        <li>Maior confiabilidade do sistema</li>
        <li>Previsibilidade de custos</li>
        <li>Minimização de tempo de inatividade (downtime)</li>
      </ul>
      <p>Na Clarity Engenharia, seguimos rigorosos protocolos para garantir que seu equipamento esteja sempre pronto para proteger sua operação.</p>
    `,
    date: '10 Fev 2024',
    author: 'Eng. Ricardo Silva',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop',
    category: 'Manutenção',
    readTime: '5 min'
  },
  {
    id: 'vida-util-baterias',
    title: 'Como Prolongar a Vida Útil das Baterias VRLA',
    excerpt: 'Dicas essenciais para maximizar a durabilidade e performance do banco de baterias do seu UPS.',
    content: `
      <h2>O coração do seu Nobreak</h2>
      <p>As baterias VRLA (Valve Regulated Lead Acid) são componentes sensíveis e essenciais. Sua durabilidade é fortemente influenciada por fatores ambientais e operacionais.</p>
      <h3>Fatores que degradam a bateria:</h3>
      <p>A temperatura é o inimigo número um. Para cada 8-10°C acima de 25°C, a vida útil da bateria cai pela metade. Manter o ambiente climatizado é fundamental.</p>
      <p>Além disso, ciclos profundos de descarga frequentes e sobrecarga também aceleram o envelhecimento químico das células.</p>
      <h3>Recomendações:</h3>
      <ul>
        <li>Mantenha a temperatura ambiente controlada (idealmente 25°C ou menos).</li>
        <li>Realize testes periódicos de condutância e impedância.</li>
        <li>Verifique o torque das conexões regularmente.</li>
      </ul>
    `,
    date: '22 Jan 2024',
    author: 'Equipe Técnica',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop',
    category: 'Baterias',
    readTime: '4 min'
  },
  {
    id: 'eficiencia-energetica',
    title: 'Eficiência Energética: Nobreaks Modulares',
    excerpt: 'Entenda como a tecnologia modular pode reduzir custos operacionais e flexibilizar o crescimento da sua infraestrutura.',
    content: `
      <h2>Escalabilidade e Economia</h2>
      <p>Nobreaks modulares representam a evolução da proteção de energia. Ao contrário dos sistemas monolíticos tradicionais, os modulares permitem adicionar potência conforme a necessidade da sua empresa cresce.</p>
      <h3>Vantagens da tecnologia modular:</h3>
      <p><strong>Redundância N+1:</strong> Você pode ter módulos extras que assumem a carga caso um falhe, sem interrupção.</p>
      <p><strong>Hot-Swap:</strong> Módulos podem ser trocados com o sistema ligado, facilitando a manutenção.</p>
      <p><strong>Eficiência:</strong> Operam com eficiência superior a 96%, reduzindo o desperdício de energia e o calor gerado, o que também diminui os custos com ar condicionado.</p>
      <p>Investir em tecnologia modular é investir em um futuro mais sustentável e econômico para seu Data Center.</p>
    `,
    date: '05 Jan 2024',
    author: 'Clarity Engenharia',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cd4?q=80&w=2671&auto=format&fit=crop',
    category: 'Tecnologia',
    readTime: '6 min'
  }
];
