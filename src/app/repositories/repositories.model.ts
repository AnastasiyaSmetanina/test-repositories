export interface RepositoriesSearchRequest {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}

export interface Repository {
  id: string;
  name: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  description: string;
  full_name: string;
  owner: Owner;
}

export interface Languages {
  [lang: string]: number
}

export interface Contributor {
  login: string;
  avatar_url: string;
  contributions: number;
}

export interface Owner {
  login: string;
  avatar_url: string;
  html_url: number;
}
