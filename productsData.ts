import { Product } from './types';

export const PRODUCTS: Product[] = [
    // 1. Prefabricated Modular DC
    {
        id: 'prefab-all-in-one',
        name: 'Prefabricated All-in-One DC',
        category: 'prefabricated_modular_dc',
        series: 'Série FusionDC',
        description: 'Solução de data center pré-fabricado "tudo-em-um" para implementação rápida e eficiente em ambientes externos.',
        image: '/images/products/16.jpg',
        badge: 'Outdoor',
        specs: ['Implementação Rápida', 'IP55/IP65 Proteção'],
        variations: ['40ft-IT-AIO', '20ft-ICT-AIO'],
        variationImages: {
            '40ft-IT-AIO': '/images/products/Camada 32.png',
            '20ft-ICT-AIO': '/images/products/Camada 33.png'
        },
        brand: 'Huawei'
    },

    // 2. Smart Modular DC
    {
        id: 'micro-modular-dc',
        name: 'Micro Modular DC',
        category: 'smart_modular_dc',
        series: 'Série Smart Module',
        description: 'Solução compacta integrando UPS, refrigeração, monitoramento e distribuição em um único gabinete.',
        image: '/images/products/10.jpg',
        badge: 'Edge',
        specs: ['Tudo-em-um', 'Plug & Play'],
        variations: ['Integrated Cooling Solution'],
        variationImages: {
            'Integrated Cooling Solution': '/images/products/Camada 30.png'
        },
        brand: 'Huawei'
    },
    {
        id: 'smart-modular-dc',
        name: 'FusionModule2000',
        category: 'smart_modular_dc',
        series: 'Série Smart Module',
        description: 'Solução premiada e certificada para data centers de médio e grande porte.',
        image: '/images/products/8.jpg',
        badge: 'Premiado',
        specs: ['AI Cooling', 'Certificação TIER'],
        variations: ['FusionModule2000', 'FusionModule2000-S'],
        variationImages: {
            'FusionModule2000': '/images/products/Camada 29.png',
            'FusionModule2000-S': '/images/products/Camada 28.png'
        },
        brand: 'Huawei'
    },

    // 3. Smart Power Supply
    {
        id: 'ups5000-a',
        name: 'UPS5000-A (30-120kVA)',
        category: 'smart_power_supply',
        series: 'Série UPS5000',
        description: 'O UPS5000-A (30-120kVA) é um UPS online de dupla conversão, conversível para torre ou rack. Utiliza tecnologia DSP para fornecer uma onda senoidal pura e estável com tensão de 380/400/415 Vac. Oferece soluções confiáveis, econômicas, inteligentes e convenientes para cenários de média potência.',
        image: '/images/products/Camada 16.png',
        badge: 'Tower/Rack',
        specs: ['Eficiência até 95.7%', 'Conversível Rack/Torre', 'Até 8 unidades em paralelo'],
        variations: ['30/40kVA', '60kVA', '80kVA', '120kVA'],
        variationImages: {
            '30/40kVA': '/images/products/Camada 16.png',
            '60kVA': '/images/products/Camada 15.png'
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Cenários': 'Pequenos e médios data centers, salas de telecomunicações e switch, equipamentos de filiais.',
            'Capacidade Nominal': '30kVA/30kW a 120kVA/108kW',
            'Tensão de Entrada': '380/400/415Vac (3Ph+N+PE), ampla faixa 138-485Vac',
            'Eficiência do Sistema': 'Até 95.7% (modo online)',
            'Bateria': '360-528Vdc (Configuração flexível: 30 a 44 baterias, permite remoção de bateria defeituosa sem substituir a string)',
            'Expansibilidade': 'Até 8 unidades conectadas em paralelo',
            'Temperatura de Operação': '0 a 40°C',
            'Dimensões (AxLxP) / Peso': '500 x 264 x 800 mm (70kg) para 30/40kVA; 1020 x 440 x 850 mm (140-170kg) para 60 a 120kVA'
        }
    },
    {
        id: 'ups-solutions',
        name: 'UPS Solutions (linha modular escalável)',
        category: 'smart_power_supply',
        series: 'Série UPS',
        description: 'Linha completa e escalável de soluções UPS ininterruptas.',
        image: '/images/products/6.jpg',
        badge: 'Modular',
        specs: ['Alta Confiabilidade', 'Eficiência de até 97%'],
        variations: [
            '1600kVA', '1200kVA', '800kVA', '800kVA (gabinete único)', '400/500/600kVA',
            '600kVA', '600kVA (outro modelo)', '400/500kVA', '400/500kVA (outro modelo)',
            '200/300kVA', '120kVA-FM', '10kVA', '6kVA'
        ],
        variationImages: {
            '1600kVA': '/images/products/Camada 4.png',
            '1200kVA': '/images/products/Camada 5.png',
            '800kVA': '/images/products/Camada 6.png',
            '400/500/600kVA': '/images/products/Camada 7.png',
            '800kVA (gabinete único)': '/images/products/Camada 8.png',
            '600kVA': '/images/products/Camada 9.png',
            '400/500kVA': '/images/products/Camada 10.png',
            '200/300kVA': '/images/products/Camada 11.png',
            '120kVA-FM': '/images/products/Camada 12.png',
            '600kVA (outro modelo)': '/images/products/Camada 13.png',
            '400/500kVA (outro modelo)': '/images/products/Camada 14.png',
            '10kVA': '/images/products/Camada 18.png',
            '6kVA': '/images/products/Camada 19.png'
        },
        brand: 'Huawei'
    },
    {
        id: 'smartli',
        name: 'SmartLi (Sistema de Baterias de Lítio)',
        category: 'smart_power_supply',
        series: 'Série SmartLi',
        description: 'O SmartLi é um sistema de armazenamento de energia desenvolvido pela Huawei para UPS. Utiliza células LFP (Lítio Ferro Fosfato), as mais seguras do mercado. Sua tecnologia exclusiva de balanceamento ativo de corrente permite o uso misto de baterias novas e antigas, reduzindo Capex, enquanto o sistema BMS de três níveis garante gestão inteligente e economia de O&M.',
        image: '/images/products/5.jpg',
        badge: 'Li-ion LFP',
        specs: ['5000 Ciclos', 'Economia de 70% de Espaço', 'Uso Misto (Novas/Antigas)'],
        variations: ['SmartLi 3.0'],
        variationImages: {
            'SmartLi 3.0': '/images/products/Camada 17.png'
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Cenários de Aplicação': 'Data centers corporativos (HQ), data centers de recuperação de desastres (Disaster Recovery), provedores de internet (IDC) e data centers de computação em nuvem.',
            'Confiabilidade (Reliable)': 'Células LFP altamente estáveis (não propagam fogo após fuga térmica). Sistema de extinção de incêndio a nível de módulo (preciso e rápido). Vida útil longa de até 5000 ciclos (a 50% DOD).',
            'Eficiência (Efficient)': 'Alta densidade de energia, economizando 70% do espaço ocupado em comparação a baterias VRLA. O sistema Smart BMS reduz custos de rotina (O&M) em até 80%.',
            'Simplicidade (Simple)': 'Controle ativo de balanceamento de corrente suporta gabinetes mistos (novos e velhos) para expansão flexível. Strings com diferentes números de baterias de lítio podem ser ligadas em paralelo. Teste automático de capacidade.',
            'Especificações': 'Célula: LiFePO4(6C). Tempo de vida de projeto: 15 anos. Compatibilidade: UPS Huawei e UPS/HVDC de terceiros. Proteção IP21.',
            'Monitoramento e Comunicação': 'Sistema BMS em 3 níveis (Célula/BMU, Rack/BCU e Sistema/SBCU) integrado ao NetEco. Interfaces: FE, RS485, Contatos Secos.',
            'Dimensões (LxPxA) e Peso': '600 x 850 x 2000 mm. Peso: De 900 kg a 1100 kg (dependendo do gabinete: 6+6, 7+7 ou 8+8 módulos).'
        }
    },
    {
        id: 'fusionpower6000',
        name: 'FusionPower6000 (Low Voltage Power Distribution)',
        category: 'smart_power_supply',
        series: 'Série FusionPower',
        description: 'Integração completa de média e baixa tensão em um único sistema PowerPOD.',
        image: '/images/products/4.jpg',
        badge: 'PowerPOD',
        specs: ['Full Integration', 'Footprint Otimizado'],
        variations: ['FusionPower6000 (painel completo)'],
        variationImages: {
            'FusionPower6000 (painel completo)': '/images/products/Camada 3.png'
        },
        brand: 'Huawei'
    },
    {
        id: 'pdu-modular',
        name: 'Modular Power Distribution Cabinet',
        category: 'smart_power_supply',
        series: 'Série PDU',
        description: 'Gabinete de distribuição de energia modular.',
        image: '/images/products/Camada 34.png',
        badge: 'Distribuição',
        specs: ['Alta Precisão', 'Design Modular'],
        brand: 'Huawei'
    },
    {
        id: 'pdu-precision',
        name: 'Precision Power Distribution Cabinet',
        category: 'smart_power_supply',
        series: 'Série PDU',
        description: 'Gabinete de distribuição de energia de precisão.',
        image: '/images/products/Camada 35.png',
        badge: 'Distribuição',
        specs: ['Alta Precisão'],
        brand: 'Huawei'
    },

    // 4. Smart Cooling
    {
        id: 'fusioncol8000-c210h',
        name: 'FusionCol8000-C210H (Fan Wall Chilled Water Cooling)',
        category: 'smart_cooling',
        series: 'Série FusionCol',
        description: 'Refrigeração de Data Center com alto fluxo.',
        image: '/images/products/2.jpg',
        badge: 'Fan Wall',
        specs: ['Chilled Water Cooling'],
        variations: ['FusionCol8000-C210H'],
        variationImages: {
            'FusionCol8000-C210H': '/images/products/Camada 23.png'
        },
        brand: 'Huawei'
    },
    {
        id: 'fusioncol8000-e400',
        name: 'FusionCol8000-E400 (400kW)',
        category: 'smart_cooling',
        series: 'Série FusionCol',
        description: 'Resfriamento indireto evaporativo de 400kW.',
        image: '/images/products/Camada 21.png',
        badge: 'Free Cooling',
        specs: ['Economia Extrema', '400kW'],
        brand: 'Huawei'
    },
    {
        id: 'fusioncol8000-e260',
        name: 'FusionCol8000-E260 (260kW)',
        category: 'smart_cooling',
        series: 'Série FusionCol',
        description: 'Resfriamento indireto evaporativo de 260kW.',
        image: '/images/products/Camada 22.png',
        badge: 'Free Cooling',
        specs: ['Economia Extrema', '260kW'],
        brand: 'Huawei'
    },
    {
        id: 'fusioncol8000-a-60',
        name: 'FusionCol8000-A (60kW)',
        category: 'smart_cooling',
        series: 'Série FusionCol',
        description: 'Refrigeração Air-cooled perimetral.',
        image: '/images/products/Camada 24.png',
        badge: 'Air-cooled',
        specs: ['60kW'],
        brand: 'Huawei'
    },
    {
        id: 'netcol8000-a',
        name: 'NetCol8000-A (45–120kW)',
        category: 'smart_cooling',
        series: 'Série NetCol',
        description: 'Solução de resfriamento perimetral para salas de data center.',
        image: '/images/products/Camada 25.png',
        badge: 'Perimetral',
        specs: ['Downflow/Upflow', 'Modular Design'],
        brand: 'Huawei'
    },
    {
        id: 'netcol5000-a',
        name: 'NetCol5000-A (25–46 kW)',
        category: 'smart_cooling',
        series: 'Série NetCol',
        description: 'O NetCol5000-A é uma solução de refrigeração inteligente de precisão in-row a ar, equipada com compressor DC inverter e design voltado a alta temperatura do ar de retorno. Ele adapta-se à carga térmica de forma inteligente, garantindo alta eficiência, confiabilidade e facilidade operacional com o uso de algoritmos exclusivos.',
        image: '/images/products/Camada 26.png',
        badge: 'In-Row Air-Cooled',
        specs: ['Compressor DC Inverter', 'EC Fans', 'iCooling (Redução de 8%)', 'Tela 7" Colorida'],
        brand: 'Huawei',
        detailedSpecs: {
            'Cenários de Aplicação': 'Data centers modulares, data centers de alta densidade e de pequeno ou médio porte. Obs: O NetCol5000-A050H com módulo a água é ideal para cenários com pé-direito muito alto ou tubulações muito longas.',
            'Simplicidade': 'Painel de 7 polegadas com informações críticas ao vivo. Diagnóstico automático de falhas para facilitar a manutenção. Conexões Rotalock no compressor dispensam soldagem na manutenção.',
            'Ecológico (Green)': 'Regulagem contínua (stepless) através do compressor e ventiladores Inverter para altíssima eficiência, com umidificação por filme úmido consumindo quase zero energia elétrica extra.',
            'Inteligência': 'O algoritmo de controle iCooling otimiza a eficiência geral do sistema e corta o uso de energia em até 8%. Alarme preditivo caso detecte vazamento ou pouco fluido refrigerante (automático).',
            'Confiabilidade': 'Os ventiladores internos podem ser substituídos de forma online de maneira rápida, e a válvula de expansão é programada para fechar automaticamente numa eventual queda súbita da energia, salvaguardando o compressor.',
            'Capacidades de Refrigeração (Indoor)': '25 kW (Modelo A025H), 35 kW (Modelo A035H) e 46 kW (Modelo A050H).',
            'Dimensões Indoor (LxPxA)': 'Com opções "Slim" de 300 x 1100 x 2000 mm, 300 x 1200 x 2000 mm, ou padrão de 600 x 1200 x 2000 mm.',
            'Unidades Outdoor (Condensadoras)': 'Integração perfeita com unidades condensadoras (A040, A060, A080, A120) dependendo do modelo da evaporadora.',
            'Alimentação Elétrica': '380/400/415Vac ou 208~220Vac (dependendo do modelo), com painéis com dupla redundância de energia inclusos ou configuráveis.',
            'Refrigerante': 'Projetado para operar com R410A de alto rendimento global.'
        }
    },
    {
        id: 'fusioncol5000-a',
        name: 'FusionCol5000-A (46–65kW)',
        category: 'smart_cooling',
        series: 'Série FusionCol',
        description: 'Refrigeração In-row Air-cooled de maior capacidade.',
        image: '/images/products/Camada 27.png',
        badge: 'Precisão',
        specs: ['In-row', 'Air-cooled'],
        brand: 'Huawei'
    }
];
