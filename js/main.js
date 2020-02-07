async function recupereQuiz(id) {
    const res = await fetch(`../data/quiz${id}.json`);
    if (res.ok) {
        const json =await res.json();
        return json;
    }
    else throw new Error(res.statut);
}