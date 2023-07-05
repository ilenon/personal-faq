/**
 * ###############################################################################################################
 * ##### A Promise is an object representing the eventual completion or failure of an asynchronous operation #####
 * ###############################################################################################################
 */
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
const myPromise = () => {
  return new Promise((resolve, reject) => {
    if (!true) {
      resolve('Return a resolved response')
    } else {
      reject('Returns an error description')
    }
  })
}
// This promise (myPromise) represents the completion of the resolve or reject that I passed in
myPromise()
  .then(res => console.log(res)) //Return a resolved response
  .catch(err => console.log(err)) //Returns an error description
  .then(() => console.log('After Catch!')) // It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain.

/**
 * PROMISE.ALL
 */
const getPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const post = await response.json()
  return post;
}
const promises = [
  getPost(3),
  getPost(87),
  getPost(6),
]
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill.
Promise.all(promises)
  .then(data => console.log(data))
