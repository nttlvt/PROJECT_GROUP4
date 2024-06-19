import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY_USER_LIST } from '../constant/constant'
import { qlNguoiDungServices } from '../services/qlNguoiDung.service'

export const useGetListUser = () => {
    const q = useQuery({
        queryKey: [QUERY_KEY_USER_LIST],
        queryFn: () => qlNguoiDungServices.getListUser(),
    })

    return {
        ...q,
        data: q?.data?.data,
    }
}