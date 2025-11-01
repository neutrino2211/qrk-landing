export interface BlogMetadata {
  title: string;
  author: string;
  publishedAt: string;
}

export interface BlogModule {
  default: React.ComponentType;
  metadata: BlogMetadata;
}
