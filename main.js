// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

//Generates DNA

const pAquorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        // Changes pAquor DNA
        mutate() {
            var newDna = '';
            while (newDna != this.dna) {
                newDna = returnRandBase();
            }
            this.dna = newDna;
        },
        // Compares DNA with another pAquor
        compareDNA(otherPaquor) {
            let dnaMatches = 0;
            for (i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === otherPaquor.dna[i]) {
                    dnaMatches += 1;
                }
            }
            let percentageMatch = ((dnaMatches / this.dna.length) * 100)
            console.log(`There is a ${percentageMatch}% match of DNA`);
        },
        // Returns true or false if it is likely to survive
        willLikelySurvive() {
            let COrGMatches = 0;
            for (i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    COrGMatches += 1
                }
            }
            let percentageMatch = ((CorGMatches / this.dna.length) * 100);
            if (percentageMatch < 60) {
                return false
            } else {
                return true
            }
        }
    }
}

var perfectSpecimen = []
while (perfectSpecimen.length < 31) {
    let specimen = pAquorFactory(mockUpStrand(), returnRandBase())
    if (specimen.willLikelySurvive) {
        perfectSpecimen.push(specimen)
    }
}

console.log(perfectSpecimen);