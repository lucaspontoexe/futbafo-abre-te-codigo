export interface firesVersionMetadata {
    tipo_arquivo: string;
    nome: string;
    titulo: string;
    legenda: string;
    local: string;
    data: string;
    tipo: string;
    fotografo: string;
    notas: string;
    creditos: string;
    fonte: string;
    tipo_licenca: string;
    formato: string;
    horizontal_res: string;
    vertical_res: string;
    dimensoes_foto: string;
    dimensoes_objeto: string;
    link: string;
}

export interface Card {
    nome: string;
    legenda: string;
    local: string;
    data: string;
    tipo: string;
    fotografo: string;
    notas: string;
    creditos: string;
    fonte: string;
    licenca_tipo: string;
    formato: string;
    resolucao_h: string;
    resolucao_v: string;
    dimensoes_foto: string;
    dimensoes_obj: string;
    color: string;
    link: string;
}