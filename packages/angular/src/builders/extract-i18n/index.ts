import { BuilderContext, createBuilder } from "@angular-devkit/architect";
import {
  ExtractI18nBuilderOptions,
  executeExtractI18nBuilder,
} from "@angular-devkit/build-angular";
import { getProjectCwd } from "../utils/project";
import { NgxEnvSchema } from "../ngx-env/ngx-env-schema";
import { plugin } from "../utils/webpack-plugin";
import { getEnvironment } from "../utils/get-environment";

export const buildWithPlugin = (
  options: ExtractI18nBuilderOptions & NgxEnvSchema,
  context: BuilderContext
): ReturnType<typeof executeExtractI18nBuilder> => {
  return getProjectCwd(context).then((cwd: string) =>
    executeExtractI18nBuilder(
      options,
      context,
      plugin({
        ...options.ngxEnv,
        cwd,
        environment: getEnvironment(context.target.configuration),
      })
    )
  );
};

export default createBuilder<ExtractI18nBuilderOptions>(buildWithPlugin);
