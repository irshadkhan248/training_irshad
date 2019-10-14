import Teacher from "../mongooseModel/Teacher"

export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const teacher = await Teacher.find().exec()
        callback(null, teacher)
    },
    getOne(data, callback) {
        Teacher.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const teacher = new Teacher(data)
        teacher.save(callback)
    }
}
