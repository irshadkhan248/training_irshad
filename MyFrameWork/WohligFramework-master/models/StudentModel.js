export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const students = await Student.find(_query).exec()
        callback(null, students)
    },
    getOne(data, callback) {
        Student.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const student = new Student(data)
        student.save(callback)
    },
    deleteStudent: (data, callback) => {
        // console.log(data)
        Student.deleteOne({ _id: data.id }).exec(callback)
    },

    updateStudent: (data, body, callback) => {
        // console.log(data)
        // console.log(body)
        Student.updateOne(
            { _id: data.id },
            {
                $set: body
            }
        ).exec(callback)
    }
}
