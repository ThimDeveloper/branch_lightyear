class DeleteBranchError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DeleteBranchError';
  }
}

export default DeleteBranchError;
