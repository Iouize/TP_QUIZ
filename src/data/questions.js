export async function getQuestions(idQuiz){
    const resp = await fetch (`./data/quiz${idQuiz}.json`);
    if(resp.ok){
        const json = await resp.json();
        return json.questions;
    }
    else throw new Error(resp.status);
}
