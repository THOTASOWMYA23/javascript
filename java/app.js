function printTriangle(height) {
    for(let i=1; i<=height;i++)
    {
        let row = '';
        for (let j=1;j<=i;j++){
            row +='HELLOWORLD';
        }
         console.log(row);
    }
}
printTriangle(5);