import { Response } from 'Repository-Type';

const GITHUB_API = 'https://api.github.com/search/repositories';
export const NUMBER_OF_REPOSITORIES_PER_PAGE = 10;

export async function fetchRepositories(
  query: string,
  page: number,
  perPage: number = NUMBER_OF_REPOSITORIES_PER_PAGE,
): Promise<Response> {
  if (!query) return { items: [], total_count: 0 };
  const response = await fetch(
    `${GITHUB_API}?q=${query}&per_page=${perPage}&page=${page}`,
  );

  return response.json();
}
