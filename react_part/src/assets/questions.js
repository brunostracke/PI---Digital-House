export const questions = [
    {title:'Nome do paciente',
    type:1,
    classe: 'Informações do paciente'
    },
    {title:'Idade do paciente',
    type:1,
    classe: 'Informações do paciente'
    },
    {title: 'Sexo do paciente',
    type:2,
    options: ['Feminino', 'Masculino', 'Outro'],
    classe: 'Informações do paciente'
    },
    {title:'Como chegou ao PS?',
    type:2,
    options: ['Samu','Siate','Procura direta'],
    classe: 'Informações do paciente'
    },
    {title:'Vítima de',
    type:1,
    classe: 'Informações do paciente'
    },
    {title:'Proteção',
    type:2,
    options: ['capacete','cinto','nenhuma'],
    classe: 'Informações do paciente'
    },
    {title:'Comorbidades:',
    type:1,
    classe: 'Informações do paciente'
    },
    {title: 'Medicações prévias/recorrentes: ',
    type: 1,
    classe: 'Informações do paciente'
    },
    {title:'Alergias:',
    type:1,
    classe: 'Informações do paciente'
    },
    {title: 'Vias Aéreas',
    type:1,
    classe: 'A'
    },
    {title:'Colar cervical',
    type:2,
    options:['Sim','Não'],
    classe: 'A'
    },
    {title:'Tábua rígida',
    type:2,
    options: ['Sim','Não'],
    classe: 'A'
    },
    {title:'Cervicalgia',
    type:2,
    options: ['Sim','Não'],
    classe: 'A'
    },
    {title:'SatO2 (%)',
    type:1,
    classe: 'B'
    },
    {title:'FC (bpm)',
    type:1,
    classe: 'C'
    },
    {title:'MV',
    type:2,
    options: ['presente bilateral','ausente esquerda','ausente direita','diminuído esquerda','diminuído direita'],
    classe: 'B'
    },
    {title:'Expansibilidade',
    type:2,
    options: ['normal bilateral','diminuída direita','diminuída esquerda'],
    classe: 'B'
    },
    {title:'Ruídos adventícios:',
    type:1,
    classe: 'B'
    },
    {title:'Arcos costais',
    type:2,
    options: ['indolores','dolorosos à esquerda','dolorosos à direita'],
    classe: 'B'
    },
    {title:'Crepitação:',
    type:3,
    options: ['ausente ','presente'],
    placeholder: 'Se presente, onde?',
    classe: 'B'
    },
    {title:'Enfisema subcutâneo:',
    type:3,
    options: ['ausente ','presente'],
    placeholder: 'Se presente, onde?',
    classe: 'B'
    },
    {title:'Desconforto respiratório:',
    type:2,
    options: ['ausente ','presente'],
    classe: 'B'
    },
    {title:'PA (mmHg):',
    type:1,
    placeholder: 'Exemplo: 120-80',
    classe: 'C'
    },
    {title:'Bulhas:',
    type:3,
    options: ['rítmicas normofonéticas','alteradas'],
    placeholder: 'Se alteradas, como?',
    classe: 'C'
    },
    {title:'Sopros:',
    type:3,
    options: ['ausentes','presentes'],
    placeholder: 'Se presentes, como?',
    classe: 'C'
    },
    {title:'Pulso periférico',
    type:3,
    options: ['palpável','impalpável'],
    placeholder: 'Onde?',
    classe: 'C'
    },
    {title:'Pele:',
    type:3,
    options: ['normocorada-normo-hidratada','alterada'],
    placeholder: 'Se alterada: como?',
    classe: 'C'
    },
    {title:'Enchimento capilar:',
    type:2,
    options: ['<2 segundos','>2 segundos'],
    classe: 'C'
    },
    {title:'Abdome (Parte 1):',
    type:2,
    options: ['globoso','gravídico','plano','escavado'],
    classe: 'C'
    },
    {title:'Abdome (Parte 2):',
    type:2,
    options: ['doloroso','indolor'],
    classe: 'C'
    },
    {title:'Pelve:',
    type:2,
    options: ['estável','instável','dolorosa'],
    classe: 'C'
    },
    {title:'Nível de consciência:',
    type:2,
    options: ['LOTE','confuso','sonolento','comatoso'],
    classe: 'D'
    },
    {title:'Glasgow:',
    type:1,
    classe: 'D'
    },
    {title:'Episódios de vômito:',
    type:1,
    classe: 'D'
    },
    {title:'Perda de consciência:',
    type:3,
    options: ['não','sim'],
    placeholder: 'Se sim, por quanto tempo?',
    classe: 'D'
    },
    {title:'Convulsões:',
    type:3,
    options: ['não','sim'],
    placeholder: 'Se sim, quantos episódios?',
    classe: 'D'
    },
    {title:'Outras alterações:',
    type:1,
    classe: 'E'
    },
    {title:'Medicações (no PS):',
    type:1,
    classe: 'Conduta'
    },
    {title:'Exames complementares:',
    type:1,
    classe: 'Conduta'
    },
    {title:'Observações:',
    type:1,
    classe: 'Conduta'
    }    
]