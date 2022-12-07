class Person{
    //code here

static runningId = 1
constructor( name = 'N/A'){
this.id = Person.runningId++
this.name = name
this.wishlist = []
}

getId(){
    return this.id
}

getName(){
    return this.name
}

getWishlist(){
    return this.wishlist
}

addWishlist(item){
     if( item  === undefined || item === null){
        return undefined
    }
    this.wishlist.push(item)
    return this.wishlist.length
} 

removeWishlist(item){
    if( item  === undefined || item === null){
        return undefined
    }
    else if( !this.wishlist.includes(item)  ){
            return 'not found to remove'
        }

    else { this.wishlist = this.wishlist.filter(e => e != item)}
    return item 
}

findWishlist(item){
    if( item  === undefined || item === null ){
        return undefined
    }
   else if (!this.wishlist.includes(item)){
    return "not found"
   }
   return {
    index: this.wishlist.indexOf(item),
    value: item
   }

}





}

module.exports = {Person}


