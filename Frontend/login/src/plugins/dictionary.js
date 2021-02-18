
export default {
    pt_BR: {
        messages: {
            required:  'O campo é obrigatório',
            min: (_, tamanho) => `O campo é obrigatorio ter pelo menos ${tamanho} caracteres`,
            max: (_, tamanho) => `O campo pode ter até ${tamanho} caracteres`,
            email: 'Email nâo é valido',
            is: 'É necessário aceitar',
            date_format: 'Esta data não é valida',
            date_between: 'Esta data não é valida'
        }
    }
}