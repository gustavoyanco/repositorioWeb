let dividir= function dividir (a,b){
    if (a==0 || b==0 ){
        return 'No se puede dividir por cero'
    }else{
        return a/b
    }
};
//console.log(dividir(7,3));
module.exports = dividir;
