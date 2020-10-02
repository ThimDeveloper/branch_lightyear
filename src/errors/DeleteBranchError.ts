class DeleteBranchError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'DeleteBranchError';
  }
}

export default DeleteBranchError;
