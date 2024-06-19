import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY_USER_SEARCH } from '../constant/constant'
import { qlNguoiDungServices } from '../services/qlNguoiDung.service'

export const useGetSearchUser = (tuKhoa) => {
    const q = useQuery({
        queryKey: [QUERY_KEY_USER_SEARCH, tuKhoa],
        queryFn: () => qlNguoiDungServices.searchUser(tuKhoa),
    })

    return {
        ...q,
        data: q?.data?.data,
    }
}