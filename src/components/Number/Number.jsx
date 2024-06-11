import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./number.css";

export const Number = () => {
  const [counters, setCounters] = useState([5739, 890, 79]);
  const [startTime, setStartTime] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger khi 50% phần tử hiển thị trên màn hình
    triggerOnce: true, // Chỉ kích hoạt một lần
  });

  useEffect(() => {
    if (inView) {
      const start = performance.now();
      setStartTime(start);

      const updateCounters = (timestamp) => {
        const elapsedTime = timestamp - start;
        const updatedCounters = counters.map((counter, index) => {
          const increment = Math.floor(elapsedTime / 50) * (index + 1);
          return Math.min(counter + increment, counter * 1.1);
        });
        setCounters(updatedCounters);

        if (elapsedTime < 2000) {
          requestAnimationFrame(updateCounters);
        }
      };

      requestAnimationFrame(updateCounters);
    }
  }, [inView]); // Trigger lại khi inView thay đổi

  const descriptions = [
    "Mở rộng kiến thức công nghệ thông tin với hơn 5000 học viên, nơi bạn có cơ hội trải nghiệm những khóa học chất lượng, đa dạng và phong phú về chủ đề IT, từ lập trình cơ bản đến các công nghệ tiên tiến nhất",
    "Với mạng lưới liên kết rộng khắp, chúng tôi kết nối và hỗ trợ hơn 1050 doanh nghiệp trong và ngoài nước, mang lại cơ hội hợp tác và phát triển toàn diện.",
    "Khám phá khóa học đa dạng với tổng cộng 96 chủ đề khác nhau, từ cơ bản đến nâng cao, để bạn có thể tự tin phát triển sự nghiệp trong lĩnh vực IT"
  ];

  return (
    <div className="container mx-auto about__number mt-[40px]">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
      >
        {counters.map((counter, index) => (
          <div className="number__item" key={index}>
            <div className="item__content">
              <h4 className="font-bold">
                {index === 0 && "Số lượng học viên"}
                {index === 1 && "Doanh nghiệp được kết nối"}
                {index === 2 && "Số lượng khóa học"}
              </h4>
              <p className="counter text-orange-500">{Math.round(counter)}</p>{" "}
              {/* Làm tròn số */}
              <p className="text-gray-500">{descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
