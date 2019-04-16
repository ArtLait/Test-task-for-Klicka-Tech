const randomNames = ['The kingston trio', 'Led Zeppelin', 'Miles Davis', 'Muddy Waters'];
const randomSongs = ['Tom Dooley', 'Kashmir', 'Blue in Green', 'Mannish boy'];
const randomTypes = ['Folk', 'Rock', 'Jazz', 'Blues'];

class MusicModel {

    rnd(arr) {
        return arr[Math.round(Math.random() * this.rndCount)]
    }

    rndDate() {
        const year = Math.round(Math.random() * 120)
        return new Date(1900 + year, 1, 1);
    }

    constructor(rndCount = 3) {
        this.rndCount = rndCount;
        this.name = this.rnd(randomNames);
        this.song = this.rnd(randomSongs);
        this.type = this.rnd(randomTypes);
        this.date = this.rndDate();
        delete this.rndCount;
    }
}

const createRandomMusicData = (count = 10) => {
    return (Array.from({length: count})).map(() => new MusicModel()) 
}

module.exports = createRandomMusicData;