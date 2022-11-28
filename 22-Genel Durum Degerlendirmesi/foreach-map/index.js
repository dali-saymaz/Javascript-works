let items = [1,2,3,4,5];
let new_item = items.forEach(function(item,index){
	return  items[index]=item+1;
})
console.log(new_item)
console.log(items)


let items = [1,2,3,4,5];
items.forEach(function(item,index){
	  items[index]=item+1;
	  console.log(items)
})


let items = [1,2,3,4,5];
let new_item = items.map(function(item,index){
	return  item+1;
})
console.log(new_item) 