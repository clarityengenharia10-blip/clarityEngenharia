
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
  }
];

export const SERVICES: Service[] = [
  {
    id: 'preventive',
    title: 'Manutenção Preventiva',
    icon: 'shield',
    description: 'Focada na confiabilidade e longevidade dos ativos através de inspeções térmicas e testes de componentes agendados.',
    details: ['Termografia', 'Testes de Banco de Carga', 'Auditoria de Saúde de Baterias']
  },
  {
    id: 'corrective',
    title: 'Manutenção Corretiva',
    icon: 'build',
    description: 'Resposta rápida e precisão técnica para restaurar operações de forma eficiente em falhas inesperadas.',
    details: ['Suporte de Campo 24/7', 'Peças de Reposição Originais', 'Análise de Falhas Rápida']
  },
  {
    id: 'support',
    title: 'Suporte Técnico',
    icon: 'support_agent',
    description: 'Consultoria especializada e disponibilidade 24/7 para resolução de problemas em sistemas complexos.',
    details: ['Monitoramento Remoto', 'Hotline Técnica', 'Consultoria de Engenharia']
  },
  {
    id: 'installation',
    title: 'Instalação de Equipamentos',
    icon: 'engineering',
    description: 'Implementação profissional e comissionamento de transformadores, painéis e infraestrutura crítica.',
    details: ['Comissionamento de Subestações', 'Retrofitting', 'Certificação de Site']
  }
];

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI9tvjTyxE2P2tJ5hvscew6yRYq4HIk6Wuej_SvSJcHLToj5oz-Sp0VLVgyG2XiedCB-sR62lmcR-EKUGKUJ9sN3NNKWhJDOCyJTnC_jCb-XRFE9SNUzWROmKig6lyD5LCoY2wtJLUZbG5M6ecMkewivnaL4ku0JPFK3TpBxPOO6TvwbdbZG6IUz-k7FlzsftBsFrxpEL6vd2suBQ78rb_UZ9V4wT3ZkEr3F5CVzUftUdCKlv6gkbRVp--uvkqayFOCYRFMyEttdOD',
  engineer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrrAN7_WtsqifEHjYNd1cpkyA2nAMvGjR7ZHxhqB_b7VygngJRPGhVcz6qLUpcPoxq_d9G-4Gqce6sS8j5KnOxcPr_05hfCyMIe0p3ppTSot21bobodwbRLWM3BvLLL3J9fYW0DL-T5cjI7DwNTYKvnd9c-Tj6kui--6JFqVDVF6VdPRmfnkPrIah4w9lqkGpmFXEGqh9y__Qrkrqs4SQOS588Ls6aDQxmW_xjy9bzKo4YJCuhXUOZ8qqixyCPXrOgrAqU0rqObZO3',
  substation: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB14pl16jH11L_zRMO8B3XdWAlMWvO-ARh2bTbEJ83kHy4fWfPoXIWnMJ3Lv9q0wch48g3U8EmbaN4zzEQc-ryJGyR_XvaoAyrT0_ZNYBGxssPgemToCCQo-MuIpuHObO01uZk76MzduJhTthZj70Oq2TExkAvibKQv1L18ksnMkPohsM6E1X5nDxDRtthBmVgbC53LqtGpn3ZiVQuj5IQ-dB-BBGYamXfV0DS64RB81mTI6kV2JElU5-oLS_566bo7wgB8ZtSWcJsf',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKoAOLTpLyOzAgEPcZqAlZ9kPfUwyjdTYWeCA-0bgqnpsLOC3jJ6p8wjNabjr7aAvxKERRq1ykVhuQiEpoCqlJVsUJ5WiGmEFuqp-bCEtbrt6gtGttcD7DnyFX1_gqMXZqAIcMYCMfe0_h0l982V381sYx5smkg2tP-Hn0o94SDEPPpgqUPsvv5AEskr3Na1DHPvD3We6J18IRMWINQ1k4i6NmtoLfLiA4mK9Z1sUuvm0Iosa9vs-MDYW5HCjmyweDp_X-MNsJzurH'
};
