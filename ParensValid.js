// function ParensValid(str){
// 	var open = 0;
// 	for (var i=0; i < str.length; i++){
// 		if(open < 0){
// 			return false
// 		}
// 		if (str[i] == '(') {
// 			open++
// 		}
// 		else if(str[i] == ')'){
// 			open--
// 		}
// 	}
// 	if (open > 0){
// 		return false
// 	}
// 	return true
// }

// var str = 'y(3(p)p(3)r)s';
// var str1 = 'n(0(p)3'
// console.log(ParensValid(str))
// console.log(ParensValid(str1))



//     var openParens = 0;
//     var openBrackets = 0;
//     var openCurly = 0;
//     var openK = 0;
    
//     for (var i=0; i < input.length; i++){
//         if (openParens < 0 || openBrackets < 0 || openCurly < 0 || openK < 0){
//            console.log(false)
//            return false 
//         }
//         switch(input[i]){
//             case '(':
//                 openParens++
//                 break;
//             case '{':
//                 openCurly++
//                 break;
//             case '[':
//                 openBrackets++
//                 break;
//             case '<':
//                 openK++
//                 break;
//             case ')':
//                 openParens--
//                 break;
//             case '}':
//                 openCurly--
//                 break;
//             case ']':
//                 openBrackets--
//                 break;
//             case '>':
//                 openK--
//                 break;
//             default:
//                 continue
//         }
//     }
    
//     if(openParens > 0 || openBrackets > 0 || openCurly > 0 || openK > 0){
//         console.log(false)
//         return false
//     }
//     console.log(true)
//     return true


function delimiter(str){
	var array = [];

	for(var i = 0; i < str.length; i++){
		var current = str[i]

		switch (current){
			case '<':
			case '[':
			case '{':
			case '(':
				array.push(current);
				break
			case '>':
			case ']':
			case '}':
			case ')':
				if(array.length > 0){
					var open = array.pop();
					if ( current == '>' && open != '<' || current == ']' && open != '[' || current == '}' && open != '{' || current == ')' && open != '('){
						return false
					}
				}
				break
			default:
				break;
		}
	}
	if (array.length > 0){
		return false
	}
	return true
}

var x = '[<{(]>})'
console.log(delimiter(x))