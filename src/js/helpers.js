export const getDropoffColor = (rawPerc, min, max) => {
    const base = (max - min);
    const perc = base === 0 ? 100 : (rawPerc - min) / base * 100;
    const r = perc <= 0 ? 0 : 255;
    const g = perc <= 0 ? 255 : 255 - 255 * Math.log10(perc > 0 && perc < 1 ? 1 : perc) / 2;
    const b = 60;
    const h = r * 0x10000 + Math.round(g) * 0x100 + b * 0x1;
    return `#${(`000000${h.toString(16)}`).slice(-6)}`;
};

export default { getDropoffColor };
