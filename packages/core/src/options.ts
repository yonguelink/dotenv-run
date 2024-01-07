import type { DotenvConfigOptions } from "dotenv";

export interface DotenvRunOptions {
  cwd?: string; // Path to current working directory
  dotenv?: DotenvConfigOptions;
  environment?: string; // Environment to load
  files?: string | string[]; // Environment files to load
  prefix?: string | RegExp; // Filter keys to inject
  root?: string; // Path to root workspace
  nodeEnv?: boolean; // Node environment
  verbose?: boolean; // Print verbose output
}
