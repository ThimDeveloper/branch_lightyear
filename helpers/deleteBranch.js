import createBranchPromptPromise from "./createBranchPromptPromise";

export default async () => {
  const result = await createBranchPromptPromise(
    "Which branch would you like to delete?"
  );
  console.log(result);
  return;
};
