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
    // const { danhSachKhoaHoc } = useSelector(state => state.quanLyKhoaHoc1)
    // // console.log('ad', danhSachKhoaHoc)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     const data = quanLyKhoaHocActionThunks.getKhoaHocThunk()
    //     dispatch(data)   
    //     // console.log('data2', data)
    // }, [])
    const { searchPraram } = useSelector((state) => state.quanLyKhoaHocAdmin)
    console.log('searchParam', searchPraram)
    const [danhSachKhoaHoc, setDanhSachKhoaHoc] = useState([{}])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocGet(searchPraram))
            .then(({ payload }) => {
                // console.log('payload',payload);
                setDanhSachKhoaHoc(payload)
            }
            )
            .catch(err => {
                console.log(err)
            })
    }, [searchPraram])

    return (
        <div>
            <SearchAdmin name='Tìm kiếm khoá học' />
            <FormAdmin />
            <div className="mt-4 grid grid-cols-4 gap-y-11 gap-x-5 " >

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
