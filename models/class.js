class Chef {
    constructor(id, fullName, birthDate, gender, city) {
        this.id = id
        this.fullName = fullName
        this.birthDate = birthDate
        this.gender = gender
        this.city = city
    }

    get formatDate() {
        const event = new Date(this.birthDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return event.toLocaleDateString(["ban", "id"], options);
    }
}

// class ChefDetailDuration extends Chef {
//     constructor(id, fullName, birthDate, gender, city, averageDuration, minDuration, maxDuration) {
//         super(id, fullName, birthDate, gender, city)
//         this.averageDuration = averageDuration
//         this.minDuration = minDuration
//         this.maxDuration = maxDuration
//     }
// }

// class Recipe {
//     constructor(id, name, duration, category, totalVote) {
//         this.id = id
//         this.name = name
//         this.duration = duration
//         this.category = category
//         this.totalVote = totalVote
//     }
// }

// class RecipeDetail {
//     constructor(id, name, duration, category, totalVote, createdDate, notes, imageUrl, ChefId, chefName) {
//         super(id, name, duration, category, totalVote)
//         this.createdDate = createdDate
//         this.notes = notes
//         this.imageUrl = imageUrl
//         this.ChefId = ChefId
//         this.chefName = chefName
//     }
// }

class Factory {
    static createBulkChef(data){
        let list = data.map((el) => {
            const {id, fullName, birthDate, gender, city} = el
            return new Chef(id, fullName, birthDate, gender, city)
        })
        return list
    }
}

module.exports = Factory

