import React, { useEffect } from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { effect } from 'zod';
import { QuanLyKhoaHocAdminActions } from '../../store/QuanLyKhoaHocAdmin';
const { Search } = Input;


export const SearchAdmin = ({ name }) => {
    // console.log(keySearch)
    const { searchParma } = useSelector((state) => state.quanLyKhoaHocAdmin)
    const [searchParam, setSearchParam] = useSearchParams()
    const dispatch = useDispatch()
    // const onSearch = (value, _e, info) => setSearchParam({ TenKhoaHoc: value });
    const onSearch = (value, _e, info) => dispatch(QuanLyKhoaHocAdminActions.searchKhoaHoc(value ? value : ''));

    return (
        <div className='my-3'>
            <Search placeholder={name} onSearch={onSearch} enterButton />
        </div>
    )
}
