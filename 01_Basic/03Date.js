// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// //to create date in various format
// let myCreatedDate = new Date("01-10-2024");//mm-dd-yy
// let myCreatedDate1 = new Date(2023, 0, 23); // always months are start from 0 to 11 in this format

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate1.toLocaleString());


// // create time stamp (for calculate exact value for any real time use)
// let myTimeStamp = Date.now(); // create milisecond(ms) value from 01-01-1970 till now

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // ms value from 01-01-1970 till given date

// // after converting two dates value to ms we can compare them easily

// console.log(Math.floor(Date.now()/1000)); //converting from ms to sec


// // toLocalString Functionality
// myDate.toLocaleString('default', {
//     weekday: "long"
// });