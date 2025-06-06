/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * AIOffice
 * OpenAPI spec version: 0.1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';

import type {
  AIConversationOut,
  AIConversationsOut,
  CreateAIConversationInUpdate,
  DeleteAIConversationsOut,
  GetAIConversationSettingsOut,
  GetConversationOut,
  GetConversationsOut,
  GetMessagesOut,
  HTTPError,
  PostMessageIn,
  PostMessageOut,
  UpdateAIConversationIn,
  UpdateAIConversationSettingsIn,
  UpdateAIConversationSettingsOut,
  ValidationError
} from '../aIOffice.schemas';





/**
 * @summary 获取当前用户的所有对话
 */
export const getApiConversations = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetConversationsOut>> => {
    
    
    return axios.default.get(
      `/api/conversations`,options
    );
  }


export const getGetApiConversationsQueryKey = () => {
    return [`/api/conversations`] as const;
    }

    
export const getGetApiConversationsQueryOptions = <TData = Awaited<ReturnType<typeof getApiConversations>>, TError = AxiosError<HTTPError>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversations>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiConversationsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiConversations>>> = ({ signal }) => getApiConversations({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiConversations>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiConversationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiConversations>>>
export type GetApiConversationsQueryError = AxiosError<HTTPError>


/**
 * @summary 获取当前用户的所有对话
 */

export function useGetApiConversations<TData = Awaited<ReturnType<typeof getApiConversations>>, TError = AxiosError<HTTPError>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversations>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiConversationsQueryOptions(options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 创建新的AI对话
 */
export const postApiConversationAi = (
    createAIConversationInUpdate: CreateAIConversationInUpdate, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<AIConversationOut>> => {
    
    
    return axios.default.post(
      `/api/conversation/ai`,
      createAIConversationInUpdate,options
    );
  }



export const getPostApiConversationAiMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiConversationAi>>, TError,{data: CreateAIConversationInUpdate}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postApiConversationAi>>, TError,{data: CreateAIConversationInUpdate}, TContext> => {

const mutationKey = ['postApiConversationAi'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiConversationAi>>, {data: CreateAIConversationInUpdate}> = (props) => {
          const {data} = props ?? {};

          return  postApiConversationAi(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiConversationAiMutationResult = NonNullable<Awaited<ReturnType<typeof postApiConversationAi>>>
    export type PostApiConversationAiMutationBody = CreateAIConversationInUpdate
    export type PostApiConversationAiMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 创建新的AI对话
 */
export const usePostApiConversationAi = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiConversationAi>>, TError,{data: CreateAIConversationInUpdate}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof postApiConversationAi>>,
        TError,
        {data: CreateAIConversationInUpdate},
        TContext
      > => {

      const mutationOptions = getPostApiConversationAiMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 获取当前用户的所有AI对话
 */
export const getApiConversationsAi = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<AIConversationsOut>> => {
    
    
    return axios.default.get(
      `/api/conversations/ai`,options
    );
  }


export const getGetApiConversationsAiQueryKey = () => {
    return [`/api/conversations/ai`] as const;
    }

    
export const getGetApiConversationsAiQueryOptions = <TData = Awaited<ReturnType<typeof getApiConversationsAi>>, TError = AxiosError<HTTPError>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationsAi>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiConversationsAiQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiConversationsAi>>> = ({ signal }) => getApiConversationsAi({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiConversationsAi>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiConversationsAiQueryResult = NonNullable<Awaited<ReturnType<typeof getApiConversationsAi>>>
export type GetApiConversationsAiQueryError = AxiosError<HTTPError>


/**
 * @summary 获取当前用户的所有AI对话
 */

export function useGetApiConversationsAi<TData = Awaited<ReturnType<typeof getApiConversationsAi>>, TError = AxiosError<HTTPError>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationsAi>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiConversationsAiQueryOptions(options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 获取指定对话的信息
 */
export const getApiConversationConversationId = (
    conversationId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetConversationOut>> => {
    
    
    return axios.default.get(
      `/api/conversation/${conversationId}`,options
    );
  }


export const getGetApiConversationConversationIdQueryKey = (conversationId: number,) => {
    return [`/api/conversation/${conversationId}`] as const;
    }

    
export const getGetApiConversationConversationIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiConversationConversationId>>, TError = AxiosError<HTTPError>>(conversationId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationConversationId>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiConversationConversationIdQueryKey(conversationId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiConversationConversationId>>> = ({ signal }) => getApiConversationConversationId(conversationId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(conversationId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiConversationConversationId>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiConversationConversationIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiConversationConversationId>>>
export type GetApiConversationConversationIdQueryError = AxiosError<HTTPError>


/**
 * @summary 获取指定对话的信息
 */

export function useGetApiConversationConversationId<TData = Awaited<ReturnType<typeof getApiConversationConversationId>>, TError = AxiosError<HTTPError>>(
 conversationId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationConversationId>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiConversationConversationIdQueryOptions(conversationId,options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 更新AI对话的显示名称
 */
export const putApiConversationAiConversationId = (
    conversationId: number,
    updateAIConversationIn: UpdateAIConversationIn, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<AIConversationOut>> => {
    
    
    return axios.default.put(
      `/api/conversation/ai/${conversationId}`,
      updateAIConversationIn,options
    );
  }



export const getPutApiConversationAiConversationIdMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiConversationAiConversationId>>, TError,{conversationId: number;data: UpdateAIConversationIn}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putApiConversationAiConversationId>>, TError,{conversationId: number;data: UpdateAIConversationIn}, TContext> => {

const mutationKey = ['putApiConversationAiConversationId'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiConversationAiConversationId>>, {conversationId: number;data: UpdateAIConversationIn}> = (props) => {
          const {conversationId,data} = props ?? {};

          return  putApiConversationAiConversationId(conversationId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiConversationAiConversationIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiConversationAiConversationId>>>
    export type PutApiConversationAiConversationIdMutationBody = UpdateAIConversationIn
    export type PutApiConversationAiConversationIdMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 更新AI对话的显示名称
 */
export const usePutApiConversationAiConversationId = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiConversationAiConversationId>>, TError,{conversationId: number;data: UpdateAIConversationIn}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof putApiConversationAiConversationId>>,
        TError,
        {conversationId: number;data: UpdateAIConversationIn},
        TContext
      > => {

      const mutationOptions = getPutApiConversationAiConversationIdMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 删除AI对话
 */
export const deleteApiConversationAiConversationId = (
    conversationId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<DeleteAIConversationsOut>> => {
    
    
    return axios.default.delete(
      `/api/conversation/ai/${conversationId}`,options
    );
  }



export const getDeleteApiConversationAiConversationIdMutationOptions = <TError = AxiosError<HTTPError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiConversationAiConversationId>>, TError,{conversationId: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiConversationAiConversationId>>, TError,{conversationId: number}, TContext> => {

const mutationKey = ['deleteApiConversationAiConversationId'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiConversationAiConversationId>>, {conversationId: number}> = (props) => {
          const {conversationId} = props ?? {};

          return  deleteApiConversationAiConversationId(conversationId,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiConversationAiConversationIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiConversationAiConversationId>>>
    
    export type DeleteApiConversationAiConversationIdMutationError = AxiosError<HTTPError>

    /**
 * @summary 删除AI对话
 */
export const useDeleteApiConversationAiConversationId = <TError = AxiosError<HTTPError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiConversationAiConversationId>>, TError,{conversationId: number}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiConversationAiConversationId>>,
        TError,
        {conversationId: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiConversationAiConversationIdMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 向指定对话发送消息
 */
export const postApiConversationConversationIdMessage = (
    conversationId: number,
    postMessageIn: PostMessageIn, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostMessageOut>> => {
    
    
    return axios.default.post(
      `/api/conversation/${conversationId}/message`,
      postMessageIn,options
    );
  }



export const getPostApiConversationConversationIdMessageMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiConversationConversationIdMessage>>, TError,{conversationId: number;data: PostMessageIn}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postApiConversationConversationIdMessage>>, TError,{conversationId: number;data: PostMessageIn}, TContext> => {

const mutationKey = ['postApiConversationConversationIdMessage'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiConversationConversationIdMessage>>, {conversationId: number;data: PostMessageIn}> = (props) => {
          const {conversationId,data} = props ?? {};

          return  postApiConversationConversationIdMessage(conversationId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiConversationConversationIdMessageMutationResult = NonNullable<Awaited<ReturnType<typeof postApiConversationConversationIdMessage>>>
    export type PostApiConversationConversationIdMessageMutationBody = PostMessageIn
    export type PostApiConversationConversationIdMessageMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 向指定对话发送消息
 */
export const usePostApiConversationConversationIdMessage = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiConversationConversationIdMessage>>, TError,{conversationId: number;data: PostMessageIn}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof postApiConversationConversationIdMessage>>,
        TError,
        {conversationId: number;data: PostMessageIn},
        TContext
      > => {

      const mutationOptions = getPostApiConversationConversationIdMessageMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 获取指定对话内的消息列表，按创建时间降序排序
 */
export const getApiConversationConversationIdMessages = (
    conversationId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetMessagesOut>> => {
    
    
    return axios.default.get(
      `/api/conversation/${conversationId}/messages`,options
    );
  }


export const getGetApiConversationConversationIdMessagesQueryKey = (conversationId: number,) => {
    return [`/api/conversation/${conversationId}/messages`] as const;
    }

    
export const getGetApiConversationConversationIdMessagesQueryOptions = <TData = Awaited<ReturnType<typeof getApiConversationConversationIdMessages>>, TError = AxiosError<HTTPError>>(conversationId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationConversationIdMessages>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiConversationConversationIdMessagesQueryKey(conversationId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiConversationConversationIdMessages>>> = ({ signal }) => getApiConversationConversationIdMessages(conversationId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(conversationId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiConversationConversationIdMessages>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiConversationConversationIdMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiConversationConversationIdMessages>>>
export type GetApiConversationConversationIdMessagesQueryError = AxiosError<HTTPError>


/**
 * @summary 获取指定对话内的消息列表，按创建时间降序排序
 */

export function useGetApiConversationConversationIdMessages<TData = Awaited<ReturnType<typeof getApiConversationConversationIdMessages>>, TError = AxiosError<HTTPError>>(
 conversationId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationConversationIdMessages>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiConversationConversationIdMessagesQueryOptions(conversationId,options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 获取AI对话设置
 */
export const getApiConversationAiConversationIdSettings = (
    conversationId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetAIConversationSettingsOut>> => {
    
    
    return axios.default.get(
      `/api/conversation/ai/${conversationId}/settings`,options
    );
  }


export const getGetApiConversationAiConversationIdSettingsQueryKey = (conversationId: number,) => {
    return [`/api/conversation/ai/${conversationId}/settings`] as const;
    }

    
export const getGetApiConversationAiConversationIdSettingsQueryOptions = <TData = Awaited<ReturnType<typeof getApiConversationAiConversationIdSettings>>, TError = AxiosError<HTTPError>>(conversationId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationAiConversationIdSettings>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiConversationAiConversationIdSettingsQueryKey(conversationId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiConversationAiConversationIdSettings>>> = ({ signal }) => getApiConversationAiConversationIdSettings(conversationId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(conversationId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiConversationAiConversationIdSettings>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiConversationAiConversationIdSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiConversationAiConversationIdSettings>>>
export type GetApiConversationAiConversationIdSettingsQueryError = AxiosError<HTTPError>


/**
 * @summary 获取AI对话设置
 */

export function useGetApiConversationAiConversationIdSettings<TData = Awaited<ReturnType<typeof getApiConversationAiConversationIdSettings>>, TError = AxiosError<HTTPError>>(
 conversationId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiConversationAiConversationIdSettings>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiConversationAiConversationIdSettingsQueryOptions(conversationId,options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 更新AI对话设置
 */
export const putApiConversationAiConversationIdSettings = (
    conversationId: number,
    updateAIConversationSettingsIn: UpdateAIConversationSettingsIn, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UpdateAIConversationSettingsOut>> => {
    
    
    return axios.default.put(
      `/api/conversation/ai/${conversationId}/settings`,
      updateAIConversationSettingsIn,options
    );
  }



export const getPutApiConversationAiConversationIdSettingsMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiConversationAiConversationIdSettings>>, TError,{conversationId: number;data: UpdateAIConversationSettingsIn}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putApiConversationAiConversationIdSettings>>, TError,{conversationId: number;data: UpdateAIConversationSettingsIn}, TContext> => {

const mutationKey = ['putApiConversationAiConversationIdSettings'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiConversationAiConversationIdSettings>>, {conversationId: number;data: UpdateAIConversationSettingsIn}> = (props) => {
          const {conversationId,data} = props ?? {};

          return  putApiConversationAiConversationIdSettings(conversationId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiConversationAiConversationIdSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiConversationAiConversationIdSettings>>>
    export type PutApiConversationAiConversationIdSettingsMutationBody = UpdateAIConversationSettingsIn
    export type PutApiConversationAiConversationIdSettingsMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 更新AI对话设置
 */
export const usePutApiConversationAiConversationIdSettings = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiConversationAiConversationIdSettings>>, TError,{conversationId: number;data: UpdateAIConversationSettingsIn}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof putApiConversationAiConversationIdSettings>>,
        TError,
        {conversationId: number;data: UpdateAIConversationSettingsIn},
        TContext
      > => {

      const mutationOptions = getPutApiConversationAiConversationIdSettingsMutationOptions(options);

      return useMutation(mutationOptions );
    }
    