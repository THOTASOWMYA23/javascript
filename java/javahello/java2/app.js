let name ="Helloworld";
 let pattern ="";
 for(let i = 0;i< name.length;i++){
    pattern +=name.substring(-1,0,i+1)+ "\n";
}
 console.log(pattern);