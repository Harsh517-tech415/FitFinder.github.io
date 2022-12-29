export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '94984b8396msha1a5e342ee449fcp110992jsn419bbf140faf',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
export const quotes = {
  methode: "GET",
  headers: {
    "X-RapidAPI-Key": "34fa2a5eb7mshe618e4650082030p1f0edbjsnf5cfcc9d1211",
    "X-RapidAPI-Host": "anime-quotes1.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34fa2a5eb7mshe618e4650082030p1f0edbjsnf5cfcc9d1211",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
