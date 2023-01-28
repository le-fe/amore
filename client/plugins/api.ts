import { $fetch, FetchOptions } from "ohmyfetch";
import AuthModule from "../repository/modules/auth";
import UserModule from "../repository/modules/user";

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthModule;
  user: UserModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.apiBase,
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    user: new UserModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
