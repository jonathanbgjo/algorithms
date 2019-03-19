
function recursion(str,arr=[], subset = "", j=1)
{
	if (j < str.length)
	{
		newstr = ""
		for(i = j; i<str.length;i++)
		{
			newstr+=str[i]
			console.log(newstr)
		}
		recursion(newstr, arr, subset+=str[j], j++)
		recursion(newstr, arr, subset, j++)
	}
	else
	{
	arr.push(subset)
	console.log(arr)
	return arr
	}
	
}


console.log(recursion("abc"))