const BASE_URL = `https://picsum.photos/v2`

export async function getList(page = 1) {
  const response = await fetch(`${BASE_URL}/list?&random=2?page=${page}`)
  const photos = await response.json()
  return photos
}
console.log(getList(1));
export function formatPhotoUri(id, width, height) {
  return `https://picsum.photos/id/${id}/${Math.floor(width)}/${Math.floor(
    height
  )}`
}

// const BASE_URL = `https://jsonplaceholder.typicode.com/photos`

// export async function getList(page=1) {
//   const response = await fetch(`${BASE_URL}/?_limit=20&_start=2&_page=${page}`)
//   const photos = await response.json()
//   return photos
// }


// export function formatPhotoUri(id, width=200, height=400) {
//   return `https://jsonplaceholder.typicode.com/photos/${id}`
// }
