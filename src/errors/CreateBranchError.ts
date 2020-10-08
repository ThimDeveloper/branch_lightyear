class CreateBranchError extends Error {
    constructor(message?: string) {
        super(message)
        this.name = 'CreateBranchError'
    }
}

export default CreateBranchError
