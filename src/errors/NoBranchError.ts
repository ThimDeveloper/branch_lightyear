class NoBranchError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NoBranchError';
  }
}

export default NoBranchError;
