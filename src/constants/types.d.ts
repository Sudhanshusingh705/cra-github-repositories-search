declare module 'Repository-Type' {
  export type Repository = {
    id: string;
    full_name: string;
    description: string;
    topics: string[];
    stargazers_count: number;
    language: string;
  };

  export type Response = {
    items: Repository[];
    total_count: number;
  };

  export type QueryKeyT = [string, string, number];
}
