async function getListeQuestions(fichier){
    const resp = await fetch (fichier);
    if(resp.ok){
        const json = await resp.json();
        return json.questions;
    }
    else throw new Error(resp.status);
}

async function afficheQuestions(){
    const questions = await getListeQuestions();
    console.log(questions);
}