

export function getIdFromWindow() {
    // pathname could be "/items/1"
    const pathname = window.location.pathname
    return pathname.substring(7)
}


// eg 
// for http://localhost:3000/admin/items/kRx9WrRtwRjGrmzULbik/pictures
// id = getIdFromPath(3)
export function getIdFromPath (position) {
  const pathname = window.location.pathname
  const paths = pathname.split("/")
  return paths[position]
}






