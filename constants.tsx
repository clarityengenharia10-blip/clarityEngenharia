import React from 'react';
import { Product, Service, BlogPost, Brand, Client, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  // 1. Prefabricated Modular DC
  {
    id: 'fusiondc1000a',
    name: 'FusionDC1000A - All-in-one Prefabricated DC',
    category: 'prefabricated_modular_dc',
    series: 'Série FusionDC',
    description: 'Solução de data center pré-fabricado "tudo-em-um" para implementação rápida e eficiente em ambientes externos.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusiondc1000a.jpg?la=en',
    badge: 'Outdoor',
    specs: ['Implementação Rápida', 'IP55/IP65 Proteção'],
    powerRange: 'Up to 54kW',
    brand: 'Huawei',
    detailedSpecs: {
      'Tipo de Construção': 'Conteinerizado (ISO ou Não-ISO)',
      'Nível de Proteção': 'IP55 ou IP65',
      'Resfriamento': 'In-row ou In-room',
      'Energia': 'UPS Modular Integrado',
      'Aplicação': 'Edge Computing, Smart Cities',
      'Tempo de Entrega': 'Reduzido em 50%'
    },
    docs: [
      { name: 'Brochura FusionDC1000A', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'fusiondc1000b',
    name: 'FusionDC1000B - Data Center Modular Médio',
    category: 'prefabricated_modular_dc',
    series: 'Série FusionDC',
    description: 'Data center modular pré-fabricado de médio porte, ideal para expansão flexível e alta eficiência energética.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusiondc1000b.jpg?la=en',
    badge: 'Expansível',
    specs: ['Design Modular', 'Alta Eficiência PUE < 1.15'],
    brand: 'Huawei',
    detailedSpecs: {
      'Capacidade': 'Escalável conforme demanda',
      'Arquitetura': 'Modular Pré-fabricada',
      'Refrigeração': 'In-row com contenção de corredor',
      'Gerenciamento': 'DCIM Integrado (NetEco)',
      'Resistência Sísmica': 'Zona 3/4',
      'Vida Útil': 'Projetado para 50 anos'
    },
    docs: [
      { name: 'Especificações FusionDC1000B', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'fusiondc1000c',
    name: 'FusionDC1000C - Data Center de Larga Escala',
    category: 'prefabricated_modular_dc',
    series: 'Série FusionDC',
    description: 'A solução definitiva para grandes data centers, combinando construção civil simplificada com módulos pré-fabricados.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusiondc1000c.jpg?la=en',
    badge: 'Hyperscale',
    specs: ['Construção Híbrida', 'Máxima Densidade'],
    brand: 'Huawei',
    detailedSpecs: {
      'Aplicação': 'Cloud Computing, Colocation',
      'Estrutura': 'Módulos pré-fabricados empilháveis',
      'TIER': 'Suporta TIER III / TIER IV',
      'Eficiência Energética': 'Líder de mercado',
      'Tempo de Construção': '50% mais rápido que alvenaria tradicional'
    },
    docs: [
      { name: 'Technical Whitepaper', url: '#', type: 'datasheet' }
    ]
  },

  // 2. Smart Modular DC
  {
    id: 'fusionmodule500',
    name: 'FusionModule500 - Micro Modular DC',
    category: 'smart_modular_dc',
    series: 'Série Smart Module',
    description: 'Solução compacta para borda de rede (Edge), integrando UPS, refrigeração, monitoramento e distribuição em um único gabinete.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusionmodule500.jpg?la=en',
    badge: 'Edge',
    specs: ['Tudo-em-um', 'Plug & Play'],
    brand: 'Huawei',
    detailedSpecs: {
      'Capacidade': '3kW a 10kW por rack',
      'Dimensões': 'Gabinete Padrão 19"',
      'Componentes': 'UPS, Baterias, Ar Condicionado, PDU',
      'Monitoramento': 'Remoto via Web/App',
      'Instalação': '2 horas (típico)'
    },
    docs: [
      { name: 'Guia Rápido FusionModule500', url: '#', type: 'manual' }
    ]
  },
  {
    id: 'fusionmodule800',
    name: 'FusionModule800 - Pequeno Data Center',
    category: 'smart_modular_dc',
    series: 'Série Smart Module',
    description: 'Data center ideal para filiais e pequenas empresas, com contenção de ar integrada e alta eficiência.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusionmodule800.jpg?la=en',
    badge: 'Small Business',
    specs: ['Até 8 Racks', 'PUE Otimizado'],
    brand: 'Huawei',
    detailedSpecs: {
      'Configuração': 'Fila única com corredor frio/quente',
      'Capacidade de TI': 'Até 25kW (varia com refrigeração)',
      'Refrigeração': 'In-row DX (Expansão Direta)',
      'UPS': 'Modular Hot-swappable',
      'Segurança': 'Controle de acesso e vídeo integrados'
    },
    docs: [
      { name: 'Datasheet FusionModule800', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'fusionmodule2000',
    name: 'FusionModule2000 - Smart Modular DC',
    category: 'smart_modular_dc',
    series: 'Série Smart Module',
    description: 'Solução premiada e certificada pelo Uptime Institute, projetada para data centers de médio e grande porte com inteligência AI.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusionmodule2000.jpg?la=en',
    badge: 'Premiado',
    specs: ['AI Cooling', 'Certificação TIER-Ready'],
    brand: 'Huawei',
    detailedSpecs: {
      'Arquitetura': 'Totalmente Modular',
      'Inteligência': 'iCooling (Otimização via IA)',
      'Flexibilidade': 'Suporta fileira simples ou dupla',
      'Densidade': 'Alta densidade de potência suportada',
      'Visualização': 'Gestão 3D visual'
    },
    docs: [
      { name: 'Certificação TIER-Ready', url: '#', type: 'datasheet' }
    ]
  },

  // 3. Smart Power Supply
  {
    id: 'ups5000-h',
    name: 'UPS5000-H - UPS Modular de Alta Densidade',
    category: 'smart_power_supply',
    series: 'Série UPS5000',
    description: 'UPS modular de ultra-alta densidade e eficiência, alcançando 97% de eficiência em modo online.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/ups5000-h.jpg?la=en',
    badge: '97% Eficiência',
    specs: ['Módulo de 100kVA/3U', 'Hot-swap total'],
    brand: 'Huawei',
    detailedSpecs: {
      'Capacidade': '400kVA a 1600kVA por sistema',
      'Eficiência': '97% (Online), 99% (S-ECO)',
      'Densidade de Módulo': '100kVA em 3U de altura',
      'Tecnologia': 'Semicondutores Wide Bandgap',
      'Manuteção': 'Troca a quente em 5 minutos'
    },
    docs: [
      { name: 'Ficha Técnica UPS5000-H', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'smartli',
    name: 'SmartLi - Solução de Baterias de Lítio',
    category: 'smart_power_supply',
    series: 'Série SmartLi',
    description: 'Sistema de armazenamento de energia com baterias de íon-lítio (LiFePO4) inteligente, seguro e compacto.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/smartli.jpg?la=en',
    badge: 'Li-ion',
    specs: ['Vida Útil 10+ Anos', '70% Menos Espaço'],
    brand: 'Huawei',
    detailedSpecs: {
      'Química': 'Lítio Ferro Fosfato (LiFePO4)',
      'Segurança': 'BMS em 3 níveis (Célula, Módulo, Gabinete)',
      'Balanceamento': 'Controle ativo de corrente',
      'Vida Útil': '5000 ciclos @ 50% DOD',
      'Compatibilidade': 'UPS Huawei e terceiros'
    },
    docs: [
      { name: 'SmartLi Whitepaper', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'fusionpower6000',
    name: 'FusionPower6000 - Distribuição Integrada',
    category: 'smart_power_supply',
    series: 'Série FusionPower',
    description: 'Integração completa de média e baixa tensão, transformadores e UPS em um único sistema PowerPOD.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusionpower6000.jpg?la=en',
    badge: 'PowerPOD',
    specs: ['Full Integration', 'Footprint Otimizado'],
    brand: 'Huawei',
    detailedSpecs: {
      'Conceito': 'Power Supply & Distribution System (PowerPOD)',
      'Componentes': 'Link de cobre pré-fabricado (busbar)',
      'Eficiência': 'Redução de perdas em até 50%',
      'Monitoramento': 'iPower (Previsão de temperatura e vida útil)',
      'Instalação': 'Semanas em vez de meses'
    },
    docs: [
      { name: 'Solução FusionPower', url: '#', type: 'datasheet' }
    ]
  },

  // 4. Smart Cooling
  {
    id: 'netcol5000',
    name: 'NetCol5000 - In-row Smart Cooling',
    category: 'smart_cooling',
    series: 'Série NetCol',
    description: 'Ar condicionado de precisão para instalação entre racks, aproximando a fonte de frio da fonte de calor.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/netcol5000.jpg?la=en',
    badge: 'Precisão',
    specs: ['Controle Inverter', 'Alta Eficiência'],
    brand: 'Huawei',
    detailedSpecs: {
      'Tipo': 'Expansão Direta (DX) ou Água Gelada (CW)',
      'Capacidade': 'Várias opções (ex: 35kW, 60kW)',
      'Compressor': 'DC Inverter (velocidade variável)',
      'Ventiladores': 'EC Fans trocáveis a quente',
      'Controle': 'Umidade e Temperatura precisos'
    },
    docs: [
      { name: 'Catálogo NetCol In-row', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'netcol8000',
    name: 'NetCol8000 - In-room Smart Cooling',
    category: 'smart_cooling',
    series: 'Série NetCol',
    description: 'Solução de resfriamento perimetral para salas de data center, oferecendo confiabilidade e fácil manutenção.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/netcol8000.jpg?la=en',
    badge: 'Perimetral',
    specs: ['Downflow/Upflow', 'Modular Design'],
    brand: 'Huawei',
    detailedSpecs: {
      'Aplicação': 'Salas de Data Center médias e grandes',
      'Eficiência': 'Economia de energia com algoritmos inteligentes',
      'Manutenção': 'Acesso frontal total',
      'Confiabilidade': 'Bomba d\'água dupla (opcional)',
      'Monitoramento': 'Tela touch 7 polegadas'
    },
    docs: [
      { name: 'Especificações NetCol In-room', url: '#', type: 'datasheet' }
    ]
  },
  {
    id: 'fusioncol8000',
    name: 'FusionCol8000 - Resfriamento Evaporativo Indireto',
    category: 'smart_cooling',
    series: 'Série FusionCol',
    description: 'Sistema de resfriamento indireto evaporativo altamente eficiente, utilizando ar externo para maximizar o free cooling.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/fusioncol8000.jpg?la=en',
    badge: 'Free Cooling',
    specs: ['Economia Extrema', 'Sem Contaminação'],
    brand: 'Huawei',
    detailedSpecs: {
      'Princípio': 'Evaporação indireta ar-ar',
      'PUE': 'Pode atingir PUE parcial de 1.10',
      'Uso de Água': 'Sistema inteligente de gestão de água',
      'Instalação': 'Externa / Telhado',
      'Aplicação': 'Hyperscale Data Centers'
    },
    docs: [
      { name: 'Whitepaper Soluções Evaporativas', url: '#', type: 'datasheet' }
    ]
  },

  // 5. Smart DC Management System
  {
    id: 'neteco6000',
    name: 'NetEco6000 - Sistema de Gestão Inteligente',
    category: 'smart_dc_management',
    series: 'Série NetEco',
    description: 'Plataforma de gerenciamento de infraestrutura de data center (DCIM) com visualização em 3D e inteligência artificial.',
    image: 'https://www-file.huawei.com/-/media/corporate/images/products/digital-power/data-center-facility/neteco6000.jpg?la=en',
    badge: 'DCIM',
    specs: ['Visualização 3D', 'AI Optimization'],
    brand: 'Huawei',
    detailedSpecs: {
      'Funcionalidades': 'Gestão de ativos, energia, capacidade e ambiente',
      'Visualização': 'Digital Twin com visualização 3D imersiva',
      'Otimização': 'AI PUE Optimization (redução de consumo)',
      'Relatórios': 'Dashboards customizáveis e relatórios automáticos',
      'Mobile': 'App para operação remota'
    },
    docs: [
      { name: 'Overview NetEco6000', url: '#', type: 'datasheet' }
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
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2670&auto=format&fit=crop',
    category: 'Tecnologia',
    readTime: '6 min'
  },
  {
    id: 'monitoramento-remoto-dcim',
    title: 'Monitoramento Remoto: O Poder do DCIM',
    excerpt: 'Como sistemas de gestão de infraestrutura de data center (DCIM) transformam a operação e previnem falhas.',
    content: `
      <h2>Visibilidade Total</h2>
      <p>Você não pode gerenciar o que não pode medir. Sistemas DCIM (Data Center Infrastructure Management) fornecem uma visão holística de todo o ecossistema do seu data center.</p>
      <h3>Funcionalidades Essenciais:</h3>
      <ul>
          <li>Monitoramento em tempo real de temperatura e umidade.</li>
          <li>Gestão de capacidade de energia e refrigeração.</li>
          <li>Alertas instantâneos via SMS ou E-mail.</li>
      </ul>
      <p>Com o DCIM, a equipe de TI pode tomar decisões baseadas em dados, otimizando o consumo e prevenindo pontos de calor (hotspots) antes que afetem os servidores.</p>
    `,
    date: '28 Dez 2023',
    author: 'Equipe de TI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    category: 'Gestão',
    readTime: '5 min'
  },
  {
    id: 'tendencias-data-center-2024',
    title: 'Tendências para Data Centers em 2024',
    excerpt: 'Edge Computing, Sustentabilidade e Inteligência Artificial ditam o futuro das infraestruturas críticas.',
    content: `
      <h2>O Futuro é Agora</h2>
      <p>O setor de Data Centers está em rápida transformação. A demanda por processamento de IA e a necessidade de baixa latência estão impulsionando novas arquiteturas.</p>
      <h3>Principais Tendências:</h3>
      <p><strong>Edge Computing:</strong> Processamento de dados mais próximo do usuário final para reduzir latência.</p>
      <p><strong>Sustentabilidade:</strong> Foco em redução do PUE (Power Usage Effectiveness) e uso de energias renováveis.</p>
      <p><strong>Refrigeração Líquida:</strong> Necessária para suportar os chips de alta densidade usados em IA.</p>
    `,
    date: '15 Dez 2023',
    author: 'Clarity Engenharia',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    category: 'Tendências',
    readTime: '4 min'
  },
  {
    id: 'seguranca-eletrica-hospitais',
    title: 'Segurança Elétrica em Ambientes Hospitalares',
    excerpt: 'A criticalidade da energia ininterrupta para salvar vidas e manter equipamentos vitais operando.',
    content: `
      <h2>Energia que Salva Vidas</h2>
      <p>Em um hospital, uma falha de energia de segundos pode ser fatal. Equipamentos de suporte à vida, centros cirúrgicos e UTIs dependem de energia 100% limpa e ininterrupta.</p>
      <p>A norma NBR 13534 estabelece requisitos rigorosos para instalações elétricas em estabelecimentos assistenciais de saúde. O uso de sistemas IT-Médico e Nobreaks de dupla conversão é obrigatório para garantir a segurança dos pacientes e a integridade dos equipamentos sensíveis.</p>
    `,
    date: '02 Dez 2023',
    author: 'Eng. Segurança',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop',
    category: 'Saúde',
    readTime: '5 min'
  },
  {
    id: 'climatizacao-precisao',
    title: 'Ar Condicionado de Precisão vs Conforto',
    excerpt: 'Por que usar ar condicionado comum no Data Center é um erro que pode custar caro.',
    content: `
      <h2>Precisão é tudo</h2>
      <p>Muitas empresas cometem o erro de instalar ar condicionado "split" (conforto) em salas de servidores. No entanto, esses equipamentos não foram projetados para operar 24/7 nem para lidar com a carga térmica sensível gerada por eletrônicos.</p>
      <h3>Diferenças Chave:</h3>
      <p><strong>Controle de Umidade:</strong> Splits retiram muita umidade, gerando eletricidade estática. Equipamentos de precisão controlam a umidade exatamente onde deve estar.</p>
      <p><strong>Vazão de Ar:</strong> Equipamentos de precisão movimentam muito mais ar (CFM) para dissipar o calor denso dos racks.</p>
    `,
    date: '20 Nov 2023',
    author: 'Especialista HVAC',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2574&auto=format&fit=crop',
    category: 'Climatização',
    readTime: '6 min'
  },
  {
    id: 'industria-4-0-energia',
    title: 'A Qualidade de Energia na Indústria 4.0',
    excerpt: 'Como a automação industrial moderna exige uma rede elétrica livre de ruídos e harmônicas.',
    content: `
      <h2>Automação Sensível</h2>
      <p>A Indústria 4.0 traz robôs colaborativos, sensores IoT e PLCs avançados. Esses dispositivos são extremamente sensíveis a distúrbios na rede elétrica.</p>
      <p>Afundamentos de tensão (sags) de milissegundos podem reiniciar um processo produtivo inteiro, gerando perdas de material e horas paradas. A instalação de condicionadores de energia e UPS industriais é vital para garantir a produtividade e proteger o investimento em automação.</p>
    `,
    date: '10 Nov 2023',
    author: 'Clarity Engenharia',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
    category: 'Indústria',
    readTime: '5 min'
  },
  {
    id: 'escolhendo-nobreak-ideal',
    title: 'Guia: Como Escolher o Nobreak Ideal',
    excerpt: 'Offline, Line-Interactive ou Online Dupla Conversão? Entenda as diferenças e escolha o melhor para seu negócio.',
    content: `
      <h2>Topologias de UPS</h2>
      <p>Não todos os nobreaks são iguais. A topologia define como ele protege sua carga...</p>
      <ul>
        <li><strong>Offline (Standby):</strong> Básico, aciona a bateria apenas quando a energia cai. Bom para desktops simples.</li>
        <li><strong>Line-Interactive:</strong> Possui regulador de tensão (AVR). Bom para servidores pequenos e redes.</li>
        <li><strong>Online Dupla Conversão:</strong> A energia passa sempre pelas baterias/inversor. A saída é pura e perfeita. Obrigatório para servidores críticos e equipamentos médicos.</li>
      </ul>
    `,
    date: '05 Out 2023',
    author: 'Consultoria Técnica',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop',
    category: 'Guia',
    readTime: '7 min'
  },
  {
    id: 'nobreak-vs-gerador',
    title: 'Nobreak ou Gerador: Qual eu preciso?',
    excerpt: 'Entenda a função de cada um e por que, na maioria dos casos críticos, você precisa dos dois trabalhando juntos.',
    content: `
      <h2>A Dupla Dinâmica</h2>
      <p>Muitos clientes perguntam: "Se eu tenho gerador, preciso de nobreak?". A resposta é sim.</p>
      <p>O <strong>Gerador</strong> fornece energia por longo prazo (horas ou dias), mas leva cerca de 10-15 segundos para partir e assumir a carga.</p>
      <p>O <strong>Nobreak</strong> cobre esses 15 segundos vitais, impedindo que os computadores desliguem, e também filtra a energia enquanto o gerador estabiliza.</p>
      <p>Juntos, eles oferecem proteção total: autonomia infinita (enquanto houver combustível) e qualidade de energia constante.</p>
    `,
    date: '28 Set 2023',
    author: 'Eng. Eletricista',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=2555&auto=format&fit=crop',
    category: 'Infraestrutura',
    readTime: '4 min'
  }
];

export const CASES = [
  {
    id: 'hospital-regional',
    client: 'Hospital Regional de Grande Porte',
    title: 'Proteção Crítica para UTIs e Centro Cirúrgico',
    challenge: 'O hospital sofria com oscilações frequentes de energia que queimavam placas de equipamentos de tomografia e colocavam em risco procedimentos cirúrgicos.',
    solution: 'Implementação de 2 UPS Modulares de 200kVA em paralelo redundante, com bancos de baterias para 30 minutos de autonomia e sistema de monitoramento 24/7.',
    result: 'Zero paradas nos últimos 24 meses. A qualidade da energia estabilizada aumentou a vida útil dos equipamentos de imagem em 40%.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop',
    tags: ['Hospitalar', 'Crítico', 'UPS Modular']
  },
  {
    id: 'industria-automotiva',
    client: 'Indústria Automotiva Multinacional',
    title: 'Estabilidade para Linha de Montagem Robotizada',
    challenge: 'Micro-cortes de energia desprogramavam os robôs da linha de montagem, causando perdas de produção de até R$ 50.000 por hora parada.',
    solution: 'Instalação de condicionadores de tensão industriais e um sistema UPS de 500kVA dedicado à linha de automação, com filtragem ativa de harmônicas.',
    result: 'Eliminação total das paradas por distúrbios elétricos. O ROI (Retorno sobre Investimento) do projeto foi alcançado em apenas 4 meses de operação.',
    image: '/images/cases/industria-automotiva.webp',
    tags: ['Indústria', 'Automação', 'Qualidade de Energia']
  },
  {
    id: 'data-center-financeiro',
    client: 'Instituição Financeira Digital',
    title: 'Retrofit de Data Center em Operação',
    challenge: 'Necessidade de duplicar a capacidade de processamento sem desligar o Data Center atual (Zero Downtime) e melhorar a eficiência energética (PUE).',
    solution: 'Substituição dos aparelhos de ar condicionado CRAC antigos por novas unidades In-row de alta eficiência e confinamento de corredor quente.',
    result: 'Redução do PUE de 2.2 para 1.5, gerando uma economia de energia de 30%. O upgrade foi realizado sem nenhuma interrupção nos serviços bancários.',
    image: '/images/cases/data-center-financeiro.webp',
    tags: ['Data Center', 'Eficiência', 'Retrofit']
  },
  {
    id: 'call-center',
    client: 'Call Center 24h',
    title: 'Continuidade Operacional para 500 PAs',
    challenge: 'Garantir que 500 posições de atendimento continuassem operando mesmo durante apagões prolongados na região.',
    solution: 'Projeto Turn-key envolvendo Grupo Gerador de 550kVA e UPS central, incluindo toda a infraestrutura elétrica e quadros de transferência automática (QTA).',
    result: 'Operação ininterrupta garantida. Durante o último grande apagão da cidade, o Call Center continuou operando normalmente por 6 horas seguidas via gerador.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop', // Office building
    tags: ['Serviços', 'Gerador', 'Turn-key']
  }
];
