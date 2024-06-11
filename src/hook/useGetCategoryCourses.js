import { useQuery } from '@tanstack/react-query'
import { quanLyCoursesServices } from '../services/qlCourses.service'
import { QUERY_KEY_CATEGORY_COURSE_LIST } from '../constant/constant'

export const useGetCategoryCourses = (tenDanhMuc) => {
    const q = useQuery({
        queryKey: [QUERY_KEY_CATEGORY_COURSE_LIST],
        queryFn: () => quanLyCoursesServices.getCategoryCourses(tenDanhMuc),
    })

    return {
        ...q,
        data: q?.data?.data,
    }
}
