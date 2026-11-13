const title = 'La venganza de Xindasvinto';
const author = 'Ruperto Gil';
const pages = 320;
const isRead = true;

const minPagesLongBook = 300;

const bookCard = `"${title}" de ${author} · ${pages} páginas · Leído: ${isRead}`;
const isLongBook = pages > minPagesLongBook;
const hasRevengeInTitle = title.toLowerCase().includes(`venganza`);
const titleLength = title.length;

console.log(bookCard, isLongBook, hasRevengeInTitle, titleLength);
