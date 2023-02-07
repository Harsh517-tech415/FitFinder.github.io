export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '7fc1cbc07cmsh511c3c1a01420b2p1cb76djsn5bfff3000472',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '7fc1cbc07cmsh511c3c1a01420b2p1cb76djsn5bfff3000472',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
