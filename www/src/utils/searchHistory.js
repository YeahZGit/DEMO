export function setSearchHistory (queryStr) {
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []

  for (let i = 0; i < searchHistory.length; i++) {
    if (searchHistory[i] === queryStr) {
      searchHistory.splice(i, 1)
      break
    }
  }

  if (searchHistory.length > 5) {
    searchHistory.pop()
  }
  searchHistory.unshift(queryStr)
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
}

export function getSearchHistory () {
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
  return searchHistory
}
