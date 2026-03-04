import { Product } from './types';

export const PRODUCTS: Product[] = [

    // ─── SMART POWER SUPPLY ────────────────────────────────────────────────────

    // UPS2000-G (6-20kVA) — Torre/Rack
    {
        id: 'ups2000-g',
        name: 'UPS2000-G (6–20 kVA)',
        category: 'smart_power_supply',
        series: 'Série UPS2000',
        description: 'UPS online de dupla conversão para ambientes corporativos e de TI. Disponível em torre ou rack, com bateria interna e suporte a banco de baterias externo. Oferece proteção confiável para pequenas e médias cargas críticas.',
        image: '/images/products/UPS2000-G/01-HUAWEI UPS2000-G(6-20kVA) Tower-mounted View.png',
        badge: 'Torre/Rack',
        specs: ['6 a 20 kVA', 'Dupla Conversão Online', 'Torre ou Rack', 'Banco de Baterias Externo'],
        variations: ['Vista Torre', 'Com Banco de Baterias', 'Instalado em Rack', '15-20kVA Frente', '15-20kVA Lateral', '15-20kVA Traseira'],
        variationImages: {
            'Vista Torre': '/images/products/UPS2000-G/01-HUAWEI UPS2000-G(6-20kVA) Tower-mounted View.png',
            'Com Banco de Baterias': '/images/products/UPS2000-G/02-HUAWEI UPS2000-G-20kVA and battery pack.png',
            'Instalado em Rack': '/images/products/UPS2000-G/04-HUAWEI UPS2000-G Installed in IT Cabinet View.png',
            '15-20kVA Frente': '/images/products/UPS2000-G/UPS2000-G 15-20K.png',
            '15-20kVA Lateral': '/images/products/UPS2000-G/UPS2000-G 15-20K-1.png',
            '15-20kVA Traseira': '/images/products/UPS2000-G/UPS2000-G_Torre_Traseira.png',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Capacidade': '6 kVA / 10 kVA / 15 kVA / 20 kVA',
            'Topologia': 'Online Dupla Conversão (VFI)',
            'Formato': 'Torre (conversível para rack)',
            'Tensão de Entrada': '220/230/240 Vac ±15%',
            'Tensão de Saída': '220/230/240 Vac',
            'Bateria': 'Interna + suporte a banco externo',
            'Comunicação': 'USB, RS232, SNMP (opcional)',
        }
    },

    // Banco de Bateria UPS2000
    {
        id: 'banco-bateria-ups2000',
        name: 'Banco de Baterias UPS2000-G',
        category: 'smart_power_supply',
        series: 'Série UPS2000',
        description: 'Banco de baterias externo para ampliar a autonomia do UPS2000-G. Compatível com os modelos de 10 a 20 kVA, com múltiplas vistas para facilitar o planejamento da instalação.',
        image: '/images/products/Banco de Bateria UPS2000/UPS2000-G Battery Pack Front View.png',
        badge: 'Acessório',
        specs: ['Compatível UPS2000-G', 'Amplia Autonomia', 'Múltiplas Configurações'],
        variations: ['Vista Frontal', 'Vista Esquerda', 'Vista Traseira', 'Vista Direita'],
        variationImages: {
            'Vista Frontal': '/images/products/Banco de Bateria UPS2000/UPS2000-G Battery Pack Front View.png',
            'Vista Esquerda': '/images/products/Banco de Bateria UPS2000/UPS2000-G Battery Pack Left View.png',
            'Vista Traseira': '/images/products/Banco de Bateria UPS2000/UPS2000-G Battery pack rear view.png',
            'Vista Direita': '/images/products/Banco de Bateria UPS2000/UPS2000-G Battery pack right view.png',
        },
        brand: 'Huawei',
    },

    // UPS2000-H 6kVA
    {
        id: 'ups2000-h-6kva',
        name: 'UPS2000-H (6 kVA)',
        category: 'smart_power_supply',
        series: 'Série UPS2000',
        description: 'UPS de alta eficiência para ambientes de pequeno porte, com design compacto para instalação em rack ou torre. Ideal para proteção de servidores de borda, pontos de rede e equipamentos críticos.',
        image: '/images/products/UPS2000-H/6kVA/UPS2000H_6K(F).png',
        badge: '6 kVA',
        specs: ['6 kVA', 'Alta Eficiência', 'Rack/Torre', 'Design Compacto'],
        variations: ['Frente', 'Traseira', 'Lateral Esquerda', 'Lateral Direita', 'Vista 01', 'Vista 02', 'Em Rack'],
        variationImages: {
            'Frente': '/images/products/UPS2000-H/6kVA/UPS2000H_6K(F).png',
            'Traseira': '/images/products/UPS2000-H/6kVA/UPS2000H_6K(B).png',
            'Lateral Esquerda': '/images/products/UPS2000-H/6kVA/UPS2000H_6K(LS).png',
            'Lateral Direita': '/images/products/UPS2000-H/6kVA/UPS2000H_6K(RS).png',
            'Vista 01': '/images/products/UPS2000-H/6kVA/UPS2000H_6K_01.png',
            'Vista 02': '/images/products/UPS2000-H/6kVA/UPS2000H_6K_02.png',
            'Em Rack': '/images/products/UPS2000-H/6kVA/UPS200-H 6kVA_RACK.jpg',
        },
        brand: 'Huawei',
    },

    // UPS2000-H 10kVA
    {
        id: 'ups2000-h-10kva',
        name: 'UPS2000-H (10 kVA)',
        category: 'smart_power_supply',
        series: 'Série UPS2000',
        description: 'Versão de 10 kVA do UPS2000-H, com maior capacidade para ambientes de médio porte. Combina eficiência, confiabilidade e facilidade de instalação em formato rack.',
        image: '/images/products/UPS2000-H/10kVA/UPS2000H_10K(F).png',
        badge: '10 kVA',
        specs: ['10 kVA', 'Alta Eficiência', 'Rack/Torre', 'Design Compacto'],
        variations: ['Frente', 'Traseira', 'Lateral Esquerda', 'Lateral Direita', 'Vista 01', 'Vista 02', 'Em Rack'],
        variationImages: {
            'Frente': '/images/products/UPS2000-H/10kVA/UPS2000H_10K(F).png',
            'Traseira': '/images/products/UPS2000-H/10kVA/UPS2000H_10K(B).png',
            'Lateral Esquerda': '/images/products/UPS2000-H/10kVA/UPS2000H_10K(LS).png',
            'Lateral Direita': '/images/products/UPS2000-H/10kVA/UPS2000H_10K(RS).png',
            'Vista 01': '/images/products/UPS2000-H/10kVA/UPS2000H_10K01.png',
            'Vista 02': '/images/products/UPS2000-H/10kVA/UPS2000H_10K02.png',
            'Em Rack': '/images/products/UPS2000-H/10kVA/UPS2000-H 10kVA_RACK.jpg',
        },
        brand: 'Huawei',
    },

    // UPS5000-A (30-120kVA) — já existia, atualizado com novas imagens
    {
        id: 'ups5000-a',
        name: 'UPS5000-A (30–120 kVA)',
        category: 'smart_power_supply',
        series: 'Série UPS5000',
        description: 'O UPS5000-A (30-120kVA) é um UPS online de dupla conversão, conversível para torre ou rack. Utiliza tecnologia DSP para fornecer uma onda senoidal pura e estável com tensão de 380/400/415 Vac. Oferece soluções confiáveis, econômicas, inteligentes e convenientes para cenários de média potência.',
        image: '/images/products/UPS5000-A/02-HUAWEI UPS5000-A (30-40kVA) Front View.png',
        badge: 'Tower/Rack',
        specs: ['Eficiência até 95.7%', 'Conversível Rack/Torre', 'Até 8 unidades em paralelo'],
        variations: ['30-40kVA Frontal', '30-40kVA Lateral', '60kVA Frontal', '60kVA Lateral', '60kVA Traseira'],
        variationImages: {
            '30-40kVA Frontal': '/images/products/UPS5000-A/02-HUAWEI UPS5000-A (30-40kVA) Front View.png',
            '30-40kVA Lateral': '/images/products/UPS5000-A/01-HUAWEI UPS5000-A (30-40kVA) Left View.png',
            '60kVA Frontal': '/images/products/UPS5000-A/04-HUAWEI UPS5000-A 60kVA) Front View.png',
            '60kVA Lateral': '/images/products/UPS5000-A/03-HUAWEI UPS5000-A 60kVA Left View.png',
            '60kVA Traseira': '/images/products/UPS5000-A/05-HUAWEI UPS5000-A 60KVA Rear View.png',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Cenários': 'Pequenos e médios data centers, salas de telecomunicações e switch, equipamentos de filiais.',
            'Capacidade Nominal': '30kVA/30kW a 120kVA/108kW',
            'Tensão de Entrada': '380/400/415Vac (3Ph+N+PE), ampla faixa 138-485Vac',
            'Eficiência do Sistema': 'Até 95.7% (modo online)',
            'Bateria': '360-528Vdc (Configuração flexível: 30 a 44 baterias)',
            'Expansibilidade': 'Até 8 unidades conectadas em paralelo',
            'Temperatura de Operação': '0 a 40°C',
        }
    },

    // UPS5000-E (200kW Modular)
    {
        id: 'ups5000-e',
        name: 'UPS5000-E (200 kW Modular)',
        category: 'smart_power_supply',
        series: 'Série UPS5000',
        description: 'UPS modular de alta capacidade para grandes data centers. Arquitetura modular permite escalabilidade on-demand, alta disponibilidade e manutenção sem interrupção do serviço. Ideal para missão crítica de grande porte.',
        image: '/images/products/UPS5000-E/UPS5000-E-200K-FM01.png',
        badge: 'Modular 200kW',
        specs: ['200 kW', 'Modular Escalável', 'Hot-swap', 'Alta Disponibilidade'],
        variations: ['Vista 01', 'Vista 02', 'Vista 03', 'Vista 04', 'Vista 05', 'Vista 06', 'Vista 07', 'Vista 08'],
        variationImages: {
            'Vista 01': '/images/products/UPS5000-E/UPS5000-E-200K-FM01.png',
            'Vista 02': '/images/products/UPS5000-E/UPS5000-E-200K-FM02.png',
            'Vista 03': '/images/products/UPS5000-E/UPS5000-E-200K-FM03.png',
            'Vista 04': '/images/products/UPS5000-E/UPS5000-E-200K-FM04.png',
            'Vista 05': '/images/products/UPS5000-E/UPS5000-E-200K-FM05.png',
            'Vista 06': '/images/products/UPS5000-E/UPS5000-E-200K-FM06.png',
            'Vista 07': '/images/products/UPS5000-E/UPS5000-E-200K-FM07.png',
            'Vista 08': '/images/products/UPS5000-E/UPS5000-E-200K-FM08.png',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Capacidade': '200 kW por módulo',
            'Topologia': 'Online Dupla Conversão Modular',
            'Disponibilidade': 'Hot-swap sem downtime',
            'Escalabilidade': 'Expansão on-demand por módulo',
            'Aplicação': 'Grandes data centers, missão crítica',
        }
    },

    // SmartLi — já existia, atualizado com novas imagens
    {
        id: 'smartli',
        name: 'SmartLi 3.0 (Sistema de Baterias de Lítio)',
        category: 'smart_power_supply',
        series: 'Série SmartLi',
        description: 'O SmartLi é um sistema de armazenamento de energia desenvolvido pela Huawei para UPS. Utiliza células LFP (Lítio Ferro Fosfato), as mais seguras do mercado. Sua tecnologia exclusiva de balanceamento ativo de corrente permite o uso misto de baterias novas e antigas, reduzindo Capex, enquanto o sistema BMS de três níveis garante gestão inteligente e economia de O&M.',
        image: '/images/products/SmartLi/SmartLi_0.jpg',
        badge: 'Li-ion LFP',
        specs: ['5000 Ciclos', 'Economia de 70% de Espaço', 'Uso Misto (Novas/Antigas)', 'BMS 3 Níveis'],
        variations: ['SmartLi_0', 'SmartLi_1', 'SmartLi_2', 'SmartLi_3', 'SmartLi_4', 'Vista Direita', 'Vista Frontal', 'Porta Aberta', 'Módulo 01', 'Módulo 02', 'Módulo 03'],
        variationImages: {
            'SmartLi_0': '/images/products/SmartLi/SmartLi_0.jpg',
            'SmartLi_1': '/images/products/SmartLi/SmartLi_1.jpg',
            'SmartLi_2': '/images/products/SmartLi/SmartLi_2.jpg',
            'SmartLi_3': '/images/products/SmartLi/SmartLi_3.jpg',
            'SmartLi_4': '/images/products/SmartLi/SmartLi_4.jpg',
            'Vista Direita': '/images/products/SmartLi/SmartLi3.0整机右前关门.PNG',
            'Vista Frontal': '/images/products/SmartLi/SmartLi3.0整机正视图.PNG',
            'Porta Aberta': '/images/products/SmartLi/SmartLi3.0整机正视图右前开门.PNG',
            'Módulo 01': '/images/products/SmartLi/SmartLi3.0电池模块01.png',
            'Módulo 02': '/images/products/SmartLi/SmartLi3.0电池模块02.png',
            'Módulo 03': '/images/products/SmartLi/SmartLi3.0电池模块03.png',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Cenários de Aplicação': 'Data centers corporativos (HQ), data centers de recuperação de desastres (Disaster Recovery), provedores de internet (IDC) e data centers de computação em nuvem.',
            'Confiabilidade': 'Células LFP altamente estáveis. Sistema de extinção de incêndio a nível de módulo. Vida útil de até 5000 ciclos (a 50% DOD).',
            'Eficiência': 'Alta densidade de energia, economizando 70% do espaço vs. baterias VRLA. Smart BMS reduz custos de O&M em até 80%.',
            'Simplicidade': 'Controle ativo de balanceamento de corrente suporta gabinetes mistos. Teste automático de capacidade.',
            'Especificações': 'Célula: LiFePO4. Vida útil: 15 anos. Proteção IP21.',
            'Dimensões (LxPxA)': '600 x 850 x 2000 mm. Peso: 900–1100 kg.',
        }
    },

    // PDU Modular
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

    // PDU Precisão
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

    // UPS Solutions (linha modular escalável)
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

    // FusionPower6000
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

    // ─── SMART COOLING ─────────────────────────────────────────────────────────

    // NetCol5000-A — já existia, atualizado com novas imagens
    {
        id: 'netcol5000-a',
        name: 'NetCol5000-A (25–46 kW)',
        category: 'smart_cooling',
        series: 'Série NetCol',
        description: 'O NetCol5000-A é uma solução de refrigeração inteligente de precisão in-row a ar, equipada com compressor DC inverter e design voltado a alta temperatura do ar de retorno. Ele adapta-se à carga térmica de forma inteligente, garantindo alta eficiência, confiabilidade e facilidade operacional com o uso de algoritmos exclusivos.',
        image: '/images/products/NetCol5000-A/NetCol5000-A.png',
        badge: 'In-Row Air-Cooled',
        specs: ['Compressor DC Inverter', 'EC Fans', 'iCooling (Redução de 8%)', 'Tela 7" Colorida'],
        variations: ['Vista Principal', 'Vista Alternativa', 'NetCol500-A (Menor)'],
        variationImages: {
            'Vista Principal': '/images/products/NetCol5000-A/NetCol5000-A.png',
            'Vista Alternativa': '/images/products/NetCol5000-A/NetCol5000-A_1.png',
            'NetCol500-A (Menor)': '/images/products/NetCol5000-A/NetCol500-A.png',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Cenários de Aplicação': 'Data centers modulares, de alta densidade e de pequeno ou médio porte.',
            'Capacidades': '25 kW (A025H), 35 kW (A035H) e 46 kW (A050H)',
            'Dimensões (Slim)': '300 x 1100 x 2000 mm ou 300 x 1200 x 2000 mm',
            'Dimensões (Padrão)': '600 x 1200 x 2000 mm',
            'Refrigerante': 'R410A',
            'Inteligência': 'Algoritmo iCooling reduz consumo em até 8%',
        }
    },

    // NetCol8000-A
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

    // FusionCol8000-C210H
    {
        id: 'fusioncol8000-c210h',
        name: 'FusionCol8000-C210H (Fan Wall Chilled Water Cooling)',
        category: 'smart_cooling',
        series: 'Série FusionCol',
        description: 'Refrigeração de Data Center com alto fluxo de ar utilizando água gelada.',
        image: '/images/products/2.jpg',
        badge: 'Fan Wall',
        specs: ['Chilled Water Cooling'],
        variations: ['FusionCol8000-C210H'],
        variationImages: {
            'FusionCol8000-C210H': '/images/products/Camada 23.png'
        },
        brand: 'Huawei'
    },

    // FusionCol8000-E400
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

    // FusionCol8000-E260
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

    // FusionCol8000-A 60kW
    {
        id: 'fusioncol8000-a-60',
        name: 'FusionCol8000-A (60kW)',
        category: 'smart_cooling',
        series: 'Série FusionCol',
        description: 'Refrigeração Air-cooled perimetral de 60kW.',
        image: '/images/products/Camada 24.png',
        badge: 'Air-cooled',
        specs: ['60kW'],
        brand: 'Huawei'
    },

    // FusionCol5000-A
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
    },

    // ─── SMART MODULAR DC ──────────────────────────────────────────────────────

    // FusionModule500 (FM500)
    {
        id: 'fusionmodule500',
        name: 'FusionModule500 (FM500)',
        category: 'smart_modular_dc',
        series: 'Série Smart Module',
        description: 'Solução de data center modular compacta para ambientes de borda e filiais. Integra UPS (UPS2000-H 6kVA), refrigeração, cabinetes IT e extinção de incêndio em um único módulo pré-fabricado de rápida implantação.',
        image: '/images/products/FM500/Rack FM500/FusionModule 500_0.jpg',
        badge: 'Edge/Filial',
        specs: ['UPS integrado 6kVA', 'Cooling integrado', 'Extintor integrado', 'Plug & Play'],
        variations: ['Vista 0', 'Vista 1', 'Vista 2', 'BC1L Frontal', 'BC1L Semi-front', 'BC2L Frontal', 'BC2L Semi-front', 'BC3L', 'BC3L Frontal'],
        variationImages: {
            'Vista 0': '/images/products/FM500/Rack FM500/FusionModule 500_0.jpg',
            'Vista 1': '/images/products/FM500/Rack FM500/FusionModule 500_1.jpg',
            'Vista 2': '/images/products/FM500/Rack FM500/FusionModule 500_2.jpg',
            'BC1L Frontal': '/images/products/FM500/Rack FM500/FM500_BC1L(F)02.png',
            'BC1L Semi-front': '/images/products/FM500/Rack FM500/FM500_BC1L(SF)01.png',
            'BC2L Frontal': '/images/products/FM500/Rack FM500/FM500_BC2L(F)01.png',
            'BC2L Semi-front': '/images/products/FM500/Rack FM500/FM500_BC2L(SF)01.png',
            'BC3L': '/images/products/FM500/Rack FM500/FM500-BC3L.png',
            'BC3L Frontal': '/images/products/FM500/Rack FM500/FM500_BC3L(F)01.png',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Aplicação': 'Filiais, edge computing, ambientes de pequeno porte',
            'UPS Integrado': 'UPS2000-H 6kVA',
            'Resfriamento': 'Unidade de cooling integrada',
            'Segurança': 'Extinção de incêndio 1U integrada',
            'Gabinete IT': 'Cabinete IT padrão integrado',
            'Implantação': 'Plug & Play, sem obra civil complexa',
        }
    },

    // FusionModule800 (FM800)
    {
        id: 'fusionmodule800',
        name: 'FusionModule800 (FM800)',
        category: 'smart_modular_dc',
        series: 'Série Smart Module',
        description: 'Solução de data center modular para médio porte. Suporta até 5 racks de TI com UPS2000-H 10kVA integrado, refrigeração e sistema de extinção de incêndio. Configurável em 1 a 5 colunas de racks, adequado para data centers de filiais e empresas médias.',
        image: '/images/products/FM800/Rack_FM800/FM800-bc1L.png',
        badge: 'Médio Porte',
        specs: ['UPS integrado 10kVA', 'Até 5 racks IT', 'Cooling Integrado', 'Alta Disponibilidade'],
        variations: ['BC1L', 'BC2L', 'BC3L', 'BC4L', 'BC5L', 'BC4L Frontal', 'BC4L Semi-front', 'BC5L Frontal', 'BC5L Semi-front'],
        variationImages: {
            'BC1L': '/images/products/FM800/Rack_FM800/FM800-bc1L.png',
            'BC2L': '/images/products/FM800/Rack_FM800/FM800-bc2L.png',
            'BC3L': '/images/products/FM800/Rack_FM800/FM800-bc3L.png',
            'BC4L': '/images/products/FM800/Rack_FM800/FM800-bc4L.png',
            'BC5L': '/images/products/FM800/Rack_FM800/FM800-bc5L.png',
            'BC4L Frontal': '/images/products/FM800/Cenario_FM800/FM800_bc4L(F).PNG',
            'BC4L Semi-front': '/images/products/FM800/Cenario_FM800/FM800_bc4L(SF).PNG',
            'BC5L Frontal': '/images/products/FM800/Cenario_FM800/FM800_bc5L(F).PNG',
            'BC5L Semi-front': '/images/products/FM800/Cenario_FM800/FM800_bc5L(SF).PNG',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Aplicação': 'Data centers de médio porte, filiais, empresas',
            'UPS Integrado': 'UPS2000-H 10kVA',
            'Configurações': 'BC1L a BC5L (1 a 5 colunas de racks)',
            'Resfriamento': 'Unidade de cooling indoor + outdoor integradas',
            'Segurança': 'Sistema de extinção de incêndio integrado',
            'Monitoramento': 'Sistema de monitoramento com indicadores integrados',
        }
    },

    // FusionModule2000 (FM2000) — já existia como 'smart-modular-dc', atualizado
    {
        id: 'smart-modular-dc',
        name: 'FusionModule2000 (FM2000)',
        category: 'smart_modular_dc',
        series: 'Série Smart Module',
        description: 'Solução premiada e certificada para data centers de médio e grande porte. Suporta fileiras simples e duplas com múltiplas configurações de layout. Disponível em versões Smartli (bateria de lítio) e com piso elevado.',
        image: '/images/products/FM2000/FusionModule2000_0.jpg',
        badge: 'Premiado',
        specs: ['AI Cooling', 'Certificação TIER', 'Fileira Simples/Dupla', 'SmartLi Ready'],
        variations: [
            'Vista 0', 'Vista L', 'Fileira Dupla', 'Fileira Simples', 'Porta Deslizante',
            'FM2000S NMW', 'FM2000s 02', 'Bateria In-row', 'Bateria Out-row',
            'UPS In-row', 'Sem Piso Elevado', 'Com Piso Elevado',
            'Smart Module B NMW', 'SM-B PDU'
        ],
        variationImages: {
            'Vista 0': '/images/products/FM2000/FusionModule2000_0.jpg',
            'Vista L': '/images/products/FM2000/FusionModule2000_l.jpg',
            'Fileira Dupla': '/images/products/FM2000/Dual-Row.png',
            'Fileira Simples': '/images/products/FM2000/Single Row.png',
            'Porta Deslizante': '/images/products/FM2000/Electric sliding door.png',
            'FM2000S NMW': '/images/products/FM2000/FM2000S NMW 02.png',
            'FM2000s 02': '/images/products/FM2000/FM2000s 02.png',
            'Bateria In-row': '/images/products/FM2000/Smart Module A-battery in row.png',
            'Bateria Out-row': '/images/products/FM2000/Smart Module A-battery out row.png',
            'UPS In-row': '/images/products/FM2000/Smart Module A-integrated UPS in row.png',
            'Sem Piso Elevado': '/images/products/FM2000/no raised floor scenario.png',
            'Com Piso Elevado': '/images/products/FM2000/raised floor scenario.png',
            'Smart Module B NMW': '/images/products/FM2000/Smart Module B-NMW.png',
            'SM-B PDU': '/images/products/FM2000/Smart Module B-integrated PDU.png',
        },
        brand: 'Huawei',
        detailedSpecs: {
            'Configurações': 'Fileira simples, dupla, com/sem piso elevado',
            'Opções de Bateria': 'VRLA (chumbo-ácido) ou SmartLi (lítio)',
            'Flexibilidade': 'Porta elétrica deslizante, tela 43" opcional',
            'Certificação': 'Uptime Institute TIER',
            'IA': 'Cooling inteligente com AI',
        }
    },

    // Micro Modular DC
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

    // ─── PREFABRICATED MODULAR DC ──────────────────────────────────────────────

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

    // ─── RACKS & ACESSÓRIOS ────────────────────────────────────────────────────

    {
        id: 'racks-acessorios',
        name: 'Racks & Acessórios',
        category: 'smart_modular_dc',
        series: 'Racks & Acessórios',
        description: 'Linha completa de racks e acessórios para data centers: bandejas deslizantes e fixas, organizadores de cabos, tampas cegas e racks padrão 19". Soluções para organização e otimização do espaço em qualquer ambiente de TI.',
        image: '/images/products/Racks & Acessórios/Rack 1.png',
        badge: 'Acessórios',
        specs: ['Rack Padrão 19"', 'Organização de Cabos', 'Bandejas e Acessórios'],
        variations: ['Rack 1', 'Bandeja Deslizante', 'Bandeja Fixa', 'Organizador de Cabo 1U', 'Tampa Cega 1U', 'Acessórios 1'],
        variationImages: {
            'Rack 1': '/images/products/Racks & Acessórios/Rack 1.png',
            'Bandeja Deslizante': '/images/products/Racks & Acessórios/Bandeja Deslizante.png',
            'Bandeja Fixa': '/images/products/Racks & Acessórios/Bandeja Fixa.png',
            'Organizador de Cabo 1U': '/images/products/Racks & Acessórios/Organizador Cabo 1U.png',
            'Tampa Cega 1U': '/images/products/Racks & Acessórios/Tampa Cega 1U.png',
            'Acessórios 1': '/images/products/Racks & Acessórios/Acessórios 1.png',
        },
        brand: 'Huawei',
    },
];
