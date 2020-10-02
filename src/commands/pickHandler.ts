import pickBranch from '../helpers/pickBranch'
export default async (): Promise<void | Error> => {
    return await pickBranch()
}
