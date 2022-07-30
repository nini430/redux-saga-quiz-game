const apiUrl="https://opentdb.com/api.php?amount=10&type=boolean";


export const fetchQuizFromApi=()=>{
    return fetch(apiUrl)
    .then(response=>response.json())
    .then(questions=>questions.results)
    .catch(err=>Promise.reject(err))
}