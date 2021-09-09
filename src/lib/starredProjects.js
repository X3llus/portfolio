let cachedProjects = [];
let cacheTime;

export async function checkCached() {
  return !cacheTime || cacheTime < Date.now();
}

export async function cacheStarred(data) {
  if (process.env.NODE_ENV === 'development') {
    global._mongoClientPromise = data;
    cachedProjects = global._mongoClientPromise;
  } else {
    cachedProjects = data;
  }
  const myDate = new Date(Date.now());
  myDate.setHours(myDate.getHours() + 24);
  cacheTime = myDate;
}

export { cachedProjects };