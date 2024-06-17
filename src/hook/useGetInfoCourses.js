import { useQuery } from '@tanstack/react-query'
import { quanLyCoursesServices } from '../services/qlCourses.service'
import { QUERY_KEY_INFO_COURSE } from '../constant/constant'

export const useGetInfoCourses = (maKhoaHoc) => {
    const q = useQuery({
        queryKey: [QUERY_KEY_INFO_COURSE, maKhoaHoc],
        queryFn: () => quanLyCoursesServices.getInfoCourses(maKhoaHoc),
    })

    return {
        ...q,
        data: q?.data,
    }
}
