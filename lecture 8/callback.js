function ImageProcessing(){
    setTimeout(function(){
console.log("Reading Image 1")
ReadFile(test);
test();
    },0)
    
    function test(){
        setTimeout(function(){ 
            console.log("Reading Image 2")
                },0)
        }
    }
function ReadFile(){
    console.log('Main File Readed')
}
function getData(){
    console.log('function got data')
} 
ImageProcessing(); 
ReadFile(); 
getData(); 

