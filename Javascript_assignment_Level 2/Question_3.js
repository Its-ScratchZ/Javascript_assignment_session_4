// Create a constant and try to create another constant with the same name and see what happens, fix the mistake if something goes wrong.


/* When a variable is declared using const keyword, we cannot further change the value of the declared variable after its first declaration as the variable is now constant and the value assigned is its final value.
But there is a workaround we can change the value of the property of the object which is declared by constant as shown below : 
*/
const MyInfo = {
    Name : 'Anubhav Karki',
    Age  : 19,
    Grade : 'Undergrad',
    Gender : 'Male'
};
console.log(MyInfo);


MyInfo.Name = 'Bibek Subedi';
console.log(MyInfo)


