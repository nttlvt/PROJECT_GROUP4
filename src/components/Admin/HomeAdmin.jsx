import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { BookOutlined, UserOutlined, EyeOutlined, CrownOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { TOKENCYBERSOFT } from '../../constant/constant';

const { Title } = Typography;

export const HomeAdmin = () => {
  const [courseData, setCourseData] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [mostSelectedCategory, setMostSelectedCategory] = useState('');
  const [topCourses, setTopCourses] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
          {
            headers: {
              TokenCybersoft: TOKENCYBERSOFT
            }
          }
        );
        const courses = response.data;
        setCourseData(courses);

        // Calculate total courses
        const totalCourses = courses.length;
        setTotalCourses(totalCourses);

        // Calculate total students
        const totalStudents = courses.reduce((total, course) => total + course.luotXem, 0);
        setTotalStudents(totalStudents);

        // Calculate category counts
        const counts = courses.reduce((acc, course) => {
          const category = course.danhMucKhoaHoc ? course.danhMucKhoaHoc.maDanhMucKhoahoc : 'Unknown';
          acc[category] = acc[category] ? acc[category] + 1 : 1;
          return acc;
        }, {});
        setCategoryCounts(counts);

        // Find the category with the most courses
        const maxCategory = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        setMostSelectedCategory(maxCategory);

        // Sort courses by number of students (luotXem) in descending order
        courses.sort((a, b) => b.luotXem - a.luotXem);

        // Take top 3 courses with most students
        const topCourses = courses.slice(0, 3);
        setTopCourses(topCourses);

      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <div className="p-6">
      <Row justify="center" className="mb-6">
        <Title level={2} className="animate-fadeInDown">Xin chào, Admin</Title>
      </Row>
      <Row gutter={16} className="mb-6">
        <Col xs={24} sm={12} md={8}>
          <Card className="animate-fadeInLeft">
            <Statistic
              title="Tổng khoá học"
              value={totalCourses}
              prefix={<BookOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="animate-fadeIn">
            <Statistic
              title="Số lượng học viên"
              value={totalStudents}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="animate-fadeInRight">
            <Statistic
              title="Tổng lượt xem"
              value={courseData.reduce((total, course) => total + course.luotXem, 0)}
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className="mb-6">
        <Col xs={24} md={12}>
          <Card title={`Biểu đồ danh mục phổ biến - ${mostSelectedCategory}`} className="animate-fadeInUp">
            <BarChart
              width={600}
              height={400}
              data={Object.keys(categoryCounts).map(category => ({
                name: category,
                count: categoryCounts[category]
              }))}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Số lượng khoá học" />
            </BarChart>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={`Top 3 khoá học nhiều học viên nhất`} className="animate-fadeInUp">
            {topCourses.map((course, index) => (
              <Card key={course.maKhoaHoc} className="mb-4 p-4 border rounded-md">
                <Row gutter={16} align="middle">
                  <Col span={6} className="flex justify-center items-center">
                    {index === 0 && <CrownOutlined className="text-3xl text-yellow-500" />}
                    <img
                      src={course.hinhAnh}
                      alt={course.tenKhoaHoc}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Title level={5} className="mb-2">{course.tenKhoaHoc}</Typography.Title>
                    <Statistic title="Số lượng học viên" value={course.luotXem} />
                  </Col>
                </Row>
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
