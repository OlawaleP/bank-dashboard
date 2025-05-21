
export const formatCurrency = (value: number, currency: string = '₦'): string => {

  if (value === 0) return `${currency}0`;
  if (!value) return `${currency}0`;
  
  const absValue = Math.abs(value);
  
  if (absValue >= 1_000_000_000_000) { 
    return `${currency}${(value / 1_000_000_000_000).toFixed(1)}T`;
  } else if (absValue >= 1_000_000_000) { 
    return `${currency}${(value / 1_000_000_000).toFixed(1)}B`;
  } else if (absValue >= 1_000_000) { 
    return `${currency}${(value / 1_000_000).toFixed(1)}M`;
  } else if (absValue >= 1_000) { 
    return `${currency}${(value / 1_000).toFixed(1)}K`;
  } else {
    return `${currency}${value.toFixed(2)}`;
  }
};
