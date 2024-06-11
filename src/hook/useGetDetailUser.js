import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY_DETAIL_USER } from '../constant/constant'
import { qlNguoiDungServices } from '../services/qlNguoiDung.service'

export const useGetDetailUser = () => {
    const q = useQuery({
        queryKey: [QUERY_KEY_DETAIL_USER],
        queryFn: () => qlNguoiDungServices.getDetailUser(),
    })

    return {
        ...q,
        data: q?.data?.data,
    }
}
