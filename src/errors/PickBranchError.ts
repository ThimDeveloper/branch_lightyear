class PickBranchError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'PickBranchError';
  }
}

export default PickBranchError;
