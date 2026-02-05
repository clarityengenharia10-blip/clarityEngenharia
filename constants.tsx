
import React from 'react';
import { Product, Service } from './types';

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
    powerRange: '500kVA'
  },
  {
    id: 'magno-g3',
    name: 'Estabilizador Magno G3',
    category: 'stabilizers',
    series: 'Linha SteadyPower',
    description: 'Proteção superior para equipamentos contra flutuações de tensão e surtos de alta frequência.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB2yfSmS0fFuc0h8G-fmbOZTtM9tEa_Ay4hvCUdFmzC42oi1ulj9ZRWtysTxEA9VjjIc5FF4cy8zARisF5Myytrh0KZvw606RGFJClCX1jP0x6HNQFLAQ_YtV9kmVGlzG0E6fZCMvtAlicnt_rQ87h8mQZWuxBt34IPe4pdoCVXFRArCoz0gD750ep1RFHmvrENnYApe9RN3yNhGboGR0p-uCkt-2EsBpsMInqYuj1Cj7Gtrh-EM5w-NsGOdC1LBaaENjLKuKFKtPz',
    badge: 'Industrial',
    specs: ['Proteção de Alta Tensão', 'Tempo de Resposta 0.5ms']
  },
  {
    id: 'lithium-bank',
    name: 'Banco Lithium-Core',
    category: 'batteries',
    series: 'EnergyStore XL',
    description: 'Sistemas confiáveis de armazenamento de energia e monitoramento de longevidade para missões críticas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdmQRD2-KZmNRWYE5uT1T1WB701KztyJxsIG4OqyNL7WFdJQqLA-pt-M4UcxqDdUA6nzd9UMLw2GMQtk1TF-Zf-UK47BbGLKcvxyITStbTvW6tpLF7Ndqqun8KfY-FCKnjvMxcNJpcL1AoB1dQlyNpV_qocfexfX8ALYnygx0LU2BQsz-3aU5dyIPRoNOC1LrD6i7kflWOdb5MiwogaaI5jkrtXfmPNHQMOqnoy0j_r-7qBhD-wVlggpcqRXUsgY8pCTdQDhAdW8ra',
    badge: 'Armazenamento',
    specs: ['Tecnologia LiFePO4', 'Vida Útil de 10 Anos']
  },
  {
    id: 'netpower-30kva',
    name: 'NetPower 30kVA',
    category: 'ups',
    series: 'DataCenter Core',
    description: 'Unidade UPS compacta para rack, ideal para ambientes de edge computing de alta densidade.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ',
    badge: 'Rack Mount',
    specs: ['Monitoramento Cloud', 'Formato 2U']
  },
  {
    id: 'isolation-trans',
    name: 'Transformador Isolador',
    category: 'stabilizers',
    series: 'Grid Armor',
    description: 'Transformador robusto para isolação galvânica e supressão de harmônicas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA85nsNiZVeSThODCrHSp1t1E9NdWJOdkEF9WOKJUB6_fQfP6hictZAHGeDhSB8elS0SWTW3xXQ7UywbYi1v9p8GRBSNX3YUmeyOomFpMoZusr0HrKc_e3Oy3LukAfolthtur92xkEkR3CnC_ivcXVDkUk_Ns0-Aqdx1j0k7BXAPYV1KDX4gWZFft6r2Pr2F6irq4Cv_t1YUION6d_gBNTQh5Sp_Df_F_HbKLIN-csMx9WkXKOapt6VDwvrSedNoyA7eOIncUFfwVbV',
    specs: ['Supressão de Harmônicas', 'Certificação NEMA 3R']
  },
  {
    id: 'bms-hub',
    name: 'Hub de Gestão BMS',
    category: 'monitoring',
    series: 'SmartMonitor',
    description: 'Sistema técnico de monitoramento de baterias com telemetria em tempo real.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacXG_l_OIIhxcMFwFnCfXYE6B3wI4IH2PJ_xVQPB7JorCFjdwDjo8D8NPbHaQeMtu5HCTSbfwYVIjbsVVAAKppmUzrqYGi_eCYUBSxstIKrPxI3jgv1vlCrjf3zxMw1ASpDXtvpmvj-KGCOaCZ8ngyjm2vVHzU5ZDl95ZqCMb-ZLHsvdKJ6rubRmAoFs2UmJrDLvcbj5knP8ugs2UrbSArK8PcjjyrtwnwN6DwWsxwakoPIC1QFMksoNaZIfS6m7PV8k-6b2e6ARC',
    badge: 'Novo',
    specs: ['Manutenção Preditiva', 'Telemetria em Tempo Real']
  },
  {
    id: 'card-ap9635',
    name: 'Cartão AP9635 de Gerenciamento',
    category: 'accessories',
    series: 'APC Accessories',
    description: 'Cartão de gerenciamento de rede 2 AP9635 (NMC2) para monitoramento remoto seguro e eficiente.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos', // Placeholder recycled
    badge: 'Rede',
    specs: ['Monitoramento Remoto', 'Compatível com NMC2']
  },
  {
    id: 'card-ap9630',
    name: 'Cartão AP9630 de Gerenciamento',
    category: 'accessories',
    series: 'APC Accessories',
    description: 'Cartão de Gerenciamento de rede APC AP9630 para no-breaks UPS com suporte a protocolos padrão.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['Protocolos SNMP', 'Fácil Integração']
  },
  {
    id: 'acc-ap9810',
    name: 'Acessório de E/S AP9810',
    category: 'accessories',
    series: 'APC Accessories',
    description: 'Acessório de E/S de contato seco APC AP9810 para monitoramento ambiental preciso.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['Contato Seco', 'Monitoramento Ambiental']
  },
  {
    id: 'ats-ap4423',
    name: 'Sistema ATS para Rack AP4423',
    category: 'accessories',
    series: 'APC Transfer Switch',
    description: 'Sistema ATS para rack APC AP4423 230 V, 16 A, com entrada C20 para redundância de energia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ', // Recycled Rack image
    badge: 'ATS',
    specs: ['230V 16A', 'Entrada C20']
  },
  {
    id: 'ats-ap4450',
    name: 'Sistema ATS para Rack AP4450',
    category: 'accessories',
    series: 'APC Transfer Switch',
    description: 'Sistema ATS para rack APC AP4450, 100/120 V, 15 A, ideal para aplicações críticas de baixa tensão.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ',
    specs: ['100/120V 15A', 'Entrada 5-15P']
  },
  {
    id: 'rack-ar3100',
    name: 'Rack NetShelter SX AR3100',
    category: 'accessories',
    series: 'NetShelter SX',
    description: 'Gabinete para servidores APC NetShelter SX AR3100 42 U, 600mm x 1070mm, otimizado para refrigeração.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrvPAYFGHNuHcTmXhGp0iSTHa4B6j7dWrv1lIXi37e3y1KeLRQx4JEymqYc0x80zQsBsYqTv8z7FXVU-k_mzIMuaYd-502qW9Rkuxs3Rn-h8JBCsYAaXVjtZfg-qt3wQfX9ItYfWG4bfL-O0639uLArk2NnkFAExz2bOouNCfvtZ_T-n3NdBsXtYENzkjl38hDf8u1GRNnBGfev2Qev8uZXlscoiFam9uDqOKKDh-SdXjI7rPQPvqtxaoOMxo1-TcyJ6BxI6bfRPJ',
    badge: 'Rack 42U',
    specs: ['42U Altura', '600mm Largura']
  },
  // --- Baterias VRLA CSB ---
  {
    id: 'csb-gp1272',
    name: 'Bateria VRLA CSB 7Ah',
    category: 'batteries',
    series: 'CSB GP Series',
    description: 'Bateria selada VRLA CSB 12V 7Ah GP1272, ideal para no-breaks e sistemas de segurança.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'VRLA',
    specs: ['12V 7Ah', 'Vida Útil estendida']
  },
  {
    id: 'csb-gp12170',
    name: 'Bateria VRLA CSB 17Ah',
    category: 'batteries',
    series: 'CSB GP Series',
    description: 'Bateria VRLA CSB 17Ah 12V GP12170 para aplicações de alta descarga.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 17Ah', 'Alta Confiabilidade']
  },
  // --- Baterias Estacionárias Freedom ---
  {
    id: 'freedom-df500',
    name: 'Bateria Estacionária Freedom DF500',
    category: 'batteries',
    series: 'Freedom Estacionária',
    description: 'Bateria estacionária FREEDOM DF500 36Ah/40Ah para energia solar e backup.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'Estacionária',
    specs: ['36Ah/40Ah', 'Livre de Manutenção']
  },
  {
    id: 'freedom-df1000',
    name: 'Bateria Estacionária Freedom DF1000',
    category: 'batteries',
    series: 'Freedom Estacionária',
    description: 'Bateria estacionária FREEDOM DF1000 60Ah/70Ah, robustez para sistemas críticos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['60Ah/70Ah', 'Tecnologia PowerFrame']
  },
  {
    id: 'freedom-df2000',
    name: 'Bateria Estacionária Freedom DF2000',
    category: 'batteries',
    series: 'Freedom Estacionária',
    description: 'Bateria estacionária de alta capacidade FREEDOM DF2000 para longos períodos de autonomia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['105Ah/115Ah', 'Alta Durabilidade']
  },
  // --- Baterias VRLA Moura ---
  {
    id: 'moura-12v-7ah',
    name: 'Bateria VRLA Moura 7Ah',
    category: 'batteries',
    series: 'Moura VRLA',
    description: 'Bateria Moura 12V 7Ah para alarmes e no-breaks residenciais.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 7Ah', 'Qualidade Moura']
  },
  {
    id: 'moura-12v-18ah',
    name: 'Bateria VRLA Moura 18Ah',
    category: 'batteries',
    series: 'Moura VRLA',
    description: 'Bateria Moura 12V 18Ah para sistemas de UPS de médio porte.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 18Ah', 'Máxima Segurança']
  },
  // --- Baterias Duracell / Outras ---
  {
    id: 'duracell-12te60',
    name: 'Bateria Estacionária Duracell 12TE60',
    category: 'batteries',
    series: 'Duracell Estacionária',
    description: 'Bateria estacionária Duracell 12TE60 12V/60Ah, energia premium para seu negócio.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    badge: 'Premium',
    specs: ['60Ah', 'Garantia Estendida']
  },
  {
    id: 'getpower-gpk12-7',
    name: 'Bateria VRLA GetPower 7Ah',
    category: 'batteries',
    series: 'GetPower VRLA',
    description: 'Bateria VRLA GetPower 07Ah 12V Selada, custo-benefício para proteção básica.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2_tTZszIAOeMvzUSegxsihIFpVGpDk5H4FdOcI8mWlyagTgNT4tVENZPXclscv4X386b6V08kS1goicfTn4wi_HFVkG2z-lSpRgDRkUh3OzLXP8iuiB96f5nIRyNFiz2RIm1VIUfk3JyZ3WKLwOiA9Xbi40Q_ed8sR4cWideu3s1S0CaXSjPiJ8C0KJ3XJRQK15yiCVjql6I9jYbD1jLWBDwkGYepDgdW_sAOZAeiGtBu0S4roOyZTHkZNTymI9Jit-bD0wP8zos',
    specs: ['12V 7Ah', 'Custo-Benfício']
  },
  // --- Estabilizadores APC & Schneider ---
  {
    id: 'stab-cubic-300',
    name: 'Estabilizador 300 W',
    category: 'stabilizers',
    series: 'APC Microsol CUBIC',
    description: 'Estabilizador 300 W APC Microsol CUBIC300-BR 115V para proteção de eletrônicos domésticos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH', // Placeholder Map
    badge: '115V',
    specs: ['300W', '4 Tomadas']
  },
  {
    id: 'stab-cubic-300bi',
    name: 'Estabilizador 300 W Bivolt',
    category: 'stabilizers',
    series: 'APC Microsol CUBIC',
    description: 'Estabilizador 300 W APC Microsol CUBIC300BI-BR Bivolt/115 automatico.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Bivolt',
    specs: ['300W', 'Entrada Bivolt']
  },
  {
    id: 'stab-cubic-500',
    name: 'Estabilizador 500 W',
    category: 'stabilizers',
    series: 'APC Microsol CUBIC',
    description: 'Estabilizador 500 W APC Microsol CUBIC500-BR 115V para maior capacidade.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['500W', 'Design Compacto']
  },
  {
    id: 'stab-hexus-500',
    name: 'Estabilizador 500 W Hexus',
    category: 'stabilizers',
    series: 'APC Microsol HEXUS',
    description: 'Estabilizador 500 W APC Microsol HEXUS500BI, proteção ideal para computadores.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Hexus',
    specs: ['500W', 'Microprocessado']
  },
  {
    id: 'stab-sol-1000',
    name: 'Estabilizador 1000 W',
    category: 'stabilizers',
    series: 'APC Sol',
    description: 'Estabilizador 1000 W APC Sol SOL1000G4BI-BR Bivolt/115 para escritórios.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['1000W', '8 Tomadas']
  },
  {
    id: 'stab-sol-1500',
    name: 'Estabilizador 1500 W',
    category: 'stabilizers',
    series: 'APC Sol',
    description: 'Estabilizador 1500 W APC Microsol SOL1500BI para equipamentos de alto consumo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: '1500W',
    specs: ['1500W', 'Proteção Fax/Modem']
  },
  {
    id: 'stab-sol-2000',
    name: 'Estabilizador 2000 W',
    category: 'stabilizers',
    series: 'APC Sol',
    description: 'Estabilizador 2000 W APC Microsol SOL2000BI, potência elevada para servidores.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['2000W', 'Gerenciamento Inteligente']
  },
  {
    id: 'stab-fridge-2000',
    name: 'Estabilizador 2000 W Geladeira',
    category: 'stabilizers',
    series: 'APC Fridge Plus',
    description: 'Estabilizador 2000 W APC Fridge Plus FR2000PI-BR ideal para eletrodomésticos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Eletro',
    specs: ['2000W', 'Delay de Partida']
  },
  // --- Estabilizadores Schneider Tempo ---
  {
    id: 'schneider-5kva',
    name: 'Estabilizador 5 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 5 KVA SCHNEIDER Tempo, robustez industrial.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    badge: 'Industrial',
    specs: ['5 KVA', 'Alta Precisão']
  },
  {
    id: 'schneider-7.5kva',
    name: 'Estabilizador 7.5 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 7.5 KVA SCHNEIDER Tempo para cargas críticas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['7.5 KVA', 'Isolação Opcional']
  },
  {
    id: 'schneider-10kva',
    name: 'Estabilizador 10 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 10 KVA SCHNEIDER Tempo, proteção máxima para grandes sistemas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['10 KVA', 'Monitoramento Digital']
  },
  {
    id: 'schneider-15kva',
    name: 'Estabilizador 15 KVA',
    category: 'stabilizers',
    series: 'Schneider Tempo',
    description: 'Estabilizador 15 KVA SCHNEIDER Tempo para infraestrutura corporativa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH',
    specs: ['15 KVA', 'Trifásico']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'consultoria',
    title: 'Consultoria Técnica',
    icon: 'engineering',
    description: 'Análise detalhada e projetos personalizados para a segurança energética da sua empresa.',
    details: ['Projetos Elétricos', 'Eficiência Energética', 'Dimensionamento de Carga']
  },
  {
    id: 'locacao',
    title: 'Locação de Sistemas',
    icon: 'inventory_2',
    description: 'Soluções flexíveis de locação de nobreaks e infraestrutura para demandas temporárias ou fixas.',
    details: ['Contratos Fléxiveis', 'Manutenção Inclusa', 'Equipamentos de Última Geração']
  },
  {
    id: 'manutencao',
    title: 'Manutenção de Nobreak',
    icon: 'build',
    description: 'Serviços especializados de manutenção preventiva e corretiva para garantir operação contínua.',
    details: ['Atendimento 24/7', 'Peças Originais', 'Técnicos Certificados']
  }
];

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI9tvjTyxE2P2tJ5hvscew6yRYq4HIk6Wuej_SvSJcHLToj5oz-Sp0VLVgyG2XiedCB-sR62lmcR-EKUGKUJ9sN3NNKWhJDOCyJTnC_jCb-XRFE9SNUzWROmKig6lyD5LCoY2wtJLUZbG5M6ecMkewivnaL4ku0JPFK3TpBxPOO6TvwbdbZG6IUz-k7FlzsftBsFrxpEL6vd2suBQ78rb_UZ9V4wT3ZkEr3F5CVzUftUdCKlv6gkbRVp--uvkqayFOCYRFMyEttdOD',
  engineer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrrAN7_WtsqifEHjYNd1cpkyA2nAMvGjR7ZHxhqB_b7VygngJRPGhVcz6qLUpcPoxq_d9G-4Gqce6sS8j5KnOxcPr_05hfCyMIe0p3ppTSot21bobodwbRLWM3BvLLL3J9fYW0DL-T5cjI7DwNTYKvnd9c-Tj6kui--6JFqVDVF6VdPRmfnkPrIah4w9lqkGpmFXEGqh9y__Qrkrqs4SQOS588Ls6aDQxmW_xjy9bzKo4YJCuhXUOZ8qqixyCPXrOgrAqU0rqObZO3',
  substation: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB14pl16jH11L_zRMO8B3XdWAlMWvO-ARh2bTbEJ83kHy4fWfPoXIWnMJ3Lv9q0wch48g3U8EmbaN4zzEQc-ryJGyR_XvaoAyrT0_ZNYBGxssPgemToCCQo-MuIpuHObO01uZk76MzduJhTthZj70Oq2TExkAvibKQv1L18ksnMkPohsM6E1X5nDxDRtthBmVgbC53LqtGpn3ZiVQuj5IQ-dB-BBGYamXfV0DS64RB81mTI6kV2JElU5-oLS_566bo7wgB8ZtSWcJsf',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH'
};

export const BRANDS = [
  { name: 'Intelbras', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Intelbras_logo.svg/2560px-Intelbras_logo.svg.png' },
  { name: 'NHS', logo: 'https://www.nhs.com.br/wp-content/uploads/2021/08/logo-nhs.png' },
  //   { name: 'Sirius', logo: 'https://siriusenergia.com.br/wp-content/uploads/2021/03/Logo-Sirius.png' }, // Placeholder or try to find a real one
  { name: 'SMS', logo: 'https://logospng.org/wp-content/uploads/sms-tecnologia-logo.png' },
  { name: 'Legrand', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Legrand_logo.svg/2560px-Legrand_logo.svg.png' }
];

export const CLIENTS = [
  { name: 'Caloi', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Caloi_brand_logo.png' },
  { name: 'Cinemas Uniplex', logo: 'https://cinemasuniplex.com.br/img/logo.png' }, // Placeholder
  { name: 'Banco BMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Logo_Banco_BMG.svg/2560px-Logo_Banco_BMG.svg.png' },
  { name: 'Dexco', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Dexco_logo.png' },
  { name: 'Unimed', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Unimed_Logo.svg/2560px-Unimed_Logo.svg.png' },
  { name: 'Alibra', logo: 'https://www.alibra.com.br/wp-content/themes/alibra/assets/images/logo.png' },
];

export const TESTIMONIALS = [
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
