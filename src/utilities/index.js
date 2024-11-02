
// get all coffee from localStorage

import toast from "react-hot-toast"

const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    
   if(all){
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites

   }else{
    return []
   }
}


// add to coffee localStorage
const adFavorite = coffee =>{
    const favorites = getAllFavorites()
    const isExists = favorites.find(item => item.id == coffee.id)
    if(isExists) {
    return toast.error('already exists!!')
    }
    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('successfully added!!!')

}



// remove coffee from localStorage
const removeFavorite = id =>{
    const favorites = getAllFavorites()
    const remaining = favorites.filter((coffee) => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('successfully delete!!!')
}



export {adFavorite, getAllFavorites, removeFavorite}