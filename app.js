
//Create a MERN stack, Laravel, Django, GoLan, WordPress, java deves  students data structure  and convert it to a json string 

const devs=[
{name: "sarmin akter",
age:34,
skill:"MERN stack"
},
{name: "jakaria islam",
age:33,
skill:"Laravel"
},
{name: "kayes ahmed",
age:30,
skill:"Django"
},
{name: "sonia akter",
age:28,
skill:"Golan"
},
{name: "sadia afrin",
age:32,
skill:"Wordpress"
},
{name: "anisul islam",
age:35,
skill:"java"
}
]

console.log(JSON.stringify(devs));

let data=`[{"name":"sarmin akter","age":34,"skill":"MERN stack"},{"name":"jakaria islam","age":33,"skill":"Laravel"},{"name":"kayes ahmed","age":30,"skill":"Django"},{"name":"sonia akter","age":28,"skill":"Golan"},{"name":"sadia afrin","age":32,"skill":"Wordpress"},{"name":"anisul islam","age":35,"skill":"java"}]`

console.log(JSON.parse(data));

//Arrange a data sheet for a family phone book and publish it and convert it to a JSON String 