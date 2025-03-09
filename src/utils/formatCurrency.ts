// Adicione em um arquivo de utils
export const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    // minimumFractionDigits: 2,
  })
}
