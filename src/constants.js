const currentYear = new Date().getFullYear();
export const nextYear = currentYear + 1;
export const countDate = new Date(`Jan 1, ${nextYear} 00:00:00`);
