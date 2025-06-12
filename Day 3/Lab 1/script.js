let food = ['Burger', 'Pizza', 'Donuts', 'Pizza', 'Koshary', 'Donuts', 'Seafood','Burger']
let set = new Set(food)
set.add('Pasta')
console.log(set);
set.delete('Burger')
console.log(set)
let checkSet = (set) => {
    if (set.size > 2) {
        set.clear();
    }
}
checkSet(set);
console.log(set);