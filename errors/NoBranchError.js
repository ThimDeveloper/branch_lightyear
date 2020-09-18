class NoBranchError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoBranchError';
  }
}

export default NoBranchError;
