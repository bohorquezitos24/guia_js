console.log("hola mundo desde index.js")
/* variable */
var x = 10
var y = 55.55

var a = 0,b = 10;
var a = b++;
console.log ("a,b")
var a = 0,b = 10;
var a = ++b;
console.log ("a,b")
var a = 0,b = 10;
var a = b--;
console.log ("a,b")
var a = 0,b = 10;
var a = --b;
console.log ("a,b")
 
if (true) {
    
} else {
    
}
var myNum1 = 7;
var myNum1 = 10;
if (myNum1 <  myNum2) {
    alert (" java script is easy to learn.");
}

if (XPathExpression) {
     // executed if condition is true 
}
 else {
    // executed if condition is true 
 }

 var myNum1 = 7;
 var myNum2 = 10;
 if (myNum1 > myNum2) {
     alert(" this is my fist contition");
 }
 else {
    alert(" this is my second condition");
 }

 var course = 1;
 var nombre='pedro';
 var text="Mi nombre Nicolas bohorquez";
 console.log(nombre)
 console.log(text)
 /**texto con caracteres especiales  */
 

 console.log(" estos caracteres se pueden agregar al texto \' ")
 var text =" hola a todos!' \ soy Nicolas un estudiante que aprende a programar.\ ";

console.log(" \'   comillas simples ")
console.log(" \"  comillas dobles")
console.log(" \\   barra invertida")
console.log(" \n   nueva linea")
console.log(" \r   retorno de carro")
console.log(" \t   tabulacion ") 
console.log(" \b   retroceso")
console.log(" \f   salto de pagina")

/**operadores matemáticos */
var a=10;
var b=10;
var c;

c=a+b;
console.log("+ adición 25+5=30"+c)

c=a-b;
console.log("- substrabción"+c)

c=a*b
console.log("* Multiplicación "+c)

c=a/b
console.log("/ división"+c)

console.log("% módulo  56%3=2")
console.log("++ incremento var a=10; ahora a=11")
console.log(" --decremento a=10--; a=9")

console.log("\n Ejemplos:")
var x=10+5;
var x=10;
console.log(" \n la suma x=10+5; es igual a x="+x)


var y=x+5+22+1000+50;
console.log("\n  Puedes utilizar varios numeros o variables:  y=x+5+22+1000+50; es igual a y="+y)

var z=x*2;
console.log("\n la multiplicación de z=x*2; es igual a z="+z)

var y=y/4;
console.log("\n la diviión de y=y/4; es igual a y="+y)

var d=26%6; /**el operador moódulo (%) retoma lo que sobra de la división. en este caso el número 2 */
console.log("\n el modulo de d=26%6; es igual a d="+d)



/**Incremento y decremento */
console.log("Incremento y decremento")

var a=0 ;
var b=10;
var a=b++;
console.log("var++  post Incremento   var a=0; b=10; var a=b++ e")
console.log("a seria igual a: a="+a+" y b seria igual a b="+b)

console.log("")
var a=0;
var b=10;
var a=++b
console.log("\n ++var pre increment var a=0; b=10; a=++b;")
console.log("el valor de a es a="+a+" y el valor de b sera b="+b)

 var a=0 ;
var b=10;
var a=b--;
console.log("El valor de a es igual a="+a+" y el valor de b="+b)

var a=0;
var b=10;
var a=--b;
console.log("\n --var pre decemento var a=0; b=10; a=--b;")
console.log("el valor de a es igual a a="+a+" y el valor de b="+b)


/**operadores de asignación */
console.log("operadores de asignación ")
console.log("=     x=y     x=y")
console.log("+=    x+=y    x=x+y")
console.log("-=    x-=y    x=x-y")
console.log("*=    x*=y    x=x*y") 
console.log("/=    x/=y    x=x/y")
console.log("%=    x%=y    x=x%y ")

console.log("varios operadores en una linea")
var x=5;
var y=4;

x-=y+=9; /**estpo seria x=x-(y+9) */
console.log(x)

var x=5
var y=4
x+=y+=9;   /**ESTO SERIA x=x+(y+9) */
console.log(x)

var a=3;
var b=6;
b-=a+=9  /**seria igual a b=b-(a+9) */
console.log(b)

var h=7;
var j=16;
h*=j+=9;  /**seria iguala a h=h*j(j+9) */
console.log(h)

var p=2;
var q=1;
var r=33
r/=p+=q; /**esta operación  r=r/(p+q) */
console.log(r)


var t=12
var u=5
t%=u /**esta operación t=t%u */
console.log(t)




/**operadores de comprobación */
console.log("operadores de comprobación")
/**igual que */
var c
c=4==10; /**falso porque no son iguales */
console.log(c)

/**identico (igual y el mismo tipo) */
var d
d=4===10;  /**falso porque no son identicos */
console.log(d)

/**No igual que !=*/
var e
e=1!=10;  /**es verdadero porque no es igual  */
console.log(e)

/**No identico "!==*/
var t
t=10!==10;  /**falso porque si son identicos */
console.log(t)


/**> mayor que  */
var g;
g=12>3;
console.log(g)

/**>= moyor o igual que */
var t
t=10>=10; 
console.log(t)

/***< menor */
var f
f=20<3;
console.log(f)

/**<= menor o igual */
var u;
u=23<=23
console.log(u);



/**Operadores logicos o booleanos */
console.log("Operadores logicos o booleanos")
var d;
d=(4>2)&&(10<15) /**comos las dos son verdaderas el resultado es verdadero */
console.log(d)

var e;
e=(4>2)||(2>4) /**si alguno de los operandos es verdadero */
console.log(e)

var r;
var t;
r=!(3>4);  /**a una expreción falsa le retorna verdadero */
t=!(65>2);  /**a una expresión verdadera la retorna falsa */
console.log(r)
console.log(t)

/**Operadores de cadena de texto */

var nombre = "Nicolas"
var apellido="Bohorquez"
document.write(nombre + "    " + apellido)


//**Ejemplo dos */
var a ="20"
var b ="500"
document.write( a+b)  /**aqui no los suma, los une porque los numeros estan entre comillas y lo toma como cadena de texto */


/**Condicionales */

var numero1=300;
var numero2=100
if (numero1>numero2) {
    alert("El numero uno es mayor que el numero dos")
    
};

var num1=600;
var num2=700;
if (num1<num2) {
    alert("El numero uno es menor que el numero dos")
    
};

/**consdicionales */

if (num2<num1) {
    alert("el numero dos es menor que numero uno")
} else {
    alert("el numero uno es menor que el numero dos")
}
var curse =1;



if (curse==1) {
    document.write(" <h1>Html tutorial</>")
    
} else {
    document.write("<h1>JavaScript tutorial </h>")
}

var curse =3;
if (curse==1) {
    document.write(" <h1>Html tutorial</>")
    
} else {
    document.write("<h1>JavaScript tutorial </h>")
}


/**switch */
var day =2;

switch (day) {
    case 1:
        document.write("Monday")
        break;
    case 2:
        document.write("Tuesday")
        break;
    case 3:
        document.write("Wednesday")
        break;
    case 4:
        document.write("anotherday")

    default:
        break;
}


/**Los bucles */
/**se declara la variable i que inicia en 1 y llegara a menor o igual a 5, luego aumentara de uno en uno =i++ */
for (i = 1; i <=5; i++) {
document.write(i+ " <br />");
}
  
document.write("__________________________________________")
document.write("\n <br />")
/**Mientras la condicion sea verdadera se repite el codigo */

var i=0;
while (i<=10) {
    document.write(i+"<br/>")
    i++;
}
 
 document.write("__");

 /**do while se ejecutara antes */

 var  i=20;

 do {
     document.write(i+"<br/>")
     i++;
 } while (i<=25);

 /**break romple el bucle de for */

 for (i=0; i<=10; i++) {
     if(i==5){
         break;
     }   
     document.write("esto es lo que pasa con break = "+i+"<br/>")
 }


 /**continue */

 for (i=0; i<=10; i++) {
    if(i==5){
        continue;
    }   
    document.write("esto es lo que pasa con continue = "+i+"<br/>")
}


/**funciones con parametros definidos */

function sayHello(name){
    alert("Hola señor Nicolas Bohorquez: " + name);
}

sayHello("Nicolas Bohorquez");    
/**alerta = hola Nicolas Bohorquez */



/**funcion con dos parametros */

function nombreEdad(nombre, edad){
    alert("Mi nombre es= "+nombre+" Y mi edad es de ="+edad+" años " )

}


nombreEdad("Nicolas Bohorquez ", 25)

/**Funciones con return */

function myFuntion(a, b){
    return a * b;
}

var x=myFuntion(5,6);


/**ventanas emergentes en javaScript */
alert("esta es una alerta de seguridad jeje")

/**ventana Prompt */

var user = prompt("Por favor ingrese su nombre");
alert(user);

/**ventana de confirm */
var result = confirm("esta es la ventana de confirmación");
if(result==true){
    alert("Gracias por su visita")
}
else{
    alert("GRacias por estar aquí===")
}

/**EMACAcrips6(es6) */
var a =10;
constb='Hola';
//let c = true;
/**diferencia entre var y let */

function varTest(){
    var x=1;
    if(true){
        var x=2; //same variable
        console.log(x);  //2
    }
    console.log(x);//2
}

function letTest(){
    let x=1;
    if(true){
        let x=2; //diferencia variable 
        console.log(x);
    }
    console.log(x);
}


/**ejmplo del uso de let en bucles */

for (let i=0; i<3; i++){
    document.write(i)
}

/**es una variable que no permite reasignar */

let name ="david";
let msg =`welcome ${name}`; 
console.log(msg);

//let a = 8;
//let b=34;
//let msg = `the sum is ${a+b}`;
//console.log(msg);

/**Bucles y funciones */ 
let list = ["x", "y", "z"];
for(let val of list) {
    console.log(val);
}


function add (x, y){
    var sum = x+ y;
    console.log(sum);
};

/**ahora con ESG: */



/***este es un problema */
const test =(a, b =3, c=42) =>{
    return a + b + c;
}
console.log(test(5));

/** objetos*/
let tree ={
    height: 10,
    color: 'green',
    grow(){
        this.height +=2;
    }
};
tree.grow();
console.log("este es el resultados de objetos:  "+tree.height);

let height = 5;
let health = 100;

let athlete ={
    height,
    health
};



/**pagina 18 */
let prop ='name';
let id = '1234';
let mobilr ='08923';

/*
let user = {
    [prop]: 'jack',
    ['user_${id}']:'${mobile}'
};
*/

var i = 0;
var a ={
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};


var param ='size';
var config ={
    [param]: 12,
    ['mobile' +
param.charAt(0).toUpperCase() +
param.slice(1)]: 4
};
console.log(config);

/**Objet.assign() */

let person ={
    name: 'Jack',
    age: 19,
    sex: 'male'
};
let student ={
    name: 'Bob',
    age:20,
    xp:'2'
};

    /**Ejemplo dos */

let person1 ={
       name:'jack',
        age: 18
    };
    
        
        console.log(person1.name);
     

/** Ejemplo tres*/
let person2={
    name:'Jack',
    age:18
};


/**Desestructuración */
let arr =['1', '2','3'];
let [one, two, three] =arr;

console.log(one);
console.log(two);
console.log(three);

/**Descomponer un array  */

let ab = () => {
    return[1, 3, 2];
};
let [one1, ,two2] =ab();




/** objeto a nuevos nombres de variable */

var o ={h: 42, s: true};
var {h: foo, s: bar}= o;

console.log(foo);

/**valores predeterminados */
var obj1 ={id_a: 42, name: "Jack"};
let {id_a=10, age= 20} = obj1;

console.log(id_a); //42
console.log(age);//20

/** Parametros rest y spread*/
/**Rest */
function containsAll(arr, _  )
{
    for (let num of nums){
        if (arr.indexof(num) === -1)
        {
            return false;
        }
    }
    return true;
}

/**Spread */
/**antes */
function myFuntion(w, x, y,z){
    console.log(w + x + y + z );
}
var args = [1, 2, 3];
myFuntion.apply(null,
    args.concat(4));

    /**despues */
    const myFuntion1= (w, x, y, z)=>
    {
        console.log(w + x + y + z);
    };
    let args_ =[1, 2, 3];
    myFuntion1( args, 4);



    var dateFields = [1970, 0, 1];
    VarDate = new
    date(...dateFields);
    console.log(date);

    /**Spread en literals de arrays */
    /**antes */
    var arr_ = ["one", "two", "five"];

    arr.splice(2, 0, "three");
    arr.splice(3, 0, "four");
    console.log(arr);

    /**despues */
    let newArr =['three', 'four'];
    let arr_1 = ['one', 
    'two', ...newArr, 'five'];
    console.log(arr);


    /**ejecución */
  
    const obj_2 = {foo: 'bar', y:5};

    const clonedObj ={...obj1}; //{foo: "bar", x:42}
    const mergedObj ={...obj1, ...obj2}; //{foo: "baz", x: 42, y:5}

    /**________________________________________ */
    
    const obj2 ={foo: 'baz', y: 5};
    const merge =(...objects)=>({...objects});

    let mergedO1bj = merge(obj1, obj2); //{0:{foo: 'bar', x: 42},1:{foo:'baz', y:5}}
    let mergedObj2 = merge(obj1, obj2);


    /**clases  */
    class Rectangle{
        constructor(height, width){
            this.height = height;
            thisd.width = width;
        }
    }
/**Objetos de la clase anterios */
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);


/**Ejemplo cuando esta nombrada */

var Square = class Rectangle{
    constructor(height, width){
        this.height=height;
        this.width=width;
    }
};


/**ejemplo cuando no esta nombrada */
var Scuare = class{
    constructor(height, width){
        this.height=height;
        this.width = width;
    }
};



/**metodos de clases */
class Rectangle_{
    constructor(height, width){
        this.height =height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height *
        this.width;
    }
}
const square_ = new Rectangle(5, 5);
console.log(square.area); //25


/**Metodo static */
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x -b.x;
        const dy =a.y -b.y;
       return Math.hypot(dx, dy);
    }
}

console.log(Point.distance(p1, p2));


/**Herencias */
classAnimal    
    constructor (Name_)

    {
        this.name=name1;
    }
    speak() 
    {
        console.log(this.name + 'makes a noise.');
    }

class dog_1 extends Animal {
    apeak(){
        console.log(this.name +'barks.')
    }
}
let dog_ =  new Dog ('Rex');
Dog.SPEAK();


/**Para utilizar los metodos del padre se utiliza la palabra super */
class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + 'makes a noise.');
    }
}
class Dog extends Animal {
    speak(){
        super.speak(); //super
        console.log(this.name + 'barks.')
    }
}

let dog =new Dog ('Rex');
dog.speak();


/**Map y set */

/**map */
let map =new Map([['K1', 'v1'],
['K2','v2']] );

console.log(map.size);

/**---- */
let map_ =new Map();
map.set('K1', 'v1').set('K2', 'v2');
console.log(map.get('K1'));
console.log(map.has('K2'));

for(let Kv of map.entries())
console.log(Kv[0]+":"+Kv[1]);


/**OBJETO SET */
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9,1]);
console.log(set.size);

let set_ =new Set();
set.add(5).add(9).add.apply(59).add(9);
console.log(set.has(9));
for(let v of set.values())
console.log(v);




/**Promises */
new Promise(function(resolve, reject){
    //work
    if(success)
    resolve(result);
    elsereject(Error("failure"));
});

function ayncFunc(work){
    return new 
    Promise(function(resolve, reject)
    {
        if (work == "")
        reject(Error("Nothing"));
        setTimeout(function(){
            resolve(work);
        }, 1000);
    });
}
asyncFunc("Work 1")//task 1
,then(function(result){
    console.log(result);
    return asyncFunc("work 2");

}, function(error){
    console.log(result);
    }, function(error){
        console.log(error);
    });
    console.log("End");
    
    /**iteradores y generadores */
    let myIterableObje = {
        [Symbol.iterator]: function* ()
        {
            yield 1, yield 2; yield 3;
        }
    }
    console.log([myIterableObj]);


    function* idMaker(){
        let index =0;
        while (index < 5)
        yield index++;
    }
    var gen = idMaker();
    console.log(gen.next().value);

    const arr_2 = ['0', '1', '4', 'a', '9','c','16']
    constmy_obj={
        [Symbol.iterator]: function*()
        {
            for(let index of arr){
                yield '${index}';
            }
        }
    };
    const all = [...my_obj]
    .map(i => parseInt(i1, 10))
    .map(Math.sqrt)
    .filter((i1)=>i<5)
    .reduce((i1, d)=> i<5);
    console.log(all);



  
    

    /**Metodos integrados */
    //antes
    [4, 5, 1, 8, 2, 0].filter(function
    (x){
        return x > 3;

    })[0];


    //Ahora
    [4, 5, 1, 8, 2, 0].findIndex(x => x > 3);

    //repeticiones string
    //antes
    console.log("foot".repeat(3));

    //Busquedas de strings

    "SoloLearn".indexOf("solo ")=== 0; //true
    "SoloLearn".indexOf("solo") ===(4- "solo".length);
    "SoloLearn".indexOf("lole")!==-1;
    "SoleLearn".indexOf("olo", 1) !==-1;
    "SoleLearn".indexOf("olo", 2)!==-1;


    //ahora
    "SoloLearn".startsWinth("solo", 0);
    "SoloLearn".endsWith("Solo", 4);
    "SoloLearn".includes("lole");
    "SoloLearn".includes("olo", 1);
    "SoloLearn".includes("olo", 2) 
