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
  AddDepartmentMemberIn,
  AddDepartmentMemberOut,
  CreateDepartmentInUpdate,
  CreateDepartmentOut,
  Department,
  GetApiDepartmentsDepartmentIdMembersParams,
  GetApiDepartmentsParams,
  GetDepartmentMembersOut,
  GetDepartmentsOut,
  HTTPError,
  UpdateDepartmentIn,
  UpdateDepartmentMemberRoleIn,
  UpdateDepartmentOut,
  ValidationError
} from '../aIOffice.schemas';





/**
 * @summary 获取部门列表
 */
export const getApiDepartments = (
    params?: GetApiDepartmentsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetDepartmentsOut>> => {
    
    
    return axios.default.get(
      `/api/departments`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetApiDepartmentsQueryKey = (params?: GetApiDepartmentsParams,) => {
    return [`/api/departments`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiDepartmentsQueryOptions = <TData = Awaited<ReturnType<typeof getApiDepartments>>, TError = AxiosError<HTTPError | ValidationError>>(params?: GetApiDepartmentsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiDepartments>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiDepartmentsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiDepartments>>> = ({ signal }) => getApiDepartments(params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiDepartments>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiDepartmentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiDepartments>>>
export type GetApiDepartmentsQueryError = AxiosError<HTTPError | ValidationError>


/**
 * @summary 获取部门列表
 */

export function useGetApiDepartments<TData = Awaited<ReturnType<typeof getApiDepartments>>, TError = AxiosError<HTTPError | ValidationError>>(
 params?: GetApiDepartmentsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiDepartments>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiDepartmentsQueryOptions(params,options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 创建新部门（需要管理员权限）
 */
export const postApiDepartments = (
    createDepartmentInUpdate: CreateDepartmentInUpdate, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<CreateDepartmentOut>> => {
    
    
    return axios.default.post(
      `/api/departments`,
      createDepartmentInUpdate,options
    );
  }



export const getPostApiDepartmentsMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDepartments>>, TError,{data: CreateDepartmentInUpdate}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postApiDepartments>>, TError,{data: CreateDepartmentInUpdate}, TContext> => {

const mutationKey = ['postApiDepartments'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiDepartments>>, {data: CreateDepartmentInUpdate}> = (props) => {
          const {data} = props ?? {};

          return  postApiDepartments(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiDepartmentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiDepartments>>>
    export type PostApiDepartmentsMutationBody = CreateDepartmentInUpdate
    export type PostApiDepartmentsMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 创建新部门（需要管理员权限）
 */
export const usePostApiDepartments = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDepartments>>, TError,{data: CreateDepartmentInUpdate}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof postApiDepartments>>,
        TError,
        {data: CreateDepartmentInUpdate},
        TContext
      > => {

      const mutationOptions = getPostApiDepartmentsMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 获取部门详情
 */
export const getApiDepartmentsDepartmentId = (
    departmentId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Department>> => {
    
    
    return axios.default.get(
      `/api/departments/${departmentId}`,options
    );
  }


export const getGetApiDepartmentsDepartmentIdQueryKey = (departmentId: number,) => {
    return [`/api/departments/${departmentId}`] as const;
    }

    
export const getGetApiDepartmentsDepartmentIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiDepartmentsDepartmentId>>, TError = AxiosError<HTTPError>>(departmentId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiDepartmentsDepartmentId>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiDepartmentsDepartmentIdQueryKey(departmentId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiDepartmentsDepartmentId>>> = ({ signal }) => getApiDepartmentsDepartmentId(departmentId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(departmentId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiDepartmentsDepartmentId>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiDepartmentsDepartmentIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiDepartmentsDepartmentId>>>
export type GetApiDepartmentsDepartmentIdQueryError = AxiosError<HTTPError>


/**
 * @summary 获取部门详情
 */

export function useGetApiDepartmentsDepartmentId<TData = Awaited<ReturnType<typeof getApiDepartmentsDepartmentId>>, TError = AxiosError<HTTPError>>(
 departmentId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiDepartmentsDepartmentId>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiDepartmentsDepartmentIdQueryOptions(departmentId,options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 更新部门信息（需要管理员权限）
 */
export const putApiDepartmentsDepartmentId = (
    departmentId: number,
    updateDepartmentIn: UpdateDepartmentIn, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UpdateDepartmentOut>> => {
    
    
    return axios.default.put(
      `/api/departments/${departmentId}`,
      updateDepartmentIn,options
    );
  }



export const getPutApiDepartmentsDepartmentIdMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiDepartmentsDepartmentId>>, TError,{departmentId: number;data: UpdateDepartmentIn}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putApiDepartmentsDepartmentId>>, TError,{departmentId: number;data: UpdateDepartmentIn}, TContext> => {

const mutationKey = ['putApiDepartmentsDepartmentId'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiDepartmentsDepartmentId>>, {departmentId: number;data: UpdateDepartmentIn}> = (props) => {
          const {departmentId,data} = props ?? {};

          return  putApiDepartmentsDepartmentId(departmentId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiDepartmentsDepartmentIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiDepartmentsDepartmentId>>>
    export type PutApiDepartmentsDepartmentIdMutationBody = UpdateDepartmentIn
    export type PutApiDepartmentsDepartmentIdMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 更新部门信息（需要管理员权限）
 */
export const usePutApiDepartmentsDepartmentId = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiDepartmentsDepartmentId>>, TError,{departmentId: number;data: UpdateDepartmentIn}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof putApiDepartmentsDepartmentId>>,
        TError,
        {departmentId: number;data: UpdateDepartmentIn},
        TContext
      > => {

      const mutationOptions = getPutApiDepartmentsDepartmentIdMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 删除部门（需要管理员权限）
 */
export const deleteApiDepartmentsDepartmentId = (
    departmentId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    
    
    return axios.default.delete(
      `/api/departments/${departmentId}`,options
    );
  }



export const getDeleteApiDepartmentsDepartmentIdMutationOptions = <TError = AxiosError<HTTPError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentId>>, TError,{departmentId: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentId>>, TError,{departmentId: number}, TContext> => {

const mutationKey = ['deleteApiDepartmentsDepartmentId'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentId>>, {departmentId: number}> = (props) => {
          const {departmentId} = props ?? {};

          return  deleteApiDepartmentsDepartmentId(departmentId,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiDepartmentsDepartmentIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentId>>>
    
    export type DeleteApiDepartmentsDepartmentIdMutationError = AxiosError<HTTPError>

    /**
 * @summary 删除部门（需要管理员权限）
 */
export const useDeleteApiDepartmentsDepartmentId = <TError = AxiosError<HTTPError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentId>>, TError,{departmentId: number}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentId>>,
        TError,
        {departmentId: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiDepartmentsDepartmentIdMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 获取部门成员列表（需要部门成员权限）
 */
export const getApiDepartmentsDepartmentIdMembers = (
    departmentId: number,
    params?: GetApiDepartmentsDepartmentIdMembersParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetDepartmentMembersOut>> => {
    
    
    return axios.default.get(
      `/api/departments/${departmentId}/members`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetApiDepartmentsDepartmentIdMembersQueryKey = (departmentId: number,
    params?: GetApiDepartmentsDepartmentIdMembersParams,) => {
    return [`/api/departments/${departmentId}/members`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiDepartmentsDepartmentIdMembersQueryOptions = <TData = Awaited<ReturnType<typeof getApiDepartmentsDepartmentIdMembers>>, TError = AxiosError<HTTPError | ValidationError>>(departmentId: number,
    params?: GetApiDepartmentsDepartmentIdMembersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiDepartmentsDepartmentIdMembers>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiDepartmentsDepartmentIdMembersQueryKey(departmentId,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiDepartmentsDepartmentIdMembers>>> = ({ signal }) => getApiDepartmentsDepartmentIdMembers(departmentId,params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(departmentId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiDepartmentsDepartmentIdMembers>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiDepartmentsDepartmentIdMembersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiDepartmentsDepartmentIdMembers>>>
export type GetApiDepartmentsDepartmentIdMembersQueryError = AxiosError<HTTPError | ValidationError>


/**
 * @summary 获取部门成员列表（需要部门成员权限）
 */

export function useGetApiDepartmentsDepartmentIdMembers<TData = Awaited<ReturnType<typeof getApiDepartmentsDepartmentIdMembers>>, TError = AxiosError<HTTPError | ValidationError>>(
 departmentId: number,
    params?: GetApiDepartmentsDepartmentIdMembersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiDepartmentsDepartmentIdMembers>>, TError, TData>, axios?: AxiosRequestConfig}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiDepartmentsDepartmentIdMembersQueryOptions(departmentId,params,options)

  const query = useQuery(queryOptions ) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 添加部门成员（需要部门管理员权限）
 */
export const postApiDepartmentsDepartmentIdMembers = (
    departmentId: number,
    addDepartmentMemberIn: AddDepartmentMemberIn, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<AddDepartmentMemberOut>> => {
    
    
    return axios.default.post(
      `/api/departments/${departmentId}/members`,
      addDepartmentMemberIn,options
    );
  }



export const getPostApiDepartmentsDepartmentIdMembersMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDepartmentsDepartmentIdMembers>>, TError,{departmentId: number;data: AddDepartmentMemberIn}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postApiDepartmentsDepartmentIdMembers>>, TError,{departmentId: number;data: AddDepartmentMemberIn}, TContext> => {

const mutationKey = ['postApiDepartmentsDepartmentIdMembers'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiDepartmentsDepartmentIdMembers>>, {departmentId: number;data: AddDepartmentMemberIn}> = (props) => {
          const {departmentId,data} = props ?? {};

          return  postApiDepartmentsDepartmentIdMembers(departmentId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiDepartmentsDepartmentIdMembersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiDepartmentsDepartmentIdMembers>>>
    export type PostApiDepartmentsDepartmentIdMembersMutationBody = AddDepartmentMemberIn
    export type PostApiDepartmentsDepartmentIdMembersMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 添加部门成员（需要部门管理员权限）
 */
export const usePostApiDepartmentsDepartmentIdMembers = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDepartmentsDepartmentIdMembers>>, TError,{departmentId: number;data: AddDepartmentMemberIn}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof postApiDepartmentsDepartmentIdMembers>>,
        TError,
        {departmentId: number;data: AddDepartmentMemberIn},
        TContext
      > => {

      const mutationOptions = getPostApiDepartmentsDepartmentIdMembersMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 移除部门成员（需要部门管理员权限）
 */
export const deleteApiDepartmentsDepartmentIdMembersUserId = (
    departmentId: number,
    userId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    
    
    return axios.default.delete(
      `/api/departments/${departmentId}/members/${userId}`,options
    );
  }



export const getDeleteApiDepartmentsDepartmentIdMembersUserIdMutationOptions = <TError = AxiosError<HTTPError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentIdMembersUserId>>, TError,{departmentId: number;userId: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentIdMembersUserId>>, TError,{departmentId: number;userId: number}, TContext> => {

const mutationKey = ['deleteApiDepartmentsDepartmentIdMembersUserId'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentIdMembersUserId>>, {departmentId: number;userId: number}> = (props) => {
          const {departmentId,userId} = props ?? {};

          return  deleteApiDepartmentsDepartmentIdMembersUserId(departmentId,userId,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiDepartmentsDepartmentIdMembersUserIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentIdMembersUserId>>>
    
    export type DeleteApiDepartmentsDepartmentIdMembersUserIdMutationError = AxiosError<HTTPError>

    /**
 * @summary 移除部门成员（需要部门管理员权限）
 */
export const useDeleteApiDepartmentsDepartmentIdMembersUserId = <TError = AxiosError<HTTPError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentIdMembersUserId>>, TError,{departmentId: number;userId: number}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiDepartmentsDepartmentIdMembersUserId>>,
        TError,
        {departmentId: number;userId: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiDepartmentsDepartmentIdMembersUserIdMutationOptions(options);

      return useMutation(mutationOptions );
    }
    /**
 * @summary 更新部门成员角色（需要部门管理员权限）
 */
export const putApiDepartmentsDepartmentIdMembersUserIdRole = (
    departmentId: number,
    userId: number,
    updateDepartmentMemberRoleIn: UpdateDepartmentMemberRoleIn, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    
    
    return axios.default.put(
      `/api/departments/${departmentId}/members/${userId}/role`,
      updateDepartmentMemberRoleIn,options
    );
  }



export const getPutApiDepartmentsDepartmentIdMembersUserIdRoleMutationOptions = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiDepartmentsDepartmentIdMembersUserIdRole>>, TError,{departmentId: number;userId: number;data: UpdateDepartmentMemberRoleIn}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putApiDepartmentsDepartmentIdMembersUserIdRole>>, TError,{departmentId: number;userId: number;data: UpdateDepartmentMemberRoleIn}, TContext> => {

const mutationKey = ['putApiDepartmentsDepartmentIdMembersUserIdRole'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiDepartmentsDepartmentIdMembersUserIdRole>>, {departmentId: number;userId: number;data: UpdateDepartmentMemberRoleIn}> = (props) => {
          const {departmentId,userId,data} = props ?? {};

          return  putApiDepartmentsDepartmentIdMembersUserIdRole(departmentId,userId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiDepartmentsDepartmentIdMembersUserIdRoleMutationResult = NonNullable<Awaited<ReturnType<typeof putApiDepartmentsDepartmentIdMembersUserIdRole>>>
    export type PutApiDepartmentsDepartmentIdMembersUserIdRoleMutationBody = UpdateDepartmentMemberRoleIn
    export type PutApiDepartmentsDepartmentIdMembersUserIdRoleMutationError = AxiosError<HTTPError | ValidationError>

    /**
 * @summary 更新部门成员角色（需要部门管理员权限）
 */
export const usePutApiDepartmentsDepartmentIdMembersUserIdRole = <TError = AxiosError<HTTPError | ValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiDepartmentsDepartmentIdMembersUserIdRole>>, TError,{departmentId: number;userId: number;data: UpdateDepartmentMemberRoleIn}, TContext>, axios?: AxiosRequestConfig}
 ): UseMutationResult<
        Awaited<ReturnType<typeof putApiDepartmentsDepartmentIdMembersUserIdRole>>,
        TError,
        {departmentId: number;userId: number;data: UpdateDepartmentMemberRoleIn},
        TContext
      > => {

      const mutationOptions = getPutApiDepartmentsDepartmentIdMembersUserIdRoleMutationOptions(options);

      return useMutation(mutationOptions );
    }
    