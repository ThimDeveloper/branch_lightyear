class PickBranchError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PickBranchError';
  }
}

export default PickBranchError;
