import { Octokit } from 'octokit'

/** Create a GitHub client */
export function createGithubClient() {
  const github = new Octokit({
    auth: import.meta.env.GITHUB_TOKEN
  })

  return github
}
