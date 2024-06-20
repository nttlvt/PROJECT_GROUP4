import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from './Cart';
import { SearchAdmin } from './Search';
import { QuanLyKhoaHocService } from '../../services/QuanLyKhoaHocService';
import { FormAdmin } from './FormAdmin';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
const { Meta } = Card;

export const QlKH = () => {
    const { searchPraram } = useSelector((state) => state.quanLyKhoaHocAdmin)
    const [danhSachKhoaHoc, setDanhSachKhoaHoc] = useState([{}])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocGet(searchPraram))
            .then(({ payload }) => {
                setDanhSachKhoaHoc(payload)
            }
            )
            .catch(err => {
                console.log(err)
            })
    }, [searchPraram])

    return (
        <div className='lg:ms-[100px] md:ms-[40px]'>
            <SearchAdmin name='Tìm kiếm khoá học'/>
            <FormAdmin />
            <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-y-10 gap-y-5 lg:gap-x-0 md:gap-x-5">
                {
                    danhSachKhoaHoc && danhSachKhoaHoc.length > 0 ? (
                        danhSachKhoaHoc.map((value, index) => (
                            <div key={index} className="">
                                <Cart danhSachKhoaHoc={value} />
                            </div>
                        ))
                    ) : (
                        <p>Không tồn tại khoá học</p>
                    )
                }
            </div>
        </div>
    )
}
