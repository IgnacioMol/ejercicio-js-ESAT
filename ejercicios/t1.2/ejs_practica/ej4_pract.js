const userName = 'Rodofasio';
const unreadMessages = 3;
const isOnline = true;
const isBlocked = false;
const country = 'Francia';

const welcome = `Hola, ${userName}. Tienes ${unreadMessages} mensajes sin leer`;
const canChat = isOnline && !isBlocked;
const isForeign = country !== 'España';

console.log(welcome);
console.log(canChat, isForeign);
