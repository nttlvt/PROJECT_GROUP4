import { useQuery } from '@tanstack/react-query'
import { quanLyCoursesServices } from '../services/qlCourses.service'
import { QUERY_KEY_COURSE_LIST } from '../constant/constant'

export const useGetCourseList = () => {
    const q = useQuery({
        queryKey: [QUERY_KEY_COURSE_LIST],
        queryFn: () => quanLyCoursesServices.getCourseList(),
    })

    return {
        ...q,
        data: q?.data?.data,
    }
}
