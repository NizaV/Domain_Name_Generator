let pronouns = ['the', 'our', 'they'];
let adjs = ['running', 'jumping',];
let nouns = ['rabbit', 'monkey', 'child', 'jogger'];
let exts = ['.com', '.edu', '.net']

for (let pronoun of pronouns) {
    //console.log(pronoun);
    for (let adj of adjs) {
        //console.log(adj);
        for (let noun of nouns) {
            for (let ext of exts) {
                console.log(`${pronoun + adj + noun + ext}`);
            };
        };
    };
};


