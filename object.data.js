// const date = new Date(Date.UTC(2023, 3, 1, 3, 23, 16));

// const utc = date.toUTCString();
// // console.log(date);
// // console.log(utc);
// // console.log(new Intl.DateTimeFormat('ua-GB', { dateStyle: 'long', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date));

// function getUserTime() {
//     const dateTime = new Intl.DateTimeFormat('ua-GB', { dateStyle: 'long', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date);
//     return dateTime;
// }

// console.log(getUserTime())






// варіант 2
// const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня','липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
// const dayNames = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Субота'];

// const correctNumber = (number) => number < 10 ? `0${number}` : number;

// const getUserTime = (dateObj) => {
//     const date = correctNumber(dateObj.getDate());
//     const month = months[dateObj.getMonth()];
//     const day = dayNames[dateObj.getDay()];
//     const year = dateObj.getFullYear();
//     const hours = correctNumber(dateObj.getHours());
//     const minutes = correctNumber(dateObj.getMinutes());
//     const seconds = correctNumber(dateObj.getSeconds());
    
//     return `${date} ${month} ${year} ${hours}:${minutes}:${seconds} (${day})`
// }

// console.log(getUserTime(new Date()))
